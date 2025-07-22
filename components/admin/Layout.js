// components/admin/Layout.js
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mlClass = isMobile ? 'ml-0' : collapsed ? 'ml-20' : 'ml-64';

  return (
    <div className="flex">
      {/* Sidebar (mobilde absolute olabilir) */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} />

      {/* İçerik */}
      <div className={`${mlClass} transition-all duration-300 flex flex-col min-h-screen w-full`}>
        <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="pt-4 p-4 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
