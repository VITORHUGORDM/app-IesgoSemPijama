"use client";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const section = document.querySelector(targetId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto px-4 py-8 flex justify-center items-center relative">
        <div className="absolute left-4 md:left-8 text-4xl font-bold tracking-tighter flex items-center gap-2">
          <span className="">IESGO SEM</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            PIJAMA
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a
            href="#home"
            className="hover:text-purple-400 transition"
            onClick={(event) => handleSmoothScroll(event, "#home")}
          >
            HOME
          </a>
          <a
            href="#sobre"
            className="hover:text-purple-400 transition"
            onClick={(event) => handleSmoothScroll(event, "#sobre")}
          >
            SOBRE
          </a>
          <a
            href="#agenda"
            className="hover:text-purple-400 transition"
            onClick={(event) => handleSmoothScroll(event, "#agenda")}
          >
            PROGRAMACAO
          </a>
          <a
            href="#loja"
            className="hover:text-purple-400 transition"
            onClick={(event) => handleSmoothScroll(event, "#loja")}
          >
            LOJA
          </a>
          <a
            href="#contato"
            className="hover:text-purple-400 transition"
            onClick={(event) => handleSmoothScroll(event, "#contato")}
          >
            FALE CONOSCO
          </a>
        </nav>
        <button
          className="absolute right-4 md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 p-4 space-y-4 text-center border-b border-white/10 text-white">
          <a
            href="#home"
            className="block py-2"
            onClick={(event) => handleSmoothScroll(event, "#home")}
          >
            HOME
          </a>
          <a
            href="#sobre"
            className="block py-2"
            onClick={(event) => handleSmoothScroll(event, "#sobre")}
          >
            SOBRE
          </a>
          <a
            href="#agenda"
            className="block py-2"
            onClick={(event) => handleSmoothScroll(event, "#agenda")}
          >
            PROGRAMACAO
          </a>
          <a
            href="#loja"
            className="block py-2"
            onClick={(event) => handleSmoothScroll(event, "#loja")}
          >
            LOJA
          </a>
          <a
            href="#contato"
            className="block py-2"
            onClick={(event) => handleSmoothScroll(event, "#contato")}
          >
            FALE CONOSCO
          </a>
        </div>
      )}
    </header>
  );
}
