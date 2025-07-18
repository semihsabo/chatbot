// components/PlaySection.js
export default function PlaySection() {
  return (
    <section className="relative h-[450px] sm:h-[550px] md:h-[650px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#606673] via-[#606673]/80 to-[#ECECEC]" />

      {/* Play button */}
      <button
        className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-tr from-[#13F2F2] to-[#3B42C4] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white fill-current"
        >
          <polygon points="9.5,7 16.5,12 9.5,17" />
        </svg>
      </button>

      {/* Demo request button */}
      <button
        className="mt-4 sm:mt-6 relative z-10 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 bg-black text-white text-xs sm:text-sm md:text-base rounded-full border border-white/20 hover:bg-gray-900 transition"
      >
        Demo Talep Et
      </button>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-b from-transparent to-white/90 pointer-events-none" />
    </section>
  );
}
