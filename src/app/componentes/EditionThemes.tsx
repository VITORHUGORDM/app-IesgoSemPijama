import React from "react";

export default function EditionThemes() {
  const themes = [
    {
      title: "Inteligencia Artificial Aplicada",
      description:
        "Uso pratico de IA em produtos digitais, automacoes e tomada de decisao.",
    },
    {
      title: "Desenvolvimento Full Stack",
      description:
        "Boas praticas para construir aplicacoes modernas, escalaveis e seguras.",
    },
    {
      title: "UX, Produto e Inovacao",
      description:
        "Como transformar problemas reais em experiencias digitais relevantes para usuarios.",
    },
    {
      title: "Carreira e Mercado Tech",
      description:
        "Tendencias do setor, habilidades mais valorizadas e estrategias de crescimento profissional.",
    },
  ];

  return (
    <section
      id="temas"
      className="py-20 border-t border-white/5 bg-linear-to-b from-black via-zinc-950 to-zinc-900/20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
            TEMAS DA EDICAO
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            O que sera tratado no evento
          </h2>
          <p className="text-gray-300">
            Conteudos selecionados para conectar conhecimento tecnico, inovacao
            e oportunidades reais no ecossistema de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {themes.map((theme) => (
            <article
              key={theme.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur hover:border-purple-500/60 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {theme.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {theme.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
