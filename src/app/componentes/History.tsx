import React from "react";

export default function History() {
  return (
    <section
      id="historia"
      className="py-20 bg-zinc-950 text-white border-t border-white/5"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-10 text-center">
          NOSSA{" "}
          <span className="bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-[200%_200%] bg-clip-text text-transparent animate-gradient">
            HISTORIA
          </span>
        </h2>

        <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Nossa Historia
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                A noite em que a energia nao foi dormir
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tudo comecou com um grupo de estudantes que ficou no campus
                depois do horario, testando ideias e prototipos ate o amanhecer.
                Quando o relogio marcou 03:00, a luz da sala continuava acesa e
                alguem disse: Aqui ninguem vai de pijama. A frase pegou, virou
                lema e, no ano seguinte, nasceu o Iesgo Sem Pijama: uma maratona
                de conhecimento, criatividade e conexoes que atravessa a
                madrugada com tecnologia, musica e desafios ao vivo.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Melhores Experiencias
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                O que torna o evento inesquecivel
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  Desafios ao vivo que colocam equipes para criar solucoes em
                  tempo real.
                </li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  Networking com estudantes, mentores e profissionais do
                  mercado.
                </li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  Energia da madrugada com tecnologia, musica e colaboracao.
                </li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  Momentos de superacao que viram historia para toda a
                  comunidade.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
