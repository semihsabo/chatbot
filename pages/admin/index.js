// pages/admin/index.js
import Layout from "../../components/admin/Layout";

export default function AdminHome() {
  return (
    <Layout>
      <div className="p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Hoşgeldin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55D6BE] to-[#8557FF]">
            tarvina
          </span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
          Seni ChatBot’ta aktif görmekten mutluluk duyduk. Kontrol panelinde
          işletmen için gerekli tüm işlemleri yönetebilirsin.
        </p>
      </div>
    </Layout>
  );
}
