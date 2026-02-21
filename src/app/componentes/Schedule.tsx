"use client";
import React, { useState } from "react";

const SCHEDULE_DATA = {
  sabado: [
    { time: "22:30", title: "Credenciamento & Welcome Kit", type: "Geral" },
    {
      time: "23:30",
      title: "Abertura Oficial: O Futuro Começa Agora",
      type: "Main Stage",
    },
    {
      time: "02:00",
      title: "Start Hackathon & Madrugada Gamer",
      type: "Atividade",
    },
  ],
  domingo: [
    { time: "04:00", title: "Coffee Break & Networking", type: "Intervalo" },
    { time: "07:30", title: "Premiação & Encerramento", type: "Main Stage" },
  ],
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<"sabado" | "domingo">("sabado");

  return (
    <section
      id="agenda"
      className="py-20 bg-zinc-950 text-white border-t border-white/5"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          TIMELINE{" "}
          <span className="bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-[200%_200%] bg-clip-text text-transparent animate-gradient">
            2026
          </span>
        </h2>

        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab("sabado")}
            className={`px-8 py-2 rounded-full font-bold transition ${activeTab === "sabado" ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-400"}`}
          >
            SÁBADO
          </button>
          <button
            onClick={() => setActiveTab("domingo")}
            className={`px-8 py-2 rounded-full font-bold transition ${activeTab === "domingo" ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-400"}`}
          >
            DOMINGO
          </button>
        </div>

        <div className="space-y-6">
          {SCHEDULE_DATA[activeTab].map((item, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="w-24 text-right pt-2">
                <span className="text-xl font-bold text-white block">
                  {item.time}
                </span>
              </div>
              <div className="relative flex-1 bg-zinc-900 p-6 rounded-xl border border-white/5 hover:border-purple-500 transition">
                <div className="absolute -left-7.75 top-6 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black"></div>
                <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-purple-300 mb-2 inline-block">
                  {item.type}
                </span>
                <h4 className="text-lg font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
