import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Database from "better-sqlite3";

type SQLiteDatabase = InstanceType<typeof Database>;

type GlobalWithDb = typeof globalThis & {
  __inscricaoDb?: SQLiteDatabase;
};

const globalForDb = globalThis as GlobalWithDb;

function getTmpDir() {
  return (
    process.env.TMPDIR ?? process.env.TEMP ?? process.env.TMP ?? os.tmpdir()
  );
}

function ensureDir(dirPath: string) {
  fs.mkdirSync(dirPath, { recursive: true });
  fs.accessSync(dirPath, fs.constants.W_OK);
}

function getWritableDbPath() {
  const fileName = "inscricoes.db";

  if (process.env.INSCRICOES_DB_PATH) {
    try {
      const customPath = process.env.INSCRICOES_DB_PATH;
      const customDir = path.dirname(customPath);

      ensureDir(customDir);

      return customPath;
    } catch {
      // fallback para os próximos caminhos
    }
  }

  const localDataDir = path.join(process.cwd(), "data");

  try {
    ensureDir(localDataDir);

    return path.join(localDataDir, fileName);
  } catch {
    const tmpDir = getTmpDir();

    ensureDir(tmpDir);

    return path.join(tmpDir, fileName);
  }
}

function initializeDatabase(dbPath: string) {
  const db = new Database(dbPath);

  db.exec(`
      CREATE TABLE IF NOT EXISTS inscricoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

  return db;
}

function getDatabase() {
  if (!globalForDb.__inscricaoDb) {
    const dbPath = getWritableDbPath();

    try {
      globalForDb.__inscricaoDb = initializeDatabase(dbPath);
    } catch {
      const fallbackPath = path.join(getTmpDir(), "inscricoes.db");
      ensureDir(path.dirname(fallbackPath));
      globalForDb.__inscricaoDb = initializeDatabase(fallbackPath);
    }
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
