// pages/admin/payments.js

import React, { useState, Fragment } from "react";
import Layout from "../../components/admin/Layout";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaTimes,
  FaLock,
  FaRegEye,
  FaDownload,
  FaEnvelope,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";

/* ————————————————— MOCK VERİLER ————————————————— */
const plans = [
  {
    id: "free",
    name: "Ücretsiz Plan",
    price: 0,
    desc: "Ürünü keşfetmek ve temel işlevleri denemek isteyenler için idealdir.",
    perks: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 25,
    desc: "Profesyonel kullanıcılar için gelişmiş özellikler ve daha fazla kontrol sunar.",
    perks: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    badge: "14 Gün Ücretsiz Deneme",
  },
  {
    id: "enterprise",
    name: "Kurumsal Plan",
    price: 50,
    desc: "Büyük ölçekli firmalara özel, kapsamlı ve özelleştirilebilir çözümler içerir.",
    perks: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    badge: "14 Gün Ücretsiz Deneme",
  },
];

const invoices = [
  {
    id: 1,
    date: "8 Temmuz 2025",
    type: "Fatura",
    order: "ABC24XYZ1230",
    plan: "Pro",
    amount: 25,
  },
  {
    id: 2,
    date: "8 Temmuz 2025",
    type: "Fatura",
    order: "ABC24XYZ1231",
    plan: "Pro",
    amount: 25,
  },
];

/* ————————————————— Yardımcı Bileşenler ————————————————— */

// Her özellik maddesinin başında gösterilecek onay ikonu
const Check = () => (
  <FaCheckCircle className="text-[#8557FF] inline-block mr-2" />
);

// Tek bir input + label bileşeni
const Input = ({ label, ...props }) => (
  <label className="block text-xs font-medium text-gray-600 mb-2">
    {label}
    <input
      {...props}
      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg text-sm focus:border-[#8557FF] focus:ring-2 focus:ring-[#8557FF]/50 focus:outline-none"
    />
  </label>
);

// Sağ tarafta modal içindeki plan özetini gösterir
function PlanSummary({ plan }) {
  return (
    <div className="border rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Planınız</h3>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#8557FF] text-white text-2xl">
          🏆
        </div>
        <p className="font-medium text-xl">{plan.name}</p>
        <p className="text-xs text-gray-500">Abonelik aylık olarak faturalandırılır.</p>
        <p className="text-sm">
          <span className="font-medium">Sonraki Ödeme Tarihi:</span> 26 Temmuz 2025
        </p>
        <p className="text-sm">
          <span className="font-medium">${plan.price} / ay</span> KDV dahil
        </p>
      </div>
    </div>
  );
}

// Modal sarmalayıcı bileşeni: arka plan, animasyon, kapanma düğmesi
function DialogWrapper({ open, setOpen, children, width = "max-w-3xl" }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${width} transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl`}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* ————————————————— Ana Sayfa Bileşeni ————————————————— */
export default function PaymentsPage() {
  // Modal açık/kapalı durumları
  const [billingOpen, setBillingOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const currentPlan = plans[1]; // “Pro Plan”ı seçili olarak varsayıyoruz

  return (
    <Layout>
      <div className="p-6 space-y-12">
        {/* ========== Planınız & Fatura/Ödeme Bölümü ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol: Planınız */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Planınız</h2>
            <div className="bg-gray-100 rounded-2xl p-6 flex">
              <div className="w-36 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8557FF]/80 to-[#8557FF] rounded-lg flex items-center justify-center text-white text-2xl">
                  🏆
                </div>
              </div>
              <div className="ml-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xl font-bold">{currentPlan.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{currentPlan.desc}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {currentPlan.perks.map((perk) => (
                    <li key={perk} className="flex items-center">
                      <Check />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ: Fatura ve Ödeme Butonları */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Fatura ve Ödeme</h2>
            <div className="space-y-4">
              <button
                onClick={() => setBillingOpen(true)}
                className="w-full py-2 rounded-full bg-[#8557FF] hover:bg-[#7749ff] text-white font-medium"
              >
                Ödeme Bilgilerini Düzenle
              </button>
              <button
                onClick={() => setInvoiceOpen(true)}
                className="w-full py-2 rounded-full border border-[#8557FF] text-[#8557FF] hover:bg-[#f6edff] font-medium"
              >
                Fatura Geçmişini Görüntüle
              </button>
            </div>
          </div>
        </div>

        {/* ========== Plan Kartları Bölümü ========== */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Planlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((pl) => (
              <div
                key={pl.id}
                className="relative bg-white border rounded-2xl shadow p-6 flex flex-col"
              >
                {pl.badge && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#8557FF] text-white text-xs px-3 py-0.5 rounded-full">
                    {pl.badge}
                  </span>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🎁</div>
                    <h3 className="text-lg font-bold">{pl.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{pl.desc}</p>
                  <div className="text-4xl font-extrabold mt-4">
                    ${pl.price}
                    <span className="text-base font-medium text-gray-600"> / ay</span>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                  Şimdi Satın Al
                </button>
                <h4 className="mt-6 font-bold">ÖZELLİKLER</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {pl.perks.map((perk) => (
                    <li key={perk} className="flex items-center">
                      <Check />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== ÖDEME BİLGİLERİNİ DÜZENLE MODALİ ========== */}
      <DialogWrapper open={billingOpen} setOpen={setBillingOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol: Kart Bilgisi & Butonlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ödeme Yönteminiz</h3>
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaCcMastercard className="text-2xl text-[#e95420]" />
                <div>
                  <p className="text-sm font-medium">5556 ile biten Mastercard</p>
                  <p className="text-xs text-gray-500">Son kullanım tarihi: 06/30</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <button className="flex items-center gap-1 text-sm text-[#8557FF]">
                <FaPlus /> Yeni Ekle
              </button>
              <button
                onClick={() => setCardOpen(true)}
                className="flex items-center gap-1 text-sm text-[#8557FF]"
              >
                <FaRegEye /> Düzenle
              </button>
            </div>
            <button className="mt-6 w-full py-2 rounded-full bg-[#8557FF] text-white font-medium">
              Kaydet
            </button>
            <div className="mt-6 flex justify-between items-center text-[10px] text-gray-500">
              <div className="flex items-center gap-1">
                <FaLock /> Güvenli işlem
              </div>
              <div className="space-x-2">
                <a href="#" className="underline">
                  Kullanım Koşulları
                </a>
                <a href="#" className="underline">
                  Gizlilik Politikası
                </a>
              </div>
            </div>
          </div>
          {/* Sağ: Plan Özeti */}
          <PlanSummary plan={currentPlan} />
        </div>
      </DialogWrapper>

      {/* ========== KART DÜZENLE MODALİ ========== */}
      <DialogWrapper open={cardOpen} setOpen={setCardOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Ödeme Yönteminiz</h3>
            <div className="flex items-center gap-4">
              <FaCcVisa className="text-2xl" />
              <FaCcMastercard className="text-2xl" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input label="Kart Numarası" placeholder="•••• •••• •••• 5577" />
              <Input label="AA/YY" placeholder="06/30" />
              <Input label="CVV" placeholder="•••" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Ad" placeholder="Süreyya" />
              <Input label="Soyad" placeholder="Bayrak" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Ülke" placeholder="Türkiye" />
              <Input label="Telefon" placeholder="+90 555 555 55 55" />
            </div>
            <button className="mt-4 w-full py-2 rounded-full bg-[#8557FF] text-white font-medium">
              Kaydet
            </button>
            <div className="mt-6 flex justify-between items-center text-[10px] text-gray-500">
              <div className="flex items-center gap-1">
                <FaLock /> Güvenli işlem
              </div>
              <div className="space-x-2">
                <a href="#" className="underline">
                  Kullanım Koşulları
                </a>
                <a href="#" className="underline">
                  Gizlilik Politikası
                </a>
              </div>
            </div>
          </form>
          <PlanSummary plan={currentPlan} />
        </div>
      </DialogWrapper>

      {/* ========== FATURA GEÇMİŞİ MODALİ ========== */}
      <DialogWrapper open={invoiceOpen} setOpen={setInvoiceOpen} width="max-w-3xl">
        <h3 className="text-lg font-semibold mb-4">Geçmiş Faturalar</h3>
        <div className="overflow-x-auto border rounded-lg">  
          <table className="min-w-full text-sm">
            <thead className="bg-[#f6edff] text-[#8557FF]">
              <tr>
                <th className="px-4 py-3 text-left">Tarih</th>
                <th className="px-4 py-3 text-left">Tür</th>
                <th className="px-4 py-3 text-left">Sipariş</th>
                <th className="px-4 py-3 text-left">Plan</th>
                <th className="px-4 py-3 text-left">Tutar</th>
                <th className="px-4 py-3 text-left">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-t">
                  <td className="px-4 py-3">{inv.date}</td>
                  <td className="px-4 py-3">{inv.type}</td>
                  <td className="px-4 py-3">{inv.order}</td>
                  <td className="px-4 py-3">{inv.plan}</td>
                  <td className="px-4 py-3">${inv.amount}</td>
                  <td className="px-4 py-3 flex gap-3 text-[#8557FF]">
                    <FaRegEye />
                    <FaDownload />
                    <FaEnvelope />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-6 h-6 rounded-full ${
                n === 1 ? "bg-[#8557FF] text-white" : "border border-[#8557FF] text-[#8557FF]"
              } text-xs font-semibold`}
            >
              {n}
            </button>
          ))}
        </div>
      </DialogWrapper>
    </Layout>
  );
}
