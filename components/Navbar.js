// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  const menu = [
    { label: "Ürün", href: "/" },
    { label: "Fiyatlandırma", href: "/pricing" },
    { label: "Kaynaklar", href: "/#resources" },
  ];

  return (
    <header className="bg-[#1A1336] w-full sticky top-0 z-30 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-8">
        {/* Logo ------------------------------------------------------ */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-white inline-block" />
          <span className="font-extrabold text-xl text-white font-manrope">
            ChatBot
          </span>
        </Link>

        {/* Menü ------------------------------------------------------ */}
        <nav className="hidden md:flex gap-10 items-center text-white text-[15px] font-normal">
          {menu.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0
                         after:h-[2px] after:w-0 after:bg-[#B486FB] after:transition-all
                         hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Sağ butonlar --------------------------------------------- */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-white text-[15px] px-4 py-1.5 rounded hover:bg-[#23224F] transition"
          >
            Oturum Aç
          </Link>

          <Link
            href="/kayit"
            className="text-white text-[15px] px-5 py-1.5 border-2 border-white rounded-full
                       font-semibold hover:bg-white hover:text-[#23224F] transition"
          >
            Kayıt Ol
          </Link>
        </div>
      </div>

      {/* Alt gradient çizgi ---------------------------------------- */}
      <div className="w-full h-1 bg-gradient-to-r from-[#A27DFB] to-[#46268A]" />
    </header>
  );
}
