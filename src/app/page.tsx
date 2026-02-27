import dynamic from "next/dynamic";
import Header from "../app/componentes/Header";
import Hero from "../app/componentes/Hero";
import InfoCards from "../app/componentes/InfoCards";

// Lazy load componentes abaixo da dobra
const Countdown = dynamic(() => import("../app/componentes/Countdown"), {
  ssr: true,
});
const Purpose = dynamic(() => import("../app/componentes/Purpose"), {
  ssr: true,
});
const EditionThemes = dynamic(
  () => import("../app/componentes/EditionThemes"),
  { ssr: true },
);
const History = dynamic(() => import("../app/componentes/History"), {
  ssr: true,
});
const Gallery = dynamic(() => import("../app/componentes/Gallery"), {
  ssr: true,
});
const Speakers = dynamic(() => import("../app/componentes/Speakers"), {
  ssr: true,
});
const Schedule = dynamic(() => import("../app/componentes/Schedule"), {
  ssr: true,
});
const Store = dynamic(() => import("../app/componentes/Store"), { ssr: true });
const Group = dynamic(() => import("./componentes/Group"), { ssr: true });
const Partners = dynamic(() => import("../app/componentes/Partners"), {
  ssr: true,
});
const LocationMap = dynamic(() => import("../app/componentes/LocationMap"), {
  ssr: true,
});
const Faq = dynamic(() => import("../app/componentes/Faq"), { ssr: true });
const Contact = dynamic(() => import("../app/componentes/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("../app/componentes/Footer"), {
  ssr: true,
});

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
