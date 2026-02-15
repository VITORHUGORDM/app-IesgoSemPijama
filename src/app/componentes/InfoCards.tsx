import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function InfoCards() {
  return (
    <section className="relative z-20 -mt-20 px-4 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-purple-500 transition">
        <Calendar className="text-purple-500 mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold">25 DE ABRIL</h3>
        <p className="text-gray-400">Sábado • 2026</p>
      </div>
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-pink-500 transition">
        <Clock className="text-pink-500 mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold">22:30h - 08:00h</h3>
        <p className="text-gray-400">Overnight (Madrugada)</p>
      </div>
      <div className="bg-zinc-900/90 backdrop-blur border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 transition">
        <MapPin className="text-blue-500 mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold">IESGO</h3>
        <p className="text-gray-400">Formosa - GO</p>
      </div>
    </section>
  );
}
