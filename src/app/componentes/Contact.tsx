import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
            FALE CONOSCO
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Tire suas duvidas sobre o evento
          </h2>
          <p className="text-gray-300">
            Nossa equipe está pronta para ajudar com informações sobre
            inscrição, programação, parcerias e participação no Iesgo Sem
            Pijama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-5">
              Contato direto
            </h3>
            <ul className="space-y-4 text-gray-200">
              <li>
                <span className="font-semibold text-purple-200">E-mail:</span>{" "}
                contato@iesgosempijama.com.br
              </li>
              <li>
                <span className="font-semibold text-purple-200">WhatsApp:</span>{" "}
                (62) 99999-9999
              </li>
              <li>
                <span className="font-semibold text-purple-200">
                  Instagram:
                </span>{" "}
                @iesgosempijama
              </li>
            </ul>
          </article>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Envie sua mensagem
            </h3>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
            />
            <textarea
              placeholder="Digite sua mensagem"
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
            />
            <button
              type="button"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-sm md:text-base hover:scale-105 transition transform"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
