import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 transition text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition text-white"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-500 transition text-white"
          >
            <Twitter size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mb-12 border-b border-white/10 pb-12">
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <p className="text-gray-500">contato@gmail.com</p>
            <p className="text-gray-500">+55 (61) 9999-9999</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Localização</h4>
            <p className="text-gray-500">Faculdades Integradas IESGO</p>
            <p className="text-gray-500">Formosa - GO</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <p className="text-gray-500 cursor-pointer hover:text-white">
              Termos de Uso
            </p>
            <p className="text-gray-500 cursor-pointer hover:text-white">
              Política de Privacidade
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          © 2026 Iesgo Sem Pijama. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
