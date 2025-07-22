export default function PricingCard({
  icon,
  plan,
  subtitle,
  price,
  period = "ay",
  features = [],
  popular = false,
}) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm px-6 sm:px-8 py-8 sm:py-10 w-full max-w-sm flex flex-col gap-8">
      {/* Popüler Rozeti */}
      {popular && (
        <span className="absolute -top-3 right-4 sm:right-6 bg-gradient-to-r from-tertiary to-secondary text-white text-xs px-4 py-1 rounded-full shadow-md">
          En Popüler
        </span>
      )}

      {/* Üst Başlık */}
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border-2 border-primary/60">
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold">{plan}</h3>
          <p className="text-[11px] text-gray-500">{subtitle}</p>
        </div>
      </div>

      {/* Fiyat */}
      <div className="text-center sm:text-left">
        <span className="text-4xl sm:text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 text-sm"> /{period}</span>
      </div>

      {/* CTA Butonu */}
      <button className="btn-shine-dark w-full hover:scale-105 transition-transform duration-300 focus:outline-none">
        Şimdi Başla
      </button>

      {/* Özellik Listesi */}
      <div>
        <h4 className="font-semibold mb-4">Özellikler</h4>
        <ul className="space-y-2 text-sm">
          {features.map((f) => (
            <li key={plan + f} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-tertiary to-secondary shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
