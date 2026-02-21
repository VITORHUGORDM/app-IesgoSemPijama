import React from "react";

export default function VipGroup() {
  const perks = [
    {
      title: "Acesso Prioritario",
      description:
        "Entrada antecipada para garantir os melhores lugares nas atividades principais.",
    },
    {
      title: "Area Reservada",
      description:
        "Espaco exclusivo para networking com ambiente mais confortavel durante o evento.",
    },
    {
      title: "Conteudo Premium",
      description:
        "Sessao especial com convidados e temas estrategicos para acelerar sua carreira.",
    },
    {
      title: "Kit VIP",
      description:
        "Brindes exclusivos da edicao para quem quer viver a experiencia completa.",
    },
  ];

  return (
    <section
      id="grupo-vip"
      className="py-20 border-t border-white/5 bg-linear-to-b from-black via-zinc-950 to-purple-950/20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
            GRUPO VIP
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiencia exclusiva para quem quer mais
          </h2>
          <p className="text-gray-300">
            Beneficios especiais para elevar sua jornada no Iesgo Sem Pijama,
            com acesso diferenciado e oportunidades unicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {perks.map((perk) => (
            <article
              key={perk.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-purple-300">
                {perk.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {perk.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition ">
            ENTRAR NO GRUPO VIP
          </button>
        </div>
      </div>
    </section>
  );
}
