// pages/admin/index.js
import Layout from "../../components/admin/Layout";

export default function AdminHome() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Hoşgeldin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55D6BE] to-[#8557FF]">
            tarvina
          </span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          Seni ChatBot’ta aktif görmekten mutluluk duyduk. Kontrol panelinde
          işletmen için gerekli tüm işlemleri kolayca yönetebilirsin.
        </p>
      </div>
    </Layout>
  );
}
