import React from "react";

const SPEAKERS = [
  {
    name: "Palestrante 1",
    role: "CEO da Empresa X",
    topic: "O Futuro da IA Generativa",
  },
  {
    name: "Palestrante 2",
    role: "Funçao na sua area",
    topic: "topico a ser apresentado",
  },
  {
    name: "Palestrante 3",
    role: "Engenheiro de Software",
    topic:
      "Como a IA Generativa está Transformando o Desenvolvimento de Software",
  },
];

export default function Speakers() {
  return (
    <section className="py-20 container mx-auto px-4 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        PALESTRANTES &{" "}
        <span
          className="bg-gradient-to-r 
    from-purple-500 
    via-pink-500 
    to-blue-500 
    bg-[length:200%_200%]
    bg-clip-text 
    text-transparent 
    animate-gradient"
        >
          CONVIDADOS
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {SPEAKERS.map((speaker, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-all duration-300 hover:scale-105 transform hover:border-purple-500 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]"
          >
            <div className="h-64 bg-zinc-800 relative">
              <div className="w-full h-full flex items-center justify-center text-zinc-600 bg-zinc-800">
                <span className="text-4xl font-bold opacity-20">FOTO</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
              <p className="text-purple-400 text-sm mb-4">{speaker.role}</p>
              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-gray-300 text-sm italic">
                  "{speaker.topic}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
