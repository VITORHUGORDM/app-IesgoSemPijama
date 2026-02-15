import React from "react";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Boné Classic Tech",
    price: 45.0,
    image: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Moletom Wool Dev",
    price: 120.0,
    image: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Cadeira Ergonomica",
    price: 850.0,
    image: "/api/placeholder/200/200",
  },
];

export default function Store({
  onAddToCart,
}: {
  onAddToCart: (p: Product) => void;
}) {
  return (
    <section id="loja" className="py-20 container mx-auto px-4 text-white">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white">
            PIJAMA <span className="text-purple-500">STORE</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Garanta os itens exclusivos da edição 2026.
          </p>
        </div>
        <button className="hidden md:block text-purple-400 font-bold hover:text-purple-300">
          VER CATÁLOGO COMPLETO →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition group"
          >
            <div className="h-64 bg-zinc-800 flex items-center justify-center text-gray-600">
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
                <button
                  onClick={() => onAddToCart(prod)}
                  className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition text-sm flex gap-2 items-center"
                >
                  <ShoppingCart size={16} /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
