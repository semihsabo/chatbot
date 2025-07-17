import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ForgotPasswordVerify() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Şifremi Unuttum • Adım 2</title>
      </Head>

      <div className="min-h-screen grid md:grid-cols-2">
        {/* Sol panel */}
        <LeftPanel />

        {/* Doğrulama kartı */}
        <div className="flex items-center justify-center px-6 py-16 bg-white">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-8">
            <h2 className="text-xl font-bold mb-6">Şifremi Unuttum</h2>

            <ShieldIcon />

            <label className="block text-sm mb-2 mt-6">Doğrulama Kodu</label>

            <div className="flex gap-2 mb-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-5 mb-6">
              Şimdi size şifre sıfırlama bağlantısını mail olarak göndereceğiz.
              Bağlantıya girip şifrenizi güncelleyebilirsiniz.
            </p>

            <button
              className="btn-shine-dark w-full mb-3"
              onClick={() => router.push("/sifre/yeni-sifre")}
            >
              Şifre Sıfırlama Bağlantısı Gönder
            </button>

            <Link
              href="/login"
              className="block text-center rounded-full bg-primary/90 text-white py-2 hover:opacity-90"
            >
              Oturum Aç Sayfasına Git
            </Link>

            <PageFooterLinks />
          </div>
        </div>
      </div>
    </>
  );
}

/* Kalkan İkon */
function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="w-24 h-24 mx-auto text-tertiary stroke-current fill-transparent stroke-[5]"
    >
      <path
        d="M40 6L12 16v22c0 18 12 28 28 36 16-8 28-18 28-36V16L40 6z"
        fill="none"
      />
      <rect x="30" y="30" width="20" height="28" rx="6" fill="#7DEFC1" stroke="none" />
      <path d="M40 40v4" stroke="#fff" strokeWidth="2" />
      <circle cx="40" cy="36" r="3" fill="#fff" />
    </svg>
  );
}

/* Sol Panel */
function LeftPanel() {
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
          Endişe etmeyin, adımları takip ederek hesabınızı kurtarabilirsiniz.
        </p>
      </div>
    </div>
  );
}

/* Logo */
function Logo() {
  return (
    <div className="flex items-center gap-2 mb-10">
      <span className="w-8 h-8 rounded-full bg-primary" />
      <span className="font-extrabold text-xl text-primary">ChatBot</span>
    </div>
  );
}

/* Footer linkleri */
function PageFooterLinks() {
  return (
    <div className="flex justify-center gap-6 text-xs text-gray-500 mt-8">
      <a href="#">Yardım</a>
      <a href="#">Gizlilik</a>
      <a href="#">Şartlar</a>
    </div>
  );
}
