"use client";

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  imgBack?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Camiseta IESGO 2026",
    price: 100.0,
    img: "/Camiseta.png",
  },
  {
    id: 2,
    name: "Copo IESGO 2026",
    price: 60.0,
    img: "/Copo.png",
  },
  {
    id: 3,
    name: "Moletom IESGO",
    price: 100.0,
    img: "/Moletom.png",
    imgBack: "/Moletom-costas.png",
  },
];

export default function Store() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

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
            <div
              className="h-64 flex items-center justify-center text-gray-500 cursor-pointer relative bg-cover bg-center"
              style={{ backgroundImage: "url('/fundo.PNG')" }}
            >
              <img
                src={prod.img}
                alt={prod.name}
                className="w-full h-full object-contain hover:scale-105 transition relative z-10"
                onClick={() => {
                  setCurrentProduct(prod);
                  setSelectedImage(prod.img);
                  setIsFlipped(false);
                }}
              />
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

      {/* Modal de Imagem Ampliada */}
      {selectedImage && currentProduct && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSelectedImage(null);
            setCurrentProduct(null);
            setIsFlipped(false);
          }}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                isFlipped && currentProduct.imgBack
                  ? currentProduct.imgBack
                  : selectedImage
              }
              alt="Imagem ampliada"
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Botão para virar para as costas */}
            {currentProduct.imgBack && (
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition"
              >
                {isFlipped ? "Ver Frente" : "Ver Costas"}
              </button>
            )}

            <button
              onClick={() => {
                setSelectedImage(null);
                setCurrentProduct(null);
                setIsFlipped(false);
              }}
              className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
