import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Topbar from './Topbar';

// Sidebar'ı sadece client-side yükle
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function Layout({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutuna göre isMobile güncelle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sayfa navigasyonu başladığında ve tamamlandığında sidebar'ı kapat
  useEffect(() => {
    const closeSidebar = () => {
      if (isMobile) setCollapsed(true);
    };
    router.events.on('routeChangeStart', closeSidebar);
    router.events.on('routeChangeComplete', closeSidebar);
    return () => {
      router.events.off('routeChangeStart', closeSidebar);
      router.events.off('routeChangeComplete', closeSidebar);
    };
  }, [isMobile, router.events]);

  const mlClass = isMobile ? 'ml-0' : collapsed ? 'ml-20' : 'ml-64';

  return (
    <div className="flex">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />
      <div className={`${mlClass} transition-all duration-300 flex flex-col min-h-screen w-full`}>
        <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="pt-4 p-4 flex-1">{children}</main>
      </div>
    </div>
  );
}
