import React from "react";

export default function Partners() {
  const organizers = ["IESGO", "LADS"];
  const partners = [
    "Parceria",
    "Parceria",
    "Parceria",
    "Parceria",
    "Parceria",
    "Parceria",
  ];

  return (
    <section id="parcerias" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
            REALIZACAO E PARCERIAS
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Quem torna esta edicao possivel
          </h2>
          <p className="text-gray-300">
            O Iesgo Sem Pijama e construído por uma rede de organizadores,
            parceiros e apoiadores que fortalecem a comunidade tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Realizacao</h3>
            <div className="flex flex-wrap gap-3">
              {organizers.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Parcerias</h3>
            <div className="flex flex-wrap gap-3">
              {partners.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
