"use client";
import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-25T22:30:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-900/20 via-black/0 to-black/0" />
      <div className="container mx-auto text-center">
        <div className="mx-auto mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] text-purple-300/80">
            CONTAGEM REGRESSIVA
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Faltam
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-300/80">
            Prepare-se: a experiência começa em breve.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            { label: "DIAS", value: timeLeft.days },
            { label: "HORAS", value: timeLeft.hours },
            { label: "MINUTOS", value: timeLeft.minutes },
            { label: "SEGUNDOS", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative w-32 md:w-40 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur"
            >
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-400/10 opacity-60" />
              <div
                key={`${item.label}-${item.value}`}
                className="text-4xl md:text-5xl font-mono font-bold text-white animate-[countPop_350ms_ease-out]"
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.35em] text-purple-300/90">
                {item.label}
              </div>
              <div className="mt-4 h-0.5 w-full rounded-full bg-linear-to-r from-purple-500/60 via-fuchsia-400/60 to-cyan-400/60 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
