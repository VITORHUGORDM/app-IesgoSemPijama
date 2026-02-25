import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Camiseta IESGO 2026",
    price: 100.0,
    image: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Caneca IESGO 2026",
    price: 60.0,
    image: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Moletom IESGO",
    price: 100.0,
    image: "/api/placeholder/200/200",
  },
];

export default function Store() {
  return (
    <section
      id="loja"
      className="py-20 container mx-auto px-4 text-white border-t border-white/5"
    >
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white">
            PIJAMA <span className="text-purple-500">LOJA</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Informaçoes para loja que estara no stand do evento.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition group"
          >
            <div className="h-64 bg-zinc-800 flex items-center justify-center text-gray-500">
              IMAGEM DO PRODUTO
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">{prod.name}</h3>
                <span className="bg-purple-900 text-purple-100 text-xs font-bold px-2 py-1 rounded">
                  Novo
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">
                  R$ {prod.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
