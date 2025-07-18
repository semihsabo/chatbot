// components/home/HowItWorks.js
const steps = [
  { icon: "user",    label: "Kayıt ol" },
  { icon: "link",    label: "Hesabını bağla" },
  { icon: "sparkle", label: "Botu ayarla" },
  { icon: "check",   label: "Satışa başla" }
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-manrope font-extrabold text-primary mb-1.5 sm:mb-2">
        Nasıl Çalışır?
      </h2>
      <p className="text-gray-500 mb-10 sm:mb-12 text-xs sm:text-sm max-w-lg mx-auto">
        Sadece birkaç basit adımla satışa hazır olun. Hızlı, kolay ve güvenli.
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-4 p-5 sm:p-6 h-48 sm:h-56 md:h-64 rounded-xl bg-gray-100 hover:shadow-lg transition">
            <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">
              {i + 1}. Adım
            </span>

            {/* İkon dairesi */}
            <div className="relative">
              <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-primary/60 flex items-center justify-center">
                {/* Icon */}
                {s.icon === "user" && (
                  <svg viewBox="0 0 24 24" className="w-8 sm:w-10 h-8 sm:h-10 text-white fill-current">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                )}
                {s.icon === "link" && (
                  <svg viewBox="0 0 24 24" className="w-8 sm:w-10 h-8 sm:h-10 text-white stroke-current" fill="none" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 1 7 0l2 2a5 5 0 0 1-7 7l-1-1" />
                    <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
                  </svg>
                )}
                {s.icon === "sparkle" && (
                  <svg viewBox="0 0 24 24" className="w-8 sm:w-10 h-8 sm:h-10 text-white fill-current">
                    <path d="M12 2l1.9 5.7L20 9l-4.6 3.9L16.8 20 12 16.6 7.2 20l1.4-7.1L4 9l6.1-1.3L12 2z" />
                  </svg>
                )}
                {s.icon === "check" && (
                  <svg viewBox="0 0 24 24" className="w-8 sm:w-10 h-8 sm:h-10 text-white stroke-current" fill="none" strokeWidth="2">
                    <polyline points="5 13 9 17 19 7" />
                  </svg>
                )}
              </div>

              {/* Sağ alt ok / onay */}
              <span className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-tertiary to-secondary flex items-center justify-center">
                {i < steps.length - 1 ? (
                  <svg viewBox="0 0 24 24" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white fill-current">
                    <polygon points="8,6 16,12 8,18" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white stroke-current" fill="none" strokeWidth="3">
                    <polyline points="5 13 9 17 19 7" />
                  </svg>
                )}
              </span>
            </div>

            <p className="text-primary font-semibold text-xs sm:text-sm tracking-tight">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}