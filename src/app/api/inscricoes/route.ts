import { NextResponse } from "next/server";
import { criarInscricao, listarInscricoes } from "@/lib/db";

function isEmailValido(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  try {
    const inscricoes = listarInscricoes();

    return NextResponse.json({
      total: inscricoes.length,
      inscritos: inscricoes,
    });
  } catch {
    return NextResponse.json(
      { erro: "Não foi possível listar os inscritos." },
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

    criarInscricao(nome, email);

    return NextResponse.json({
      sucesso: true,
      mensagem: "Inscrição registrada com sucesso.",
    });
  } catch (error) {
    const mensagem =
      error instanceof Error && error.message.includes("UNIQUE")
        ? "Este e-mail já está inscrito."
        : "Não foi possível registrar a inscrição.";

    const status = mensagem.includes("já está") ? 409 : 500;

    return NextResponse.json({ erro: mensagem }, { status });
  }
}
