"use client";

import React, { FormEvent, useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviarInscricao = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnviando(true);
    setMensagem("");

    try {
      const response = await fetch("/api/inscricoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email }),
      });

      const data = (await response.json()) as {
        erro?: string;
        mensagem?: string;
      };

      if (!response.ok) {
        setMensagem(data.erro ?? "Não foi possível concluir a inscrição.");
        return;
      }

      setMensagem(data.mensagem ?? "Inscrição registrada com sucesso.");
      setNome("");
      setEmail("");
    } catch {
      setMensagem("Não foi possível concluir a inscrição.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center min-h-[90vh] bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/80 bg-linear-to-t from-black via-black/80 to-transparent"></div>

      <div
        className={`relative ${formOpen ? "z-30" : "z-10"} max-w-4xl mx-auto space-y-6 text-white`}
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4">
          Iesgo Sem{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
            PIJAMA
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 font-medium tracking-wide">
          À NOITE FAZEMOS PROGRAMA
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Uma noite intensa dedicada à inovação, tecnologia e criatividade.
          Mergulhe na energia única do maior evento tech da região.
        </p>

        <button
          onClick={() => setFormOpen((prev) => !prev)}
          className="bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition transform shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >
          INSCREVA-SE AGORA
        </button>

        {formOpen ? (
          <form
            onSubmit={enviarInscricao}
            className="relative z-30 mt-6 bg-black/70 border border-purple-500/40 rounded-2xl p-6 max-w-xl mx-auto text-left space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-white">
                Formulário de Inscrição
              </h2>
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                aria-label="Fechar formulário"
                className="rounded-lg border border-purple-500/40 p-2 text-purple-200 hover:bg-purple-500/10 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div>
              <label
                htmlFor="nome"
                className="block text-sm text-purple-200 mb-1"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
                className="w-full rounded-xl bg-black/50 border border-purple-500/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-purple-200 mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl bg-black/50 border border-purple-500/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                placeholder="voce@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl disabled:opacity-60"
            >
              {enviando ? "Enviando..." : "Confirmar inscrição"}
            </button>

            {mensagem ? (
              <p className="text-sm text-purple-200">{mensagem}</p>
            ) : null}
          </form>
        ) : null}
      </div>
    </section>
  );
}
