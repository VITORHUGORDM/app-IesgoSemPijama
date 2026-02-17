"use client";

import React, { useState } from "react";
import Header from "../app/componentes/Header";
import CartSidebar from "../app/componentes/Cartsidebar";
import Hero from "../app/componentes/Hero";
import InfoCards from "../app/componentes/InfoCards";
import Countdown from "../app/componentes/Countdown";
import Purpose from "../app/componentes/Purpose";
import Speakers from "../app/componentes/Speakers";
import Schedule from "../app/componentes/Schedule";
import Store from "../app/componentes/Store";
import Pricing from "../app/componentes/Pricing";
import Faq from "../app/componentes/Faq";
import Footer from "../app/componentes/Footer";
import LocationMap from "../app/componentes/LocationMap";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<
    { id: number; name: string; price: number }[]
  >([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <main className="min-h-screen bg-black font-sans selection:bg-purple-500 selection:text-white">
      {/* Cabeçalho e Gerenciamento do Carrinho */}
      <Header cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemoveItem={removeFromCart}
      />
      {/* Conteúdo da Página */}
      <Hero />
      <InfoCards />
      <Countdown />
      <Purpose />
      <Speakers />
      <Schedule />
      <Store onAddToCart={addToCart} />
      <Pricing />\
      <LocationMap />
      <Faq />
      <Footer />
    </main>
  );
}
