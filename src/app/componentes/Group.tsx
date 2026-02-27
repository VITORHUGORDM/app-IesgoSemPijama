import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Group() {
  return (
    <section
      id="grupo-vip"
      className="py-20 border-t border-white/5 bg-linear-to-b from-black via-zinc-950 to-purple-950/20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Coluna Esquerda - Texto e Botão */}
          <div className="flex-1 text-left">
            <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-purple-300/80">
              GRUPO
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Grupo para ficar por dentro das novidades.
            </h2>
            <p className="text-gray-300 mb-8">
              Junte-se ao nosso grupo e tenha acesso a informações
              privilegiadas, descontos exclusivos e a oportunidade de se
              conectar com outros entusiastas do evento. Não perca a chance de
              fazer parte dessa comunidade especial!
            </p>
            <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition">
              <Link
                href="https://chat.whatsapp.com/JlNOJ1DannTEdijHVtLUUT?mode=gi_t"
                target="_blank"
              >
                ENTRAR NO GRUPO
              </Link>
            </button>
          </div>

          {/* Coluna Direita - QR Code */}
          <div className="flex-shrink-0 relative w-64 md:w-72 h-64 md:h-72">
            <Image
              src="/qr-code.jpeg"
              alt="QR CODE para o grupo"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="rounded-lg shadow-lg object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
