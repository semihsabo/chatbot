import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Kayit() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const isValid = Object.values(form).every(v => v.trim() !== '');
  const [ok, setOk] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid) return;
    console.log('submitted', form);
    setForm({
      firstName: '', lastName: '', email: '', phoneCode: '',
      phoneNumber: '', password: '', confirmPassword: ''
    });
    setOk(true);
  };

  useEffect(() => {
    if (ok) {
      const timer = setTimeout(() => setOk(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [ok]);

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white overflow-x-hidden">
      {/* LEFT PANEL */}
      <aside className="relative flex items-start justify-start bg-gradient-to-br from-white to-[#EDE8FF] overflow-hidden">
        <div className="p-8 sm:p-12 flex flex-col h-full w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[#6D5DF5] font-semibold text-xl mb-8">
            <span className="w-5 h-5 rounded-full bg-[#6D5DF5]" /> ChatBot
          </div>

          {/* Mock Content */}
          <div className="space-y-4 mb-6 hidden sm:block">
            <div className="h-[2px] w-16 bg-gray-300 rounded" />
            <div className="h-10 w-64 border border-gray-300 rounded" />
            <div className="h-[2px] w-32 bg-gray-300 rounded" />
            <div className="h-10 w-56 border border-gray-300 rounded" />
            <div className="h-9 w-24 bg-[#6D5DF5] rounded" />
          </div>

          {/* Illustration */}
          <div className="mb-6 relative">
            <div className="h-[2px] bg-gray-300 w-full" />
            <Image
              src="/images/kayit-hero.svg"
              alt="Kayıt görseli"
              width={200}
              height={240}
              className="absolute right-0 -bottom-4 select-none pointer-events-none hidden sm:block"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-[44px] font-black leading-tight mb-2">
            Hesap <span className="text-[#10CAB7]">Oluştur</span>
          </h1>
          <div className="w-24 h-[3px] bg-[#10CAB7] mb-4" />
          <p className="text-gray-700 max-w-xs text-sm sm:text-base">
            Şimdi gerekli adımları tamamlayarak hesabınızı oluşturun,
            ChatBot deneyimi ile büyümeye odaklanın.
          </p>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <section className="flex items-center justify-center bg-[#F8F6FF] px-4 py-8 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
        >
          {ok && (
            <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded text-sm shadow">
              ✅ Hesap başarıyla oluşturuldu!
            </div>
          )}

          <h2 className="text-xl font-bold text-center mb-4">Hesap Oluştur</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Adınız" />
            <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Soyadınız" />
          </div>

          <Input name="email" value={form.email} onChange={handleChange} placeholder="E‑posta adresiniz" />

          <div className="grid grid-cols-2 gap-4">
            <Input name="phoneCode" value={form.phoneCode} onChange={handleChange} placeholder="Alan Kodu" />
            <Input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Telefon Numarası" />
          </div>

          <Input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Şifrenizi girin" />
          <p className="text-xs text-[#6D5DF5]">Şifreniz en az 8 karakterden oluşmalıdır.</p>
          <Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Şifrenizi tekrar girin" />

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded text-white font-semibold transition-colors ${
              isValid ? 'bg-[#6D5DF5] hover:bg-[#5945e8]' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Hesap Oluştur
          </button>

          <p className="text-xs text-gray-500 text-center">
            Kayıt olarak <span className="text-[#6D5DF5] underline">Hizmet Şartları</span> ve{' '}
            <span className="text-[#6D5DF5] underline">Gizlilik Politikası</span>’nı kabul etmiş olursunuz.
          </p>
        </form>
      </section>
    </main>
  );
}

function Input({ name, value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-4 py-2 text-sm placeholder-gray-500 transition-colors focus:outline-none focus:border-[#6D5DF5]"
    />
  );
}
