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

function isKvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function runKvCommand(command: Array<string>) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error("KV não configurado.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Falha ao acessar o KV.");
  }

  const data = (await response.json()) as {
    result?: unknown;
    error?: string;
  };

  if (data.error) {
    throw new Error(data.error);
  }

  return data.result;
}

const INSCRICOES_KV_KEY = "inscricoes:v1";

async function listarInscricoesKv() {
  const raw = await runKvCommand(["GET", INSCRICOES_KV_KEY]);

  if (typeof raw !== "string" || !raw) {
    return [] as Inscricao[];
  }

  const parsed = JSON.parse(raw) as Inscricao[];

  return parsed.sort(
    (a, b) => new Date(b.criado_em).getTime() - new Date(a.criado_em).getTime(),
  );
}

async function criarInscricaoKv(nome: string, email: string) {
  const inscricoes = await listarInscricoesKv();

  const existeEmail = inscricoes.some(
    (inscricao) => inscricao.email.toLowerCase() === email.toLowerCase(),
  );

  if (existeEmail) {
    throw new Error("UNIQUE constraint failed: inscricoes.email");
  }

  const novaInscricao: Inscricao = {
    id: Date.now(),
    nome,
    email,
    criado_em: new Date().toISOString(),
  };

  const atualizado = [novaInscricao, ...inscricoes];

  await runKvCommand(["SET", INSCRICOES_KV_KEY, JSON.stringify(atualizado)]);

  return novaInscricao;
}

export async function criarInscricao(nome: string, email: string) {
  if (isKvConfigured()) {
    return criarInscricaoKv(nome, email);
  }

  const db = getDatabase();
  const statement = db.prepare(
    "INSERT INTO inscricoes (nome, email) VALUES (?, ?)",
  );

  return statement.run(nome, email);
}

export async function listarInscricoes() {
  if (isKvConfigured()) {
    return listarInscricoesKv();
  }

  const db = getDatabase();
  const statement = db.prepare(
    "SELECT id, nome, email, criado_em FROM inscricoes ORDER BY datetime(criado_em) DESC",
  );

  return statement.all() as Inscricao[];
}
