import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function InfoCards() {
  return (
    <section className="relative z-20 -mt-32 md:-mt-28 mb-8 md:mb-10 px-4 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-purple-500 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]">
        <Calendar className="text-purple-500 mb-4 w-10 h-10 " />
        <h3 className="text-xl font-bold">30 DE ABRIL</h3>
        <p className="text-gray-400">Quinta • 2026</p>
      </div>
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-pink-500 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_28px_rgba(236,72,153,0.55)]">
        <Clock className="text-pink-500 mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold">22:30h - 08:00h</h3>
        <p className="text-gray-400">Overnight (Madrugada)</p>
      </div>
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-cyan-400 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]">
        <MapPin className="text-blue-500 mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold">IESGO</h3>
        <p className="text-gray-400">Formosa - GO</p>
      </div>
    </section>
  );
}
