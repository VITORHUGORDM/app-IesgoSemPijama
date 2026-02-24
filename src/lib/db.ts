import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

type SQLiteDatabase = InstanceType<typeof Database>;

type GlobalWithDb = typeof globalThis & {
  __inscricaoDb?: SQLiteDatabase;
};

const globalForDb = globalThis as GlobalWithDb;

function getWritableDbPath() {
  const fileName = "inscricoes.db";

  if (process.env.INSCRICOES_DB_PATH) {
    const customPath = process.env.INSCRICOES_DB_PATH;
    const customDir = path.dirname(customPath);
    fs.mkdirSync(customDir, { recursive: true });

    return customPath;
  }

  const localDataDir = path.join(process.cwd(), "data");

  try {
    fs.mkdirSync(localDataDir, { recursive: true });

    return path.join(localDataDir, fileName);
  } catch {
    const tmpDir =
      process.env.TMPDIR ?? process.env.TEMP ?? process.env.TMP ?? "/tmp";

    fs.mkdirSync(tmpDir, { recursive: true });

    return path.join(tmpDir, fileName);
  }
}

function getDatabase() {
  if (!globalForDb.__inscricaoDb) {
    const dbPath = getWritableDbPath();
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
