import React from "react";
import Image from "next/image";

export default function Gallery() {
  const photos = [
    {
      src: "",
      edition: "Edicao 2024",
      caption: "a tratar.",
    },
    {
      src: "",
      edition: "Edicao 2025",
      caption: "a tratar.",
    },
    {
      src: "",
      edition: "Edicao 2026",
      caption: "a tratar",
    },
  ];

  return (
    <section id="galeria" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
            GALERIA
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Fotos das edicoes anteriores
          </h2>
          <p className="text-gray-300">
            Reviva os melhores momentos que marcaram as ultimas jornadas do
            Iesgo Sem Pijama.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {photos.map((photo, index) => (
            <article
              key={`${photo.edition}-${index}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={85}
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Sem imagem</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-purple-500/80 px-3 py-1 text-xs font-bold text-white">
                  {photo.edition}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
