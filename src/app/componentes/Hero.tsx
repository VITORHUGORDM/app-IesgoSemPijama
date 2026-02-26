export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center min-h-[90vh] bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/80 bg-linear-to-t from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4 neon-text">
          Iesgo Sem <span className="neon-pink">PIJAMA</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 font-medium tracking-wide">
          À NOITE FAZEMOS PROGRAMA
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Uma noite intensa dedicada à inovação, tecnologia e criatividade.
          Mergulhe na energia única do maior evento tech da região.
        </p>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm uppercase tracking-[0.35em] text-purple-200">
            Inscricoes em breve
          </span>
          <a
            href="#contato"
            className="bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition transform shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            FALE CONOSCO
          </a>
        </div>
      </div>
    </section>
  );
}
