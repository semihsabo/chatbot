// pages/admin/dashboard.js
import Layout from "../../components/admin/Layout";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { useState } from "react";

const barData = [
  { name: "Pzt", siparis: 20 },
  { name: "Sal", siparis: 35 },
  { name: "Çar", siparis: 50 },
  { name: "Per", siparis: 30 },
  { name: "Cum", siparis: 40 },
  { name: "Cmt", siparis: 25 },
  { name: "Paz", siparis: 15 },
];

const lineData = [
  { name: "Ocak", buYil: 4000, gecenYil: 2400 },
  { name: "Şubat", buYil: 3000, gecenYil: 1398 },
  { name: "Mart", buYil: 2000, gecenYil: 9800 },
  { name: "Nisan", buYil: 2780, gecenYil: 3908 },
];

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState("Son 30 Gün");

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Başlık + Tarih Filtresi */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Genel Bakış</h2>
          <select
            className="mt-2 sm:mt-0 border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Bugün</option>
            <option>Son 7 Gün</option>
            <option>Son 30 Gün</option>
            <option>Bu Ay</option>
          </select>
        </div>

        {/* ÜST KARTLAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Toplam Sipariş", value: 100 },
            { label: "Toplam Kullanıcı", value: 40000 },
            { label: "Toplam Süre", value: 120 },
            { label: "Aktif Konuşma Süresi", value: 4000 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#8557FF] to-[#a07cff] text-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-sm mb-1 font-light">{item.label}</div>
              <div className="text-2xl font-bold">
                <CountUp end={item.value} duration={2} separator="," />
                {item.label.includes("Süre") && " saat"}
              </div>
            </div>
          ))}
        </div>

        {/* GRAFİKLER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Günlük Sipariş Sayısı */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Günlük Sipariş Sayısı</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="siparis" fill="#8557FF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Günlük Kazanç */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Günlük Kazanç</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="buYil" stroke="#8557FF" strokeWidth={2} />
                <Line type="monotone" dataKey="gecenYil" stroke="#C084FC" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Toplam Sipariş Sayısı */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Toplam Sipariş Sayısı</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="siparis" fill="#8557FF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Toplam Kazanç */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
            <h3 className="text-gray-700 font-semibold mb-3">Toplam Kazanç</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="buYil" stroke="#8557FF" strokeWidth={2} />
                <Line type="monotone" dataKey="gecenYil" stroke="#C084FC" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ALT KARTLAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Bot Durumu */}
          <div className="bg-white border border-purple-100 p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-gray-800 font-semibold">Bot Durumu</h4>
              <span className="text-sm text-purple-600 font-semibold">Aktif</span>
            </div>
            <p className="text-sm text-gray-500">İstediğiniz zaman botu pasif hale getirip manuel kontrol yapabilirsiniz.</p>
            <div className="mt-3">
              <div className="w-10 h-5 rounded-full bg-purple-300 relative">
                <div className="absolute left-5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>

          {/* Mesaj Trafiği */}
          <div className="bg-white border border-purple-100 p-5 rounded-2xl shadow-sm">
            <h4 className="text-gray-800 font-semibold mb-2">Mesaj Trafiği</h4>
            <div className="flex justify-between">
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">%60 Instagram</span>
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">%40 WhatsApp</span>
            </div>
          </div>

          {/* Bağlı Hesaplar */}
          <div className="bg-white border border-purple-100 p-5 rounded-2xl shadow-sm">
            <h4 className="text-gray-800 font-semibold mb-2">Bağlı Hesaplar <span className="text-purple-600 font-bold">2 adet</span></h4>
            <p className="text-sm text-gray-500 mb-2">İstediğiniz bağlantıyı ayarlar üzerinden sonlandırabilirsiniz.</p>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Instagram</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          {/* Saat Bazlı Trafik */}
          <div className="bg-white border border-purple-100 p-5 rounded-2xl shadow-sm">
            <h4 className="text-gray-800 font-semibold mb-2">Sipariş trafiği (saat bazlı)</h4>
            <p className="text-sm text-gray-500 mb-2">Bu alan size müşterilerinizin en çok sipariş verdiği ortalama saat bilgisini verir.</p>
            <div className="flex justify-between text-sm text-purple-700 font-semibold">
              <div>
                <p>Hafta içi</p>
                <p>20.00 - 21.00</p>
              </div>
              <div>
                <p>Hafta Sonu</p>
                <p>18.00 - 19.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}