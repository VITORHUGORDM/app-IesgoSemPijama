import React from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Onde será o evento?", a: "Faculdades Integradas IESGO, Formosa - GO." },
  {
    q: "Preciso levar meu computador?",
    a: "Recomendado para o Hackathon, mas não obrigatório.",
  },
  {
    q: "Haverá certificado?",
    a: "Sim, certificado de 12 horas complementares.",
  },
  {
    q: "Menores de idade podem participar?",
    a: "Sim, menores de idade podem participar desde que tenham autorização dos responsáveis.",
  },
  {
    q: "Tem alimentação no local?",
    a: "Sim, haverá alimentação durante o evento.",
  },
];

export default function Faq() {
  return (
    <section className="py-20 container mx-auto px-4 max-w-3xl text-white border-t border-white/5">
      <h2 className="text-3xl font-bold mb-12 text-center">
        PERGUNTAS <span className="text-purple-500">FREQUENTES</span>
      </h2>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <details
            key={idx}
            className="bg-zinc-900 rounded-lg group open:ring-1 open:ring-purple-500/50"
          >
            <summary className="cursor-pointer p-6 font-bold flex justify-between items-center list-none">
              {faq.q}
              <span className="block group-open:rotate-180 transition-transform">
                <ChevronDown />
              </span>
            </summary>
            <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
