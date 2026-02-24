import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

type SQLiteDatabase = InstanceType<typeof Database>;

type GlobalWithDb = typeof globalThis & {
  __inscricaoDb?: SQLiteDatabase;
};

const globalForDb = globalThis as GlobalWithDb;

function getDatabase() {
  if (!globalForDb.__inscricaoDb) {
    const dataDir = path.join(process.cwd(), "data");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const dbPath = path.join(dataDir, "inscricoes.db");
    const db = new Database(dbPath);

    db.exec(`
      CREATE TABLE IF NOT EXISTS inscricoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    globalForDb.__inscricaoDb = db;
  }

  return globalForDb.__inscricaoDb;
}

export type Inscricao = {
  id: number;
  nome: string;
  email: string;
  criado_em: string;
};

export function criarInscricao(nome: string, email: string) {
  const db = getDatabase();
  const statement = db.prepare(
    "INSERT INTO inscricoes (nome, email) VALUES (?, ?)",
  );

  return statement.run(nome, email);
}

export function listarInscricoes() {
  const db = getDatabase();
  const statement = db.prepare(
    "SELECT id, nome, email, criado_em FROM inscricoes ORDER BY datetime(criado_em) DESC",
  );

  return statement.all() as Inscricao[];
}
