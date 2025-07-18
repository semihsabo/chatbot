// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const menu = [
  { label: "Ürün", href: "/" },
  { label: "Fiyatlandırma", href: "/pricing" },
  { label: "Kaynaklar", href: "/#resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1A1336] w-full sticky top-0 z-30 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-5 px-6 md:px-8">
        {/* Logo -------------------------------------------------- */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-white inline-block" />
          <span className="font-extrabold text-xl text-white font-manrope">
            ChatBot
          </span>
        </Link>

        {/* Desktop menu ---------------------------------------- */}
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

        {/* Sağ butonlar (desktop) ------------------------------ */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Burger ---------------------------------------------- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown -------------------------------------- */}
      {open && (
        <div className="md:hidden bg-[#1A1336] border-t border-[#2c2352]">
          <nav className="flex flex-col gap-4 px-6 py-4 text-white text-sm font-medium">
            {menu.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <hr className="border-[#2c2352]" />
            <Link
              href="/login"
              className="px-4 py-2 rounded hover:bg-[#23224F] transition"
              onClick={() => setOpen(false)}
            >
              Oturum Aç
            </Link>
            <Link
              href="/kayit"
              className="px-4 py-2 border-2 border-white rounded-full font-semibold
                         hover:bg-white hover:text-[#23224F] transition text-center"
              onClick={() => setOpen(false)}
            >
              Kayıt Ol
            </Link>
          </nav>
        </div>
      )}

      {/* Alt gradient çizgi ---------------------------------- */}
      <div className="w-full h-1 bg-gradient-to-r from-[#A27DFB] to-[#46268A]" />
    </header>
  );
}
