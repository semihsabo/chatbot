import AuthLeftPanel from "@/components/AuthLeftPanel";

export default function SifreUnuttum() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-50 dark:bg-gray-900">
      {/* Sol panel sadece md ve üstü görünür */}
      <div className="hidden md:block">
        <AuthLeftPanel
          title="Şifremi"
          subtitle="Unuttum"
          description="Endişe etmeyin, size adım adım hesabınızı kurtarmak için yardımcı olacağız."
          imgSrc="/images/forgot-step1.png"
        />
      </div>

      {/* Sağ taraf - form alanı */}
      <div className="flex items-center justify-center p-6 sm:p-8 bg-white dark:bg-gray-800">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Şifremi Unuttum
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                E-posta adresi
              </label>
              <input
                id="email"
                type="email"
                placeholder="ornek@eposta.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors duration-200">
              Şifre Sıfırlama Kodu Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
