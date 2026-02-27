import React from "react";
import Image from "next/image";

const SPEAKERS = [
  {
    name: "João Pedro Gress",
    role: "Cyber Security Specialist",
    topic: "Segurança Cibernética: Protegendo o Futuro Digital",
    imageSrc: "/FotoGress.jpg",
  },
  {
    name: "Danúbia Santos",
    role: "Scrum Master",
    topic: "Scrum: Metodologia Ágil para Desenvolvimento de Software",
    imageSrc: "/FotoDanubia.jpeg",
  },
  {
    name: "Kaic Marçal",
    role: "Student SI",
    topic: "Oficina de arduino",
    imageSrc: "/FotoMarcal.jpeg",
  },
  {
    name: "Oficina 2",
    role: "A ser anunciado",
    topic: "topico a ser apresentado",
    imageSrc: "/oficina-2.jpg",
  },
];

export default function Speakers() {
  return (
    <section className="py-20 container mx-auto px-4 text-white border-t border-white/5">
      <h2 className="text-4xl font-bold mb-12 text-center">
        PALESTRANTES &{" "}
        <span
          className="bg-linear-to-r 
    from-purple-500 
    via-pink-500 
    to-blue-500 
    bg-size-[200%_200%]
    bg-clip-text 
    text-transparent 
    animate-gradient"
        >
          OFICINAS
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {SPEAKERS.map((speaker, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-all duration-300 hover:scale-105 transform hover:border-purple-500 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]"
          >
            <div className="h-80 bg-zinc-800 relative">
              <Image
                src={speaker.imageSrc}
                alt={`Foto de ${speaker.name}`}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
              <p className="text-purple-400 text-sm mb-4">{speaker.role}</p>
              <div className="border-t border-white/5 pt-4 mt-2">
                <p className="text-gray-300 text-sm italic">{speaker.topic}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
