import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const isValid = form.email.trim() !== "" && form.password.trim() !== "";
  const [ok, setOk] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setOk(true);
  };

  useEffect(() => {
    if (ok) {
      const timer = setTimeout(() => setOk(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [ok]);

  return (
    <>
      <Head>
        <title>Oturum Aç • ChatBot</title>
      </Head>

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white overflow-x-hidden">
        {/* LEFT PANEL */}
        <aside className="flex items-center justify-center bg-gradient-to-br from-white to-[#EDE8FF] p-10 sm:p-16">
          <div className="max-w-sm text-center">
            <Image
              src="/images/undraw_welcome_nk8k (1).svg"
              alt="Welcome illustration"
              width={300}
              height={300}
              className="mx-auto mb-8 select-none pointer-events-none"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Tekrar <span className="text-[#10CAB7]">Hoşgeldiniz</span>
            </h1>
            <div className="w-20 h-1 bg-[#10CAB7] mt-4 mb-6 mx-auto" />
            <p className="text-gray-700 text-sm sm:text-base">
              Oturum açmanıza yardımcı olalım.
            </p>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <section className="flex items-center justify-center bg-[#F8F6FF] p-6 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded-2xl shadow p-6 sm:p-8 space-y-6"
          >
            {ok && (
              <div className="text-green-600 text-center animate-pulse">
                ✅ Giriş başarılı!
              </div>
            )}

            <h2 className="text-2xl font-bold text-center">Oturum Aç</h2>

            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E‑posta adresinizi girin"
              required
              autoFocus
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D5DF5]"
            />
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D5DF5]"
            />

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 rounded text-white font-semibold transition-colors ${
                isValid ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Oturum Aç
            </button>

            <div className="flex justify-between text-sm text-gray-600">
              <Link href="/sifre" className="text-[#6D5DF5] hover:underline">
                Şifremi Unuttum
              </Link>
              <Link href="/kayit" className="text-[#6D5DF5] hover:underline">
                Hemen yeni bir hesap oluştur
              </Link>
            </div>

            <div className="flex items-center my-4">
              <span className="flex-1 h-px bg-gray-300" />
              <span className="px-4 text-xs text-gray-400">veya</span>
              <span className="flex-1 h-px bg-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition"
              aria-label="Google ile giriş yap"
            >
              <img src="/images/gogle.png" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium">Google ile giriş yap</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition"
              aria-label="Facebook ile giriş yap"
            >
              <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
              <span className="text-sm font-medium">Facebook ile giriş yap</span>
            </button>

            <div className="flex justify-center gap-4 text-xs text-gray-500 mt-6">
              <Link href="#">Yardım</Link>
              <Link href="#">Gizlilik</Link>
              <Link href="#">Şartlar</Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
