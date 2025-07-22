export default function PlansSection() {
  const plans = [
    { icon: 'gift', label: 'Ücretsiz' },
    { icon: 'crown', label: 'Pro' },
    { icon: 'building', label: 'Kurumsal' },
  ];

  return (
    <section className="relative bg-primary text-white overflow-hidden rounded-t-3xl pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20">
      {/* Sol‑üst zig‑zag */}
      <img src="/images/group-13.svg" alt="" className="absolute top-5 left-5 w-6 sm:w-8" />

      {/* Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Başlık */}
        <h2 className="pl-4 sm:pl-8 lg:pl-12 max-w-xl font-manrope font-extrabold
                       text-2xl sm:text-3xl md:text-5xl leading-tight text-balance">
          Her koşula uygun
          <br />
          tasarlanmış planları
          <br />
          <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
            inceleyin
          </span>
        </h2>

        {/* Noktalı ok */}
        <img
          src="/images/vector.svg"
          alt=""
          className="absolute inset-x-0 top-32 sm:top-36 md:top-40 w-40 sm:w-48 mx-auto pointer-events-none"
        />

        {/* CTA butonları */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
          <button className="w-full sm:w-auto px-8 sm:px-10 py-2 rounded-full border border-white text-white font-manrope hover:bg-white hover:text-primary transition">
            Demo Talep Et
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 py-2 rounded-full bg-black text-white font-manrope hover:opacity-90 transition">
            Planları İncele
          </button>
        </div>

        {/* Plan ikonları */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 justify-items-center">
          {plans.map((p) => (
            <div key={p.icon} className="flex flex-col items-center gap-4">
              <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white/90 flex items-center justify-center">
                {p.icon === 'gift' && (
                  <svg viewBox="0 0 24 24" className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current" fill="none" strokeWidth="2">
                    <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" />
                    <path d="M2 7h20v5H2z" />
                    <path d="M12 22V7" />
                    <path d="M12 7a3 3 0 1 0-3-3c0 1.5 3 3 3 3z" />
                    <path d="M12 7a3 3 0 1 1 3-3c0 1.5-3 3-3 3z" />
                  </svg>
                )}
                {p.icon === 'crown' && (
                  <svg viewBox="0 0 24 24" className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current" fill="none" strokeWidth="2">
                    <polyline points="2 6 5 19 19 19 22 6" />
                    <path d="M5 6l5 5 4-4 5 5" />
                  </svg>
                )}
                {p.icon === 'building' && (
                  <svg viewBox="0 0 24 24" className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current" fill="none" strokeWidth="2">
                    <rect x="3" y="3" width="8" height="18" />
                    <rect x="13" y="7" width="8" height="14" />
                    <path d="M7 9h2M7 13h2M7 17h2M17 11h2M17 15h2" />
                  </svg>
                )}
              </div>
              <span className="font-manrope text-sm sm:text-base capitalize">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
