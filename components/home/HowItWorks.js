const steps = [
  { icon: 'user',    label: 'Kayıt ol'     },
  { icon: 'link',    label: 'Hesabını bağla' },
  { icon: 'sparkle', label: 'Botu ayarla'  },
  { icon: 'hand',    label: 'Satışa başla' },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-left sm:text-center md:text-left max-w-md sm:max-w-lg md:max-w-none mx-auto md:mx-0 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nasıl Çalışır?</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Sadece birkaç basit adımla satışa hazır olun. Hızlı, kolay ve güvenli.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-gray-100 rounded-xl px-6 pt-6 pb-8 flex flex-col items-center text-center"
            >
              <span className="mb-6 text-primary font-semibold uppercase tracking-wide">
                {i + 1}. Adım
              </span>

              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#B792F9] flex items-center justify-center">
                {s.icon === 'user' && (
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                    <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                )}
                {s.icon === 'link' && (
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white stroke-current" fill="none" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 1 7 0l2 2a5 5 0 0 1-7 7l-1-1" />
                    <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
                  </svg>
                )}
                {s.icon === 'sparkle' && (
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                    <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                )}
                {s.icon === 'hand' && (
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white stroke-current" fill="none" strokeWidth="2">
                    <path d="M2 12h4l3 3 3-3h4l3 3 3-3" />
                    <path d="M9 15v6M15 15v6" />
                  </svg>
                )}
              </div>

              <p className="mt-6 text-primary font-semibold">{s.label}</p>

              {/* Ok / tik */}
              {i < steps.length - 1 ? (
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full bg-gradient-to-tr from-[#51E2C2] to-[#5E3BFE] items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                    <polygon points="9 5 17 12 9 19" />
                  </svg>
                </span>
              ) : (
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full bg-gradient-to-tr from-[#51E2C2] to-[#5E3BFE] items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-current" fill="none" strokeWidth="3">
                    <polyline points="5 13 9 17 19 7" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
