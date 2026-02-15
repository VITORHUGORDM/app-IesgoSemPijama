"use client";
import React from "react";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (index: number) => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
}: CartSidebarProps) {
  if (!isOpen) return null;

  const totalCart = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end text-white">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md bg-zinc-900 h-full p-6 flex flex-col shadow-2xl border-l border-white/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Seu Carrinho</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Carrinho vazio.</p>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white/5 p-4 rounded-lg"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-purple-400">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total</span>
            <span>R$ {totalCart.toFixed(2)}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold hover:opacity-90 transition">
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
}
