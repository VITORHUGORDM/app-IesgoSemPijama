import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function LocationMap() {
  return (
    <section
      id="local"
      className="py-20 bg-zinc-950 relative overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white">
          COMO <span className="text-purple-500">CHEGAR</span>
        </h2>
        <p className="text-gray-400">
          Faculdades Integradas IESGO • Formosa - GO
        </p>
      </div>

      <div className="w-full h-100 md:h-125 relative group">
        <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:pointer-events-auto z-0" />

        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Mapa do Evento"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Faculdades%20Integradas%20IESGO%20Formosa%20GO&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full h-full"
        ></iframe>

        {/* Card flutuante sobre o mapa */}
        <div className="absolute bottom-4 left-4 right-4 md:left-10 md:bottom-10 md:right-auto bg-zinc-900/90 backdrop-blur border border-purple-500/30 p-6 rounded-xl shadow-2xl max-w-sm">
          <div className="flex items-start gap-4">
            <div className="bg-purple-600 p-3 rounded-full text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">IESGO</h3>
              <p className="text-gray-300 text-sm mt-1">
                Av. Brasília, 2001 - Formosinha
              </p>
              <p className="text-gray-300 text-sm">Formosa - GO</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Faculdades+Integradas+IESGO+Formosa+GO"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-purple-400 font-bold text-sm hover:text-purple-300 transition"
              >
                ABRIR NO GPS <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
