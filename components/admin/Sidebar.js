// components/admin/Sidebar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  FaTachometerAlt,
  FaBox,
  FaCogs,
  FaFlask,
  FaEnvelope,
  FaShoppingCart,
  FaDollarSign,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: <FaTachometerAlt /> },
  { label: 'Ürün Yönetimi', href: '/admin/products', icon: <FaBox /> },
  { label: 'Bot Ayarları', href: '/admin/bot-settings', icon: <FaCogs /> },
  { label: 'Bot Test Ekranı', href: '/admin/bot-test', icon: <FaFlask /> },
  { label: 'Mesaj Takibi', href: '/admin/messages', icon: <FaEnvelope /> },
  { label: 'Siparişler', href: '/admin/orders', icon: <FaShoppingCart /> },
  { label: 'Ödemeler', href: '/admin/payments', icon: <FaDollarSign /> },
  { label: 'Ayarlar', href: '/admin/settings', icon: <FaCog /> },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const [isMobile, setIsMobile] = useState(false);
  const baseWidth = collapsed ? 'w-20' : 'w-64';
  const labelCls = collapsed ? 'hidden' : 'inline';

  // Ekran boyutunu izleyerek mobil olup olmadığını belirle
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <>
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={toggle}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-20 h-screen bg-white shadow-lg transition-all duration-300 py-6 px-4
          ${baseWidth}
          ${isMobile ? (collapsed ? 'hidden' : 'flex') : 'hidden md:flex'}
          flex-col justify-between
        `}
      >
        {/* Logo & Collapse */}
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2 text-purple-600 text-2xl font-bold">
              <div className="w-4 h-4 bg-purple-500 rounded-full" />
              <span className={labelCls}>ChatBot</span>
            </div>
            <button
              onClick={toggle}
              className="text-gray-500 hover:text-purple-600 p-1"
              aria-label="Toggle sidebar"
            >
              {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>

          {/* Menü */}
          <nav className="flex flex-col gap-4">
            {menuItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => isMobile && setCollapsed(true)} // 🟣 oto-kapatma
                className={`flex items-center gap-3 text-gray-600 hover:text-purple-600 transition text-sm font-medium py-2 ${collapsed ? 'justify-center px-0' : 'px-2'}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className={labelCls}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Alt Bölüm */}
        <div className="px-2">
          <img
            src="/images/login-hero.svg"
            alt="Sidebar Illustration"
            className={`mx-auto mb-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-full h-auto'}`}
          />

          <button
            className={`${collapsed ? 'w-10 h-10 rounded-full' : 'w-full py-2 rounded-lg'} bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm flex items-center justify-center mb-2 transition`}
          >
            {collapsed ? <FaDollarSign /> : 'Plan Değiştir'}
          </button>

          {!collapsed && (
            <div className="flex flex-col items-center text-center text-xs text-gray-500">
              <img
                src="/avatars/avatar.jpg"
                alt="Profil"
                className="w-8 h-8 rounded-full mb-1"
              />
              <span>Tekrar hoşgeldin,</span>
              <span className="font-bold text-black">Süreyya</span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
