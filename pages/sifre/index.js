/* pages/sifre.js  (Şifremi Unuttum – Adım 1) */

import { useState } from 'react';
import Image from 'next/image';

export default function ForgotStep1() {
  /* basit state sadece input boş – dolu kontrolü */
  const [email, setEmail] = useState('');
  const isValid = email.trim() !== '';

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#F3EDFF] to-[#ECE4FF] px-4 py-10">
      {/* 480 px sabit panel + auto form */}
      <div className="w-full max-w-7xl grid lg:grid-cols-[480px_1fr] gap-12 items-center">
        {/* SOL PANEL */}
        <aside className="relative px-10 py-12 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl shadow-md">
          {/* logo */}
          <div className="flex items-center gap-2 text-[#6D5DF5] font-semibold text-xl mb-10">
            <Image src="/images/undraw_forgot-password_odai 1.svg" alt="" width={20} height={20} />
            ChatBot
          </div>

          {/* başlık */}
          <h1 className="text-5xl font-black leading-tight">
            Şifremi <span className="text-[#10CAB7]">Unuttum</span>
          </h1>

          <p className="mt-6 text-gray-700 max-w-sm">
            Endişe etmeyin, size adım adım hesabınızı kurtarmak için yardımcı olacağız.
          </p>

          {/* hero illustration */}
          <Image
            src="/images/undraw_forgot-password_odai 1.svg"
            alt=""
            width={260}
            height={260}
            className="mt-12 self-center select-none pointer-events-none"
          />
        </aside>

        {/* SAĞ FORM */}
        <section className="flex justify-center">
          <form className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold mb-8 text-center">Şifremi Unuttum</h2>

            {/* yeşil kalkan ikonu */}
            <Image
              src="/images/mdi_security-lock-outline (1).svg"
              alt=""
              width={140}
              height={140}
              className="mx-auto mb-8 select-none pointer-events-none"
            />

            <label className="block text-sm font-medium mb-1">E‑posta</label>
            <input
              type="email"
              placeholder="E‑posta adresinizi girin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:ring-2 focus:ring-[#6D5DF5] outline-none placeholder-gray-500"
            />

            <p className="text-xs text-gray-600 mb-6">
              Şimdi girdiğiniz mail adresine şifre sıfırlama kodu içeren bir mail göndereceğiz. Kodu kimseyle
              paylaşmayın.
            </p>

            <button
              type="button"
              disabled={!isValid}
              className={`w-full py-3 rounded text-white font-semibold mb-4 transition ${
                isValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Şifre Sıfırlama Kodu Gönder
            </button>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 rounded font-semibold text-white transition ${
                isValid ? 'bg-[#45D7A5] hover:bg-[#2CCF95]' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Devam Et
            </button>

            <div className="mt-8 flex justify-center gap-8 text-xs text-gray-500">
              <a href="#" className="hover:underline">
                Yardım
              </a>
              <a href="#" className="hover:underline">
                Gizlilik
              </a>
              <a href="#" className="hover:underline">
                Şartlar
              </a>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
