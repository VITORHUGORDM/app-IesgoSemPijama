import React from "react";
import { Zap, Users, Rocket } from "lucide-react";

export default function Purpose() {
  return (
    <section id="sobre" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          NOSSO <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200% bg-clip-text text-transparent animate-gradient">PROPÓSITO</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl border-l-4 border-purple-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]">
            <Zap className="w-12 h-12 text-purple-500 mb-6 bg-purple-500/10 p-2 rounded-lg" />
            <h3 className="text-2xl font-bold mb-4">Inspiração</h3>
            <p className="text-gray-400 leading-relaxed">
              Acender a chama da criatividade através de palestras impactantes e
              experiências imersivas.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border-l-4 border-pink-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_28px_rgba(236,72,153,0.55)]">
            <Users className="w-12 h-12 text-pink-500 mb-6 bg-pink-500/10 p-2 rounded-lg" />
            <h3 className="text-2xl font-bold mb-4">Conexão</h3>
            <p className="text-gray-400 leading-relaxed">
              Criar um ecossistema vibrante onde estudantes e profissionais se
              encontram.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border-l-4 border-blue-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]">
            <Rocket className="w-12 h-12 text-blue-500 mb-6 bg-blue-500/10 p-2 rounded-lg" />
            <h3 className="text-2xl font-bold mb-4">Evolução</h3>
            <p className="text-gray-400 leading-relaxed">
              Impulsionar carreiras fornecendo ferramentas práticas e insights
              valiosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
