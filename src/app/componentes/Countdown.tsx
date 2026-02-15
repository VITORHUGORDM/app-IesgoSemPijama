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
    <section className="py-20 text-center container mx-auto">
      <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-400">
        Faltam:
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {[
          { label: "DIAS", value: timeLeft.days },
          { label: "HORAS", value: timeLeft.hours },
          { label: "MINUTOS", value: timeLeft.minutes },
          { label: "SEGUNDOS", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-white/10 p-6 rounded-lg w-32 md:w-40 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs text-purple-400 font-bold tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
