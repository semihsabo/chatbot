import { useState } from 'react';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

export default function Topbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow-md relative z-10">
      {/* Arama */}
      <div className="relative mr-4">
        <button
          onClick={() => {
            setShowSearch(!showSearch);
            setShowNotifications(false);
            setShowProfileMenu(false);
          }}
          className="text-gray-600 hover:text-purple-600 transition border border-gray-300 p-1 rounded-md"
        >
          <FaSearch className="text-lg" />
        </button>
        {showSearch && (
          <div className="absolute right-0 mt-3 z-50">
            <input
              type="text"
              placeholder="Ara..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-full shadow bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}
      </div>

      {/* Bildirim */}
      <div className="relative mr-4">
        <button
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowSearch(false);
            setShowProfileMenu(false);
          }}
          className="text-gray-600 hover:text-purple-600 transition"
        >
          <FaBell className="text-lg" />
        </button>
        {showNotifications && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow p-4 w-64 z-50">
            <p className="text-sm text-gray-500">Henüz bildirimin yok.</p>
          </div>
        )}
      </div>

      {/* Profil */}
      <div className="relative">
        <button
          onClick={() => {
            setShowProfileMenu(!showProfileMenu);
            setShowSearch(false);
            setShowNotifications(false);
          }}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/profile.jpg"
            alt="Profil"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="text-right text-sm hidden md:block">
            <p className="text-gray-500">@semih</p>
            <p className="font-bold text-black">semihsabo</p>
          </div>
          <FaChevronDown className="ml-1 text-gray-600" />
        </button>

        {showProfileMenu && (
          <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-xl shadow w-56 z-50 text-sm overflow-hidden">
            <div className="px-4 py-3 border-b">
              <p className="text-gray-500">@semihsabo</p>
              <p className="font-bold text-black">semih</p>
            </div>
            <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50">
              <span className="text-lg">⚙️</span> Ayarlar
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50">
              <span className="text-lg">👤</span> Profil
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-50">
              <span className="text-lg">🚪</span> Oturumu kapat
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
