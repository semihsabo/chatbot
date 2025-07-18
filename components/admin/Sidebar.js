// components/admin/Sidebar.js
import { useState } from "react";
import Link from "next/link";
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
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <FaTachometerAlt /> },
  { label: "Ürün Yönetimi", href: "/admin/products", icon: <FaBox /> },
  { label: "Bot Ayarları", href: "/admin/bot-settings", icon: <FaCogs /> },
  { label: "Bot Test Ekranı", href: "/admin/bot-test", icon: <FaFlask /> },
  { label: "Mesaj Takibi", href: "/admin/messages", icon: <FaEnvelope /> },
  { label: "Siparişler", href: "/admin/orders", icon: <FaShoppingCart /> },
  { label: "Ödemeler", href: "/admin/payments", icon: <FaDollarSign /> },
  { label: "Ayarlar", href: "/admin/settings", icon: <FaCog /> },
];

export default function Sidebar() {
  // Sadece ≥md ekranlarda göründüğü için collapse state'ini burada tutabiliriz
  const [collapsed, setCollapsed] = useState(false);

  const baseWidth = collapsed ? "w-20" : "w-64";
  const labelCls = collapsed ? "hidden" : "inline";

  return (
    <aside
      className={`${baseWidth} hidden md:flex flex-col justify-between h-screen bg-white shadow-lg transition-all duration-300 py-6 px-2`}
    >
      {/* Logo & Collapse */}
      <div>
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-2 text-purple-600 text-2xl font-bold">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
            <span className={`${labelCls}`}>ChatBot</span>
          </div>

          {/* Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-purple-600 transition md:inline-flex items-center justify-center p-1"
            aria-label="Sidebar toggle"
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        {/* Menü */}
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 text-gray-700 hover:text-purple-600 transition text-sm font-medium px-2 ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`${labelCls}`}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Alt Bölüm */}
      <div className="flex flex-col items-center gap-3 px-2">
        <img
          src="/images/login-hero.svg"
          alt="Sidebar Illustration"
          className={`${collapsed ? "w-16" : "w-32"} transition-all duration-300`}
        />

        <button
          className={`${
            collapsed ? "w-10 h-10 rounded-full" : "w-full py-2 rounded-lg"
          } bg-purple-600 text-white text-xs sm:text-sm hover:bg-purple-700 transition flex items-center justify-center`}
        >
          {collapsed ? <FaDollarSign /> : "Plan Değiştir"}
        </button>

        {!collapsed && (
          <div className="text-xs text-gray-500 text-center mt-1">
            Tekrar hoşgeldin, <br />
            <span className="text-sm font-bold text-black">esra</span>
          </div>
        )}
      </div>
    </aside>
  );
}
