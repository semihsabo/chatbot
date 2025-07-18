// components/home/PlansSection.js
export default function PlansSection() {
  const plans = [
    { icon: "gift", label: "Ücretsiz" },
    { icon: "crown", label: "Pro" },
    { icon: "building", label: "Kurumsal" }
  ];

  return (
    <section
      className="relative bg-primary pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 text-white overflow-hidden rounded-t-3xl"
    >
      {/* Sol‑üst dekor çizgiler */}
      <svg
        viewBox="0 0 60 60"
        className="absolute top-6 sm:top-8 left-6 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M2 30 L18 10" />
        <path d="M18 10 L34 30" />
        <path d="M34 30 L50 10" />
      </svg>

      {/* Başlık */}
      <h2 className="max-w-xl font-manrope font-extrabold text-2xl sm:text-3xl md:text-5xl leading-tight">
        Her koşula uygun
        <br />
        tasarlanmış planları
        <br />
        <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
          inceleyin
        </span>
      </h2>

      {/* Noktalı eğik ok */}
      <svg
        viewBox="0 0 250 140"
        className="absolute -z-10 md:z-0 w-52 sm:w-64 md:w-80 top-32 md:top-24 left-1/2 md:left-96"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeDasharray="6 8"
        strokeLinecap="round"
      >
        <path d="M5 5c120 50 120 80 0 130" />
        <polyline points="230 115 245 135 215 135" fill="none" strokeDasharray="0" />
      </svg>

      {/* CTA butonları */}
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
        <button className="px-8 sm:px-10 py-2 rounded-full border border-white text-white font-manrope hover:bg-white hover:text-primary transition">
          Demo Talep Et
        </button>
        <button className="px-8 sm:px-10 py-2 rounded-full bg-black text-white font-manrope hover:opacity-90 transition">
          Planları İncele
        </button>
      </div>

      {/* İkon satırı */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 xs:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto justify-items-center">
        {plans.map((p) => (
          <div key={p.icon} className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full flex items-center justify-center bg-white/90">
              {p.icon === "gift" && (
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 22V7" />
                  <path d="M12 7a3 3 0 1 0-3-3c0 1.5 3 3 3 3z" />
                  <path d="M12 7a3 3 0 1 1 3-3c0 1.5-3 3-3 3z" />
                </svg>
              )}
              {p.icon === "crown" && (
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current"
                  fill="none"
                  strokeWidth="2"
                >
                  <polyline points="2 6 5 19 19 19 22 6" />
                  <path d="M5 6l5 5 4-4 5 5" />
                </svg>
              )}
              {p.icon === "building" && (
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 sm:w-14 h-12 sm:h-14 text-primary stroke-current"
                  fill="none"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="8" height="18" />
                  <rect x="13" y="7" width="8" height="14" />
                  <path d="M7 9h2M7 13h2M7 17h2M17 11h2M17 15h2" />
                </svg>
              )}
            </div>
            <span className="font-manrope text-sm sm:text-base capitalize tracking-tight">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}