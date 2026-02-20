import React from "react";

export default function History() {
  return (
    <section id="historia" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-center">
          NOSSA{" "}
          <span className="bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-[200%_200%] bg-clip-text text-transparent animate-gradient">
            HISTORIA
          </span>
        </h2>

        <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
            Lenda de Origem
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A noite em que a energia nao foi dormir
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Tudo comecou com um grupo de estudantes que ficou no campus depois
            do horario, testando ideias e prototipos ate o amanhecer. Quando o
            relogio marcou 03:00, a luz da sala continuava acesa e alguem disse:
            &quot;Aqui ninguem vai de pijama.&quot; A frase pegou, virou lema e,
            no ano seguinte, nasceu o Iesgo Sem Pijama: uma maratona de
            conhecimento, criatividade e conexoes que atravessa a madrugada com
            tecnologia, musica e desafios ao vivo.
          </p>
        </div>
      </div>
    </section>
  );
}
