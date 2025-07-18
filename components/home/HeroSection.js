// components/home/HeroSection.js
export default function HeroSection() {
  const sentences = [
    "ChatBot küçük işletmeler için tasarlandı.",
    "Instagram & WhatsApp mesajlarını analiz eder, sipariş oluşturur, ödeme linki üretir.",
    "Gerçek temsilci hissi verir, teknik bilgi gerekmez – siz büyümeye odaklanın."
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-primary/80 to-[#000000] min-h-[500px] sm:min-h-[560px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden rounded-b-3xl shadow-xl"
    >
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight font-manrope font-extrabold mb-8 sm:mb-10 space-y-1 sm:space-y-2">
          <span className="block bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
            AI desteğiyle
          </span>
          <span className="block text-white">tamamen otomati̇ze edilmiş</span>
          <span className="block">
            <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
              ChatBot&nbsp;
            </span>
            <span className="text-white">deneyimi yaşayın</span>
          </span>
        </h1>

        {/* Açıklama cümleleri */}
        <div className="space-y-1.5 sm:space-y-2 mb-10 sm:mb-14">
          {sentences.map((s) => (
            <p
              key={s}
              className="text-[#cfcfcf] text-sm sm:text-[15px] md:text-base transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-tertiary hover:to-primary cursor-default"
            >
              {s}
            </p>
          ))}
        </div>

        {/* CTA butonları */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14 sm:mb-20">
          <button className="border border-white rounded-full px-6 sm:px-8 py-2 text-white hover:bg-white hover:text-primary transition font-manrope font-medium">
            Demo Talep Et
          </button>

          {/* Parlak mor shine butonu */}
          <button className="btn-shine-primary hover:opacity-90 transition px-6 sm:px-8 py-2 rounded-full">
            14 Gün Ücretsiz Deneme
          </button>
        </div>

        {/* Roket butonu */}
        <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-tertiary to-secondary flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-current"
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

      {/* Dekoratif çizgi – küçük ekranlarda gizli */}
      <svg
        className="hidden sm:block absolute left-0 bottom-0 sm:top-16 w-[200px] sm:w-[260px] md:w-[420px] text-tertiary/40 -z-10"
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
