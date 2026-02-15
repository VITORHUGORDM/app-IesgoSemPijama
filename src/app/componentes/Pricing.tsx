import React from "react";

export default function Pricing() {
  return (
    <section id="ingressos" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          GARANTA SUA <span className="text-pink-500">VAGA</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          As vagas são limitadas. Escolha a melhor experiência para você.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Basic */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-2">ESTUDANTE</h3>
            <div className="text-4xl font-bold mb-6">R$ 49,90</div>
            <ul className="space-y-4 text-gray-400 text-sm mb-8">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> Acesso a todas as
                palestras
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> Certificado de 12h
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> Kit Boas-vindas
                Digital
              </li>
            </ul>
            <button className="w-full border border-purple-500 text-purple-400 py-3 rounded-lg font-bold hover:bg-purple-500 hover:text-white transition">
              COMPRAR AGORA
            </button>
          </div>

          {/* Pro */}
          <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-purple-500 relative transform md:scale-110 shadow-2xl shadow-purple-900/20">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MAIS VENDIDO
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-400">
              EXPERIÊNCIA PRO
            </h3>
            <div className="text-4xl font-bold mb-6">R$ 89,90</div>
            <ul className="space-y-4 text-gray-300 text-sm mb-8">
              <li className="flex gap-2">
                <span className="text-purple-500">✓</span> Tudo do plano
                Estudante
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✓</span> Kit Físico Oficial
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✓</span> Acesso Workshop
                Exclusivo
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✓</span> Happy Hour VIP
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
              COMPRAR AGORA
            </button>
          </div>

          {/* Squad */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-2">SQUAD (5 PESSOAS)</h3>
            <div className="text-4xl font-bold mb-6">R$ 199,90</div>
            <ul className="space-y-4 text-gray-400 text-sm mb-8">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> 5 ingressos Estudante
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> Desconto progressivo
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span> Mesa reservada no
                Hackathon
              </li>
            </ul>
            <button className="w-full border border-purple-500 text-purple-400 py-3 rounded-lg font-bold hover:bg-purple-500 hover:text-white transition">
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
