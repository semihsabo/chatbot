import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const menu = [
  { label: 'Ürün', href: '/' },
  { label: 'Fiyatlandırma', href: '/pricing' },
  { label: 'Kaynaklar', href: '/#resources' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-[#1A1336] shadow">
      <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-white" />
          <span className="font-manrope font-extrabold text-xl text-white">ChatBot</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 items-center text-white text-[15px]">
          {menu.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                         after:bg-[#B486FB] after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-1.5 text-[15px] text-white rounded hover:bg-[#23224F] transition-colors duration-200"
          >
            Oturum Aç
          </Link>
          <Link
            href="/kayit"
            className="px-5 py-1.5 text-[15px] text-white font-semibold border-2 border-white rounded-full
                       hover:bg-white hover:text-[#23224F] transition-colors duration-200"
          >
            Kayıt Ol
          </Link>
        </div>

        {/* Burger menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
          aria-label="Mobil menüyü aç/kapat"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#1A1336] border-t border-[#2c2352] animate-slideDown">
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
              className="px-4 py-2 text-center font-semibold border-2 border-white rounded-full
                         hover:bg-white hover:text-[#23224F] transition"
              onClick={() => setOpen(false)}
            >
              Kayıt Ol
            </Link>
          </nav>
        </div>
      )}

      {/* Gradient underline */}
      <div className="h-1 w-full bg-gradient-to-r from-[#A27DFB] to-[#46268A]" />
    </header>
  );
}
