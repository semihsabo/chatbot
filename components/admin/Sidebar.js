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
  return (
    <aside className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between py-6 px-4">
      {/* Logo */}
      <div>
        <div className="text-purple-600 text-2xl font-bold mb-8 flex items-center gap-2 px-2">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          ChatBot
        </div>

        {/* Menü */}
        <nav className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition text-base font-medium"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Alt Bölüm */}
      <div className="flex flex-col items-center gap-3">
        <img
          src="/images/login-hero.svg"
          alt="Sidebar Illustration"
          className="w-32"
        />

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Plan Değiştir
        </button>

        <div className="text-xs text-gray-500 text-center mt-1">
          Tekrar hoşgeldin, <br />
          <span className="text-sm font-bold text-black">esra</span>
        </div>
      </div>
    </aside>
  );
}
