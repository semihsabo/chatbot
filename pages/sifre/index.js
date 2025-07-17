import Head from "next/head";
import Link from "next/link";

export function LeftPanel() {
  return (
    <div className="relative flex flex-col justify-center px-10 py-14 bg-gradient-to-b from-[#f2ecff] to-[#e8dcff]">
      <Logo />
      <div className="max-w-sm">
        <img
          src="/images/forgot-hero.svg"
          alt=""
          className="mb-8 select-none pointer-events-none"
          draggable="false"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold font-manrope leading-tight">
          Şifremi <br />
          <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
            Unuttum
          </span>
        </h1>
        <span className="block w-36 h-[3px] bg-primary mt-4 mb-6" />
        <p className="text-gray-600">
          Endişe etmeyin, size adım adım hesabınızı kurtarmak için yardımcı olacağız.
        </p>
      </div>
    </div>
  );
}

export function PageFooterLinks() {
  return (
    <div className="flex justify-center gap-6 text-xs text-gray-500 mt-8">
      <a href="#">Yardım</a>
      <a href="#">Gizlilik</a>
      <a href="#">Şartlar</a>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 mb-10">
      <span className="w-8 h-8 rounded-full bg-primary" />
      <span className="font-extrabold text-xl text-primary">ChatBot</span>
    </div>
  );
}

export default function ForgotPassword() {
  return (
    <>
      <Head><title>Şifremi Unuttum • Adım 1</title></Head>

      <div className="min-h-screen grid md:grid-cols-2">
        {/* SOL BLOK ------------------------------------------------ */}
        <LeftPanel />

        {/* FORM KARTI -------------------------------------------- */}
        <div className="flex items-center justify-center px-6 py-16 bg-white">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-8">
            <h2 className="text-xl font-bold mb-6">Şifremi Unuttum</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">E‑posta</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <p className="text-xs text-gray-500 leading-5">
                Şimdi girdiğiniz mail adresine şifre sıfırlama kodu içeren bir mail göndereceğiz.
                Kodu kimseyle paylaşmayın
              </p>

              <button type="submit" className="btn-shine-dark w-full">
                Şifre Sıfırlama Kodu Gönder
              </button>

              {/* Devam → kod ekranı */}
              <Link
                href="/sifre/dogrula"
                className="block text-center rounded-full bg-tertiary/90 text-white mt-3 py-2 hover:opacity-90"
              >
                Devam Et
              </Link>
            </form>

            <PageFooterLinks />
          </div>
        </div>
      </div>
    </>
  );
}
