// components/admin/Topbar.js
import { useState } from "react";
import { FaSearch, FaBell, FaChevronDown, FaBars, FaCogs } from "react-icons/fa";
import Image from "next/image";

export default function Topbar({ onToggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const closeAll = () => {
    setShowSearch(false);
    setShowNotifications(false);
    setShowProfileMenu(false);
  };

  return (
    <header className="flex items-center justify-between gap-1 p-3 sm:p-3 lg:px-6 bg-white shadow-md relative z-10">
      {/* Mobile hamburger */}
      <button
        className="md:hidden text-gray-600 hover:text-purple-600 transition p-2 -ml-1"
        onClick={onToggleSidebar}
        aria-label="Menüyü Aç/Kapat"
      >
        <FaBars className="text-lg" />
      </button>

      {/* Sağdaki aksiyonlar */}
      <div className="flex items-center gap-2 sm:gap-3 ml-auto">
        {/* Arama */}
        <div className="relative">
          <button
            onClick={() => {
              closeAll(); setShowSearch(prev => !prev);
            }}
            className="text-gray-600 hover:text-purple-600 border border-gray-300 p-1.5 rounded-md"
            aria-label="Ara"
          >
            <FaSearch className="text-lg" />
          </button>
          {showSearch && (
            <div className="absolute right-0 mt-3 z-50 w-60 sm:w-72 md:w-80">
              <input
                type="text"
                placeholder="Ara..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full shadow bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}
        </div>

        {/* Bildirimler */}
        <div className="relative">
          <button
            onClick={() => {
              closeAll(); setShowNotifications(prev => !prev);
            }}
            className="text-gray-600 hover:text-purple-600 p-1.5"
            aria-label="Bildirimler"
          >
            <FaBell className="text-lg" />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow p-4 w-64 z-50 text-sm">
              <p className="text-gray-500">Henüz bildirimin yok.</p>
            </div>
          )}
        </div>

        {/* Profil */}
        <div className="relative">
          <button
            onClick={() => {
              closeAll(); setShowProfileMenu(prev => !prev);
            }}
            className="flex items-center gap-1 sm:gap-2"
            aria-label="Profil Menüsü"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profil"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="hidden md:flex flex-col text-right text-sm px-1">
              <span className="text-gray-500 leading-none">@semih</span>
              <span className="font-bold text-black leading-none">semihsabo</span>
            </div>
            <FaChevronDown className="text-gray-600" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-xl shadow w-56 z-50 text-sm overflow-hidden">
              <div className="px-4 py-3 border-b">
                <p className="text-gray-500 leading-none">@semihsabo</p>
                <p className="font-bold text-black leading-none">semih</p>
              </div>
              <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50">
                <FaCogs className="text-sm" /> Ayarlar
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50">
                👤 Profil
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-50">
                🚪 Oturumu kapat
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
