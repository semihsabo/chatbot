// pages/admin/payments.js
import { Fragment, useState } from "react";
import Layout from "../../components/admin/Layout";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaCheckCircle,
  FaCreditCard,
  FaTimes,
  FaRegEye,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

/* ————————————————— MOCK VERİLER ————————————————— */
const plans = [
  {
    id: "free",
    name: "Ücretsiz Plan",
    price: 0,
    desc: "Ürünü keşfetmek ve temel işlevleri denemek isteyenler için idealdir.",
    perks: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    badge: null,
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 25,
    desc: "Profesyonel kullanıcılar için gelişmiş özellikler ve daha fazla kontrol sunar.",
    perks: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    badge: "14 Gün Ücretsiz Deneme",
  },
  {
    id: "enterprise",
    name: "Kurumsal Plan",
    price: 50,
    desc: "Büyük ölçekli firmalara özel, kapsamlı ve özelleştirilebilir çözümler içerir.",
    perks: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    badge: "14 Gün Ücretsiz Deneme",
  },
];

const invoices = [
  {
    id: 1,
    date: "8 Temmuz 2025",
    type: "Fatura",
    order: "ABC24XYZ1230",
    plan: "Pro",
    amount: 25,
  },
  { id: 2, date: "8 Temmuz 2025", type: "Fatura", order: "ABC24XYZ1230", plan: "Pro", amount: 25 },
  { id: 3, date: "8 Temmuz 2025", type: "Fatura", order: "ABC24XYZ1230", plan: "Pro", amount: 25 },
];

/* ————————————————— BİLEŞENLER ————————————————— */
const Check = () => <FaCheckCircle className="text-[#8557FF]" />;

/* ————————————————— ANA SAYFA ————————————————— */
export default function PaymentsPage() {
  const [billingOpen, setBillingOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const currentPlan = plans[1]; // Pro seçili mock

  return (
    <Layout>
      <div className="p-6 space-y-8">
        {/* — Planınız & Fatura paneli — */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mevcut Plan */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Planınız</h2>
            <div className="flex gap-6 p-6 bg-[#f6f7fa] rounded-2xl">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8557FF]/80 to-[#8557FF] text-white text-3xl">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-bold">{currentPlan.name}</h3>
                <p className="max-w-md text-sm text-gray-600">{currentPlan.desc}</p>
              </div>
            </div>
            <ul className="space-y-1">
              {currentPlan.perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check /> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Fatura & Ödeme */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Fatura ve Ödeme</h2>
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
              Fatura geçmişini görüntüle
            </button>
          </div>
        </div>

        {/* — Plan Kartları — */}
        <h2 className="text-2xl font-semibold mt-6">Planlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((pl) => (
            <div
              key={pl.id}
              className="relative bg-white border rounded-2xl shadow p-6 flex flex-col justify-between"
            >
              {pl.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8557FF] text-white text-xs px-3 py-0.5 rounded-full">
                  {pl.badge}
                </span>
              )}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎁</div>
                  <h3 className="text-lg font-bold">{pl.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{pl.desc}</p>
                <div className="text-4xl font-extrabold">
                  ${pl.price}
                  <span className="text-base font-medium text-gray-600"> /ay</span>
                </div>
              </div>
              <button className="mt-4 w-full py-2 rounded bg-black text-white hover:bg-gray-800 text-sm font-semibold">
                Şimdi Satın Al
              </button>
              <h4 className="mt-6 font-bold">ÖZELLİKLER</h4>
              <ul className="mt-2 space-y-1">
                {pl.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ——————— Billing Modal ——————— */}
      <DialogWrapper open={billingOpen} setOpen={setBillingOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kart listesi / yeni ekle */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ödeme Yönteminiz</h3>
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-2xl text-[#e95420]" />
                <div>
                  <p className="text-sm font-medium">•••• •••• •••• 5557</p>
                  <p className="text-xs text-gray-500">Son kullanma tarihi: 06/30</p>
                </div>
              </div>
              <button onClick={() => setCardOpen(true)} className="text-[#8557FF] text-sm">
                Düzenle
              </button>
            </div>
            <button
              onClick={() => setCardOpen(true)}
              className="mt-4 text-sm text-[#8557FF] underline"
            >
              Yeni Ekle
            </button>
            <button className="mt-6 px-6 py-2 rounded-full bg-[#8557FF] text-white font-medium">
              Kaydet
            </button>
          </div>

          {/* Plan Özeti */}
          <PlanSummary plan={currentPlan} />
        </div>
      </DialogWrapper>

      {/* ——————— Kart Düzenle Modalı ——————— */}
      <DialogWrapper open={cardOpen} setOpen={setCardOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kart formu */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-4">Ödeme Yönteminiz</h3>
            <Input label="Kart Numarası" placeholder="**** **** **** ****" />
            <div className="grid grid-cols-2 gap-2">
              <Input label="AA/YY" placeholder="06/30" />
              <Input label="CVV" placeholder="•••" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input label="Ad" placeholder="Süreyya" />
              <Input label="Soyad" placeholder="Bayrak" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input label="Ülke" placeholder="Türkiye" />
              <Input label="Telefon Numarası" placeholder="+90 555 555 55 55" />
            </div>
            <button className="mt-4 px-6 py-2 rounded-full bg-[#8557FF] text-white font-medium">
              Kaydet
            </button>
          </div>
          <PlanSummary plan={currentPlan} />
        </div>
      </DialogWrapper>

      {/* ——————— Invoice History Modal ——————— */}
      <DialogWrapper open={invoiceOpen} setOpen={setInvoiceOpen} width="max-w-3xl">
        <h3 className="font-semibold text-lg mb-4">Geçmiş Faturalar</h3>
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f6edff] text-[#8557FF]">
              <tr>
                <th className="px-4 py-3 text-left">Tarih</th>
                <th className="px-4 py-3 text-left">Tür</th>
                <th className="px-4 py-3 text-left">Sipariş Numarası</th>
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
        {/* Basit sayfalama mock */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-6 h-6 rounded ${
                n === 1 ? "bg-[#8557FF] text-white" : "border text-[#8557FF]"
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

/* ————————————————— Yardımcı Alt Bileşenler ————————————————— */
const DialogWrapper = ({ open, setOpen, children, width = "max-w-2xl" }) => (
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
              <p className="mt-6 text-[10px] text-gray-500 border-t pt-2">
                Tüm hakları saklıdır. <a href="#">Kullanım Koşulları</a> ·{" "}
                <a href="#">Gizlilik Politikası</a>
              </p>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

const PlanSummary = ({ plan }) => (
  <div className="border rounded-2xl p-6 space-y-4">
    <h4 className="font-semibold text-lg">Planınız</h4>
    <div className="flex items-center gap-3">
      <span className="text-3xl">🏆</span>
      <div>
        <p className="font-medium">{plan.name}</p>
        <p className="text-xs text-gray-500">Aylık olarak faturalandırılır.</p>
      </div>
    </div>
    <div className="text-sm space-y-1">
      <p>
        <span className="font-medium">Sonraki Ödeme Tarihi</span> 26 Temmuz 2025
      </p>
      <p>
        <span className="font-medium">${plan.price} / ay </span> KDV dahil
      </p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <label className="text-xs font-medium text-gray-600 space-y-1 block">
    {label}
    <input
      {...props}
      className="w-full px-3 py-2 mt-0.5 border rounded-lg text-sm focus:ring-2 focus:ring-[#8557FF] focus:outline-none"
    />
  </label>
);
