"use client";

import React, { useState } from "react";
import Header from "../app/componentes/Header";
import Hero from "../app/componentes/Hero";
import InfoCards from "../app/componentes/InfoCards";
import Countdown from "../app/componentes/Countdown";
import Purpose from "../app/componentes/Purpose";
import EditionThemes from "../app/componentes/EditionThemes";
import History from "../app/componentes/History";
import Gallery from "../app/componentes/Gallery";
import Speakers from "../app/componentes/Speakers";
import Schedule from "../app/componentes/Schedule";
import Store from "../app/componentes/Store";
import Faq from "../app/componentes/Faq";
import Footer from "../app/componentes/Footer";
import LocationMap from "../app/componentes/LocationMap";
import Partners from "../app/componentes/Partners";
import Contact from "../app/componentes/Contact";
import Group from "./componentes/Group";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-purple-500 selection:text-white">
      {/* Cabeçalho */}
      <Header />
      {/* Conteúdo da Página */}
      <Hero />
      <InfoCards />
      <Countdown />
      <Purpose />
      <EditionThemes />
      <History />
      <Gallery />
      <Speakers />
      <Schedule />
      <Store />
      <Group />
      <Partners />
      <LocationMap />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
