export default function HeroSection() {
  const sentences = [
    'ChatBot küçük işletmeler için tasarlandı.',
    'Instagram & WhatsApp mesajlarını analiz eder, sipariş oluşturur, ödeme linki üretir.',
    'Gerçek temsilci hissi verir, teknik bilgi gerekmez – siz büyümeye odaklanın.',
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/80 to-[#000000] py-20 sm:py-28 min-h-[520px] flex items-center overflow-hidden rounded-b-3xl shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Başlık */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-[1.12] font-manrope font-extrabold mb-10 space-y-2 text-balance">
            <span className="block bg-gradient-to-r from-[#36E0CE] to-[#4AA3FF] bg-clip-text text-transparent">
              AI desteğiyle
            </span>

            <span className="block text-white">
              tamamen otomati̇ze edilmiş
            </span>

            <span className="block">
              <span className="bg-gradient-to-r from-[#36E0CE] to-[#4AA3FF] bg-clip-text text-transparent">
                ChatBot&nbsp;
              </span>
              <span className="text-white">deneyimi yaşayın</span>
            </span>
          </h1>

          {/* Açıklamalar */}
          <div className="space-y-2 mb-14 max-w-2xl px-4 sm:px-0">
            {sentences.map((line) => (
              <p
                key={line}
                className="text-[#BDBDFF] text-sm sm:text-[15px] md:text-base leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full sm:w-auto">
            <button className="border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-primary transition font-manrope font-medium w-full sm:w-auto">
              Demo Talep Et
            </button>
            <button className="btn-shine-primary px-8 py-2 rounded-full hover:opacity-90 transition w-full sm:w-auto">
              14 Gün Ücretsiz Deneme
            </button>
          </div>

          {/* Roket Butonu */}
          <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-tertiary to-secondary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none">
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
              <path d="M14 7l3-3 3 3-3 3" />
              <path d="M9 18l-4 4 4-1 3-3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dekoratif çizgi */}
      <svg
        className="hidden sm:block absolute left-0 bottom-0 sm:top-16 w-[200px] sm:w-[260px] md:w-[420px] text-tertiary/40 -z-10 pointer-events-none"
        viewBox="0 0 360 220"
        fill="none"
      >
        <path
          d="M5 180C80 60 320 260 355 5"
          stroke="#7DEFC1"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
