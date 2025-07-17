// pages/sifre/index.js
import AuthLeftPanel from "@/components/AuthLeftPanel";

export default function SifreUnuttum() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <AuthLeftPanel
        title="Şifremi"
        subtitle="Unuttum"
        description="Endişe etmeyin, size adım adım hesabınızı kurtarmak için yardımcı olacağız."
        imgSrc="/images/forgot-step1.png"
      />
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6">Şifremi Unuttum</h2>
          <input
            type="email"
            placeholder="E-posta adresinizi girin"
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <button className="w-full bg-black text-white py-2 rounded">
            Şifre Sıfırlama Kodu Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
