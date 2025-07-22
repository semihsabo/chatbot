// components/admin/DashboardContent.js
import { useState } from "react";

export default function DashboardContent() {
  const [dateRange, setDateRange] = useState("Son 7 Gün");

  const metrics = [
    { title: "Toplam Tıklama", value: "12.3K" },
    { title: "Toplam Harcama", value: "₺3.200" },
    { title: "Dönüşüm Oranı", value: "7.8%" },
    { title: "Gösterim", value: "45.9K" },
  ];

  const campaigns = ["Meta Ads", "Google Ads", "TikTok Ads"];

  const extraMetrics = [
    { title: "Bounce Rate", value: "32%" },
    { title: "Avg. Session", value: "2m 14s" },
    { title: "Click-through Rate", value: "4.1%" },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* ÜST METRİKLER + TARİH SEÇİCİ */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
        {/* Metrik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {metrics.map((item) => (
            <div
              key={item.title}
              className="bg-white p-4 sm:p-5 rounded-xl shadow text-sm"
            >
              <div className="text-gray-500">{item.title}</div>
              <div className="text-2xl font-extrabold text-purple-700">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tarih Filtresi */}
        <div className="w-full lg:w-auto">
          <select
            className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base shadow-sm"
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

      {/* GRAFİKLER + KAMPANYALAR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <div className="bg-white p-6 rounded-xl shadow min-h-[256px]">
          <h2 className="font-semibold text-gray-700 mb-2">
            Performans Trend
          </h2>
          <p className="text-sm text-gray-400">
            Buraya çizgi grafik gelecek (Recharts)
          </p>
        </div>

        {/* Kampanya Kartları */}
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <h2 className="font-semibold text-gray-700">Kampanya Kartları</h2>
          <div className="space-y-2">
            {campaigns.map((name) => (
              <div
                key={name}
                className="border rounded-lg p-3 hover:shadow transition"
              >
                <div className="text-sm font-medium text-gray-600">{name}</div>
                <div className="text-xs text-gray-400">
                  Aktif • 1.2K gösterim
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ALT PERFORMANS GÖSTERGELERİ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {extraMetrics.map((item) => (
          <div
            key={item.title}
            className="bg-white p-4 sm:p-5 rounded-xl shadow text-center"
          >
            <div className="text-gray-500 text-sm">{item.title}</div>
            <div className="text-xl font-extrabold text-purple-700">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
