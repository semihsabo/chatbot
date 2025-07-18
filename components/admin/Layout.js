// components/admin/Layout.js
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F9FAFB]">
      {/* Sidebar – mobilde gizli, ≥md ekranda görünür */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Ana alan */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
