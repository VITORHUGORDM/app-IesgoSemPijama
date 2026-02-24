import { NextResponse } from "next/server";
import { criarInscricao, listarInscricoes } from "@/lib/db";

export const runtime = "nodejs";

function isEmailValido(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  try {
    const inscricoes = await listarInscricoes();

    return NextResponse.json({
      total: inscricoes.length,
      inscritos: inscricoes,
    });
  } catch (error) {
    const mensagemErro = error instanceof Error ? error.message : "";

    return NextResponse.json(
      { erro: mensagemErro || "Não foi possível listar os inscritos." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = String(body?.nome ?? "").trim();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    if (!nome || !email) {
      return NextResponse.json(
        { erro: "Nome e e-mail são obrigatórios." },
        { status: 400 },
      );
    }

    if (!isEmailValido(email)) {
      return NextResponse.json({ erro: "E-mail inválido." }, { status: 400 });
    }

    await criarInscricao(nome, email);

    return NextResponse.json({
      sucesso: true,
      mensagem: "Inscrição registrada com sucesso.",
    });
  } catch (error) {
    const mensagemErro =
      error instanceof Error ? error.message.toLowerCase() : "";
    const storageNaoConfigurado = mensagemErro.includes(
      "persistência não configurada",
    );

    const emailDuplicado =
      mensagemErro.includes("unique") ||
      mensagemErro.includes("constraint failed");

    const mensagem = storageNaoConfigurado
      ? "Persistência não configurada no deploy. Configure Vercel KV."
      : emailDuplicado
        ? "Este e-mail já está inscrito."
        : "Não foi possível registrar a inscrição.";

    const status = storageNaoConfigurado
      ? 503
      : mensagem.includes("já está")
        ? 409
        : 500;

    return NextResponse.json({ erro: mensagem }, { status });
  }
}
