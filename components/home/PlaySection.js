export default function PlaySection() {
  return (
    <section className="relative h-[650px] flex flex-col items-center justify-center overflow-hidden">
      {/* Arka plan: degrade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#606673] via-[#606673]/80 to-[#ECECEC]" />

      {/* Oynat Butonu */}
      <button className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#13F2F2] to-[#3B42C4] flex items-center justify-center shadow-2xl hover:scale-110 transition">
        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14 text-white fill-current">
          <polygon points="9.5,7 16.5,12 9.5,17" />
        </svg>
      </button>

      {/* Demo Talep Et Butonu (altında hizalı) */}
      <button className="mt-6 z-10 px-6 py-2 bg-black text-white text-sm rounded-full border border-white hover:opacity-90 transition">
        Demo Talep Et
      </button>

      {/* Alt fade efekti */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white/90 pointer-events-none" />
    </section>
  );
}
