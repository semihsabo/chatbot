import Head from "next/head";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Oturum Aç • ChatBot</title>
      </Head>

      {/* TAM YÜKSEKLİK IZGARA */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* SOL BLOK */}
        <div className="relative flex flex-col justify-center px-6 sm:px-10 py-14 bg-gradient-to-b from-[#f2ecff] to-[#e8dcff]">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-8 h-8 rounded-full bg-primary" />
            <span className="font-extrabold text-xl text-primary">ChatBot</span>
          </div>

          {/* Illustration & Başlık */}
          <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <img
              src="/images/login-hero.svg"
              alt="welcome illustration"
              className="select-none pointer-events-none mb-8 mx-auto md:mx-0"
              draggable="false"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-manrope leading-tight">
              Tekrar <br />
              <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
                Hoşgeldiniz
              </span>
            </h1>
            <span className="block w-24 sm:w-32 h-[3px] bg-primary mt-4 mb-6 mx-auto md:mx-0" />
            <p className="text-gray-600 text-sm sm:text-base">Oturum açmanıza yardımcı olalım.</p>
          </div>
        </div>

        {/* FORM KARTI */}
        <div className="flex items-center justify-center px-4 sm:px-6 py-16 bg-white">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-6">Oturum Aç</h2>

            {/* FORM */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">E‑posta</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Şifre</label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Şifrenizi girin"
                />
              </div>

              <button type="submit" className="btn-shine-dark w-full">
                Oturum Aç
              </button>
            </form>

            {/* Yardım Linkleri */}
            <div className="flex flex-col sm:flex-row justify-between text-xs mt-3 mb-6 gap-2 sm:gap-0">
              <Link href="/sifre" className="text-primary hover:underline"> Şifremi Unuttum </Link>
              <Link href="/kayit" className="text-primary hover:underline"> Hemen yeni bir hesap oluştur </Link>
            </div>

            {/* Ayraç */}
            <div className="flex items-center mb-6">
              <span className="flex-1 h-px bg-gray-300" />
              <span className="px-4 text-xs text-gray-400">veya</span>
              <span className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Sosyal Giriş */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50 mb-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="" className="w-5 h-5" />
              Google ile giriş yap
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="" className="w-5 h-5" />
              Facebook ile giriş yap
            </button>

            {/* Alt Linkler */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mt-8">
              <a href="#">Yardım</a>
              <a href="#">Gizlilik</a>
              <a href="#">Şartlar</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
