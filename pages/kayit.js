import { useState, useEffect } from "react";
import Image from "next/image";

export default function Kayit() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const isFormValid = Object.values(form).every((field) => field.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Form gönderildi:", form);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phoneCode: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <main className="min-h-screen bg-[#f3eefe] flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sol */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#8557FF] font-bold text-xl">
            <span className="w-6 h-6 rounded-full bg-white" />
            ChatBot
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Hesap <span className="text-[#55D6BE]">Oluştur</span>
          </h1>
          <p className="text-gray-600 text-sm">
            Şimdi gerekli adımları tamamlayarak hesabınızı oluşturun, ChatBot deneyimi ile büyümeye odaklanın.
          </p>

          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/kayit-hero.svg"
              alt="Kayıt Ol"
              width={400}
              height={320}
              className="object-contain mt-8"
            />
          </div>
        </div>

        {/* Sağ - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl w-full relative flex flex-col justify-between"
        >
          {showSuccess && (
            <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm shadow">
              ✅ Hesap başarıyla oluşturuldu!
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold mb-6">Hesap Oluştur</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Adınız" />
              <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Soyadınız" />
            </div>

            <Input name="email" value={form.email} onChange={handleChange} placeholder="E-posta adresiniz" />

            <div className="grid grid-cols-2 gap-4">
              <Input name="phoneCode" value={form.phoneCode} onChange={handleChange} placeholder="Alan Kodu" />
              <Input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Telefon Numarası" />
            </div>

            <Input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              type="password"
            />

            <p className="text-sm text-[#8557FF] font-medium mb-2">
              Şifreniz en az 8 karakterden oluşmalıdır.
            </p>

            <Input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Şifrenizi tekrar girin"
              type="password"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 mt-6 rounded text-white font-semibold transition text-sm
                ${isFormValid ? "bg-[#8557FF] hover:bg-[#774dff] shadow-md" : "bg-[#6B7280] cursor-not-allowed"}`}
            >
              Hesap Oluştur
            </button>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Kayıt olarak <span className="text-[#8557FF] underline">Hizmet Şartları</span> ve{" "}
              <span className="text-[#8557FF] underline">Gizlilik Politikası</span>’nı kabul etmiş olursunuz.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

function Input({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 mb-3 rounded border placeholder-gray-500 transition text-sm
        ${value.trim() ? "border-[#8557FF]" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-[#8557FF]`}
    />
  );
}