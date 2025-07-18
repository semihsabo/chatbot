// components/admin/DashboardContent.js
import { useState } from "react";

export default function DashboardContent() {
  const [dateRange, setDateRange] = useState("Son 7 Gün");

  return (
    <div className="p-6 space-y-6">
      {/* ÜST METRİK KUTULARI + TARİH SEÇİCİ */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        {/* Metrik Kartları */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
          {[
            { title: "Toplam Tıklama", value: "12.3K" },
            { title: "Toplam Harcama", value: "₺3.200" },
            { title: "Dönüşüm Oranı", value: "7.8%" },
            { title: "Gösterim", value: "45.9K" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow text-sm">
              <div className="text-gray-500">{item.title}</div>
              <div className="text-2xl font-bold text-purple-700">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Tarih Filtresi */}
        <div className="w-full lg:w-auto">
          <select
            className="border rounded-lg px-4 py-2 text-sm shadow-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Bugün</option>
            <option>Son 7 Gün</option>
            <option>Son 30 Gün</option>
            <option>Bu Ay</option>
          </select>
        </div>
      </div>

      {/* GRAFİKLER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend (Line Chart placeholder) */}
        <div className="bg-white p-6 rounded-xl shadow h-64">
          <div className="font-semibold text-gray-700 mb-2">Performans Trend</div>
          <div className="text-sm text-gray-400">Buraya çizgi grafik gelecek (Recharts)</div>
        </div>

        {/* Kampanya Kartları */}
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <div className="font-semibold text-gray-700">Kampanya Kartları</div>
          <div className="space-y-2">
            {["Meta Ads", "Google Ads", "TikTok Ads"].map((name, i) => (
              <div key={i} className="border rounded-lg p-3 hover:shadow transition">
                <div className="text-sm font-medium text-gray-600">{name}</div>
                <div className="text-xs text-gray-400">Aktif • 1.2K gösterim</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ALT PERFORMANS GÖSTERGELERİ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Bounce Rate", value: "32%" },
          { title: "Avg. Session", value: "2m 14s" },
          { title: "Click-through Rate", value: "4.1%" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow text-center">
            <div className="text-gray-500 text-sm">{item.title}</div>
            <div className="text-xl font-bold text-purple-700">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
