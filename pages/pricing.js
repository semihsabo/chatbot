import PricingCard from "../components/pricing/PricingCard";

const GiftIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary stroke-current" fill="none" strokeWidth="2">
    <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z" />
    <path d="M2 7h20v5H2Z" />
    <path d="M12 22V7" />
    <path d="M12 7a3 3 0 1 0-3-3c0 1.5 3 3 3 3Z" />
    <path d="M12 7a3 3 0 1 1 3-3c0 1.5-3 3-3 3Z" />
  </svg>
);

const CrownIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary stroke-current" fill="none" strokeWidth="2">
    <polyline points="2 6 5 19 19 19 22 6" />
    <path d="M5 6 10 11l4-4 5 5" />
  </svg>
);

const BuildingIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary stroke-current" fill="none" strokeWidth="2">
    <rect x="3" y="3" width="8" height="18" />
    <rect x="13" y="7" width="8" height="14" />
    <path d="M7 9h2M7 13h2M7 17h2M17 11h2M17 15h2" />
  </svg>
);

export default function PricingPage() {
  return (
    <section className="bg-white pt-24 pb-32 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Başlık ve Görsel */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center mb-20 lg:mb-24">
          <div className="text-center md:text-left">
            <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold font-manrope leading-tight">
              Kendine en uygun
              <br />
              <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
                Planı seç
              </span>
            </h1>
            <p className="text-gray-500 mt-4 text-sm md:text-[15px]">
              Bütçenize ve ihtiyaçlarınıza göre esnek fiyat seçenekleri.
            </p>
          </div>

          <img
            src="/images/pricing-hero.svg"
            alt="Plan Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto"
            draggable="false"
          />
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <PricingCard
            icon={GiftIcon}
            plan="Ücretsiz Plan"
            subtitle="3 Kullanıma Kadar"
            price="0"
            features={["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]}
          />

          <PricingCard
            icon={CrownIcon}
            plan="Pro Plan"
            subtitle="10 Kullanıcıya Destek"
            price="25"
            popular
            features={["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]}
          />

          <PricingCard
            icon={BuildingIcon}
            plan="Kurumsal Plan"
            subtitle="Özel İhtiyaçlar"
            price="50"
            features={["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]}
          />
        </div>
      </div>
    </section>
  );
}
