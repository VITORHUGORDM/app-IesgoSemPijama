import React from "react";

const SPEAKERS = [
  {
    name: "Palestrante 1",
    role: "Senior AI Engineer @ Google",
    topic: "O Futuro da IA Generativa",
  },
  {
    name: "Palestrante 2",
    role: "CTO @ Fintech Unicorn",
    topic: "Escalando Arquiteturas",
  },
  {
    name: "Palestrante 3",
    role: "Product Designer @ Spotify",
    topic: "UX Imersivo",
  },
];

export default function Speakers() {
  return (
    <section className="py-20 container mx-auto px-4 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        PALESTRANTES & <span className="text-pink-500">CONVIDADOS</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {SPEAKERS.map((speaker, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5"
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
