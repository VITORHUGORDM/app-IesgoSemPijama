"use client";
import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          IESGO SEM{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            PIJAMA
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition">
            HOME
          </a>
          <a href="#sobre" className="hover:text-purple-400 transition">
            SOBRE
          </a>
          <a href="#agenda" className="hover:text-purple-400 transition">
            PROGRAMAÇÃO
          </a>
          <a href="#loja" className="hover:text-purple-400 transition">
            LOJA
          </a>
          <a href="#ingressos" className="hover:text-purple-400 transition">
            INSCRIÇÃO
          </a>
          <a href="#Contato" className="hover:text-purple-400 transition">
            CONTATO
          </a>
        </nav>

        <div className="flex items-center gap-4 text-white">
          <button
            onClick={onOpenCart}
            className="relative p-2 hover:bg-white/10 rounded-full transition"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-pink-600 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 p-4 space-y-4 text-center border-b border-white/10 text-white">
          <a
            href="#home"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="#agenda"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            PROGRAMAÇÃO
          </a>
          <a
            href="#ingressos"
            className="block py-2 text-purple-400 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            GARANTIR VAGA
          </a>
        </div>
      )}
    </header>
  );
}
