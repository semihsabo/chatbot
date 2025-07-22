// pages/admin/dashboard.js
import Layout from "../../components/admin/Layout";
import { useState } from "react";
import CountUp from "react-countup";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { FaCheckCircle } from "react-icons/fa";

function DonutProgress({
  value,
  size = 140,
  strokeWidth = 12,
  fg = "#8557FF",
  bg = "#EFE6FF",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value}%`}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bg}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={fg}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-extrabold text-gray-800">%{value}</span>
      </div>
    </div>
  );
}
const barData = [
  { name: "Sun", siparis: 10 },
  { name: "Mon", siparis: 30 },
  { name: "Tue", siparis: 45 },
  { name: "Wed", siparis: 70 },
  { name: "Thu", siparis: 40 },
  { name: "Fri", siparis: 20 },
  { name: "Sat", siparis: 5 },
];

const lineData = [
  { name: "Jan", buYil: 4000, gecenYil: 2400 },
  { name: "Feb", buYil: 3000, gecenYil: 1398 },
  { name: "Mar", buYil: 2000, gecenYil: 9800 },
  { name: "Apr", buYil: 2780, gecenYil: 3908 },
  { name: "May", buYil: 1890, gecenYil: 4800 },
  { name: "Jun", buYil: 2390, gecenYil: 3800 },
  { name: "Jul", buYil: 3490, gecenYil: 4300 },
];

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState("Son 30 Gün");

  return (
    <Layout>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Başlık + filtre */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Genel Bakış</h2>
          <select
            className="border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Bugün</option>
            <option>Son 7 Gün</option>
            <option>Son 30 Gün</option>
            <option>Bu Ay</option>
          </select>
        </header>

        {/* Üst metrikler */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "Toplam Sipariş", value: 100 },
            { label: "Toplam Kullanıcı", value: 40000 },
            { label: "Toplam Sohbet", value: 120 },
            { label: "Manuel Kontrol Süresi", value: 100, suffix: " saat" },
            { label: "Bot Kullanım Süresi", value: 4000, suffix: " saat" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#5A2DFF] to-[#9B7CFF] text-white rounded-2xl p-5 shadow hover:shadow-lg transition"
            >
              <p className="text-xs mb-1 font-light tracking-wide">{item.label}</p>
              <p className="text-2xl font-extrabold">
                <CountUp end={item.value} duration={2} separator="," />
                {item.suffix || ""}
              </p>
            </div>
          ))}
        </section>
        {/* 2×2 Grafikler */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Günlük Sipariş Sayısı</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="siparis" fill="#8557FF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Günlük Kazanç</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="buYil" stroke="#8557FF" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="gecenYil" stroke="#8AE0C0" strokeWidth={3} strokeDasharray="6 6" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Toplam Sipariş Sayısı</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="siparis" fill="#8557FF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Toplam Kazanç</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="buYil" stroke="#8557FF" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="gecenYil" stroke="#8AE0C0" strokeWidth={3} strokeDasharray="6 6" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </article>
        </section>
        {/* Donut Göstergeler */}
        <section className="flex flex-wrap justify-center gap-8">
          {[
            { label: "Sipariş Dönüşüm Oranı", value: 75 },
            { label: "Memnuniyet Oranı", value: 90 },
            { label: "Bot Başarı Oranı", value: 50 },
          ].map((itm, idx) => (
            <div key={idx} className="flex flex-col items-center w-40">
              <span className="text-sm text-gray-600 mb-2 font-medium text-center">{itm.label}</span>
              <DonutProgress value={itm.value} />
            </div>
          ))}
        </section>

        {/* Alt Bilgi Kartları */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white border-2 border-green-500 p-6 rounded-2xl shadow-sm flex flex-col gap-3">
            <header className="flex justify-between items-center">
              <h4 className="text-gray-800 font-semibold">Bot Durumu</h4>
              <span className="text-sm text-green-600 font-semibold">Aktif</span>
            </header>
            <p className="text-sm text-gray-500 flex-1">
              İstediğiniz zaman botu pasif hale getirip manuel kontrol yapabilirsiniz.
            </p>
            <div className="w-10 h-5 rounded-full bg-green-200 relative shrink-0">
              <div className="absolute left-5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform" />
            </div>
          </article>

          <article className="bg-white border-2 border-purple-500 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <h4 className="text-gray-800 font-semibold">Mesaj Trafiği</h4>
            <div className="flex justify-center gap-4">
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">%60 Instagram</span>
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">%40 WhatsApp</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Instagram</p>
              <p>WhatsApp</p>
            </div>
          </article>

          <article className="bg-white border-2 border-green-500 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <h4 className="text-gray-800 font-semibold">
              Bağlı Hesaplar <span className="text-green-600 font-bold">2 adet</span>
            </h4>
            <p className="text-sm text-gray-500">
              İstediğiniz bağlantıyı ayarlar üzerinden sonlandırabilirsiniz.
            </p>
            <ul className="space-y-2 text-sm">
              {["Instagram", "WhatsApp"].map((platform) => (
                <li key={platform} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-green-600" /> {platform}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white border-2 border-purple-500 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <h4 className="text-gray-800 font-semibold">Sipariş trafiği (saat bazlı)</h4>
            <p className="text-sm text-gray-500">
              Bu alan size müşterilerinizin en çok alışveriş yaptığı ortalama saat bilgisini verir.
            </p>
            <div className="flex items-end justify-between text-sm text-purple-700 font-semibold">
              <div className="text-center">
                <p>Hafta içi</p>
                <p>20.00 – 21.00</p>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <p>Hafta Sonu</p>
                <p>18.00 – 19.00</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
