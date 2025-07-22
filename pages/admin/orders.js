// pages/admin/orders.js
import Layout from "../../components/admin/Layout";
import { useState, Fragment } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFilter,
  FaFileExport,
  FaCalendarAlt,
  FaEllipsisV,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

const sampleOrders = [
  {
    id: "ORD-2024-001",
    customer: {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1234567890",
      address: "123 Main St, New York, NY 10001",
    },
    products: [
      { name: "Premium Wireless Headphones", sku: "WH-001", qty: 1, price: 299.99 },
      { name: "Smart Fitness Watch", sku: "SW-002", qty: 1, price: 199.99 },
    ],
    total: 499.98,
    status: "Preparing",
    payment: "Paid",
    channel: "WhatsApp",
    date: "15.01.2024",
  },
  {
    id: "ORD-2024-002",
    customer: {
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "+987654321",
      address: "456 Elm St, Chicago, IL 60601",
    },
    products: [
      { name: "Portable Bluetooth Speaker", sku: "BS-003", qty: 2, price: 79.99 },
    ],
    total: 159.98,
    status: "Pending",
    payment: "Pending",
    channel: "Instagram",
    date: "12.01.2024",
  },
  {
    id: "ORD-2024-003",
    customer: {
      name: "Carol Davis",
      email: "carol@example.com",
      phone: "+5559871234",
      address: "789 Pine St, Seattle, WA 98101",
    },
    products: [
      { name: "Premium Wireless Headphones", sku: "WH-001", qty: 1, price: 299.99 },
    ],
    total: 299.99,
    status: "Delivered",
    payment: "Paid",
    channel: "Messenger",
    date: "08.01.2024",
  },
];

export default function OrdersPage() {
  const [orders] = useState(sampleOrders);
  const [search, setSearch] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openDetail = (order) => {
    setSelected(order);
    setDetailOpen(true);
  };

  const filtered = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.email.toLowerCase().includes(search.toLowerCase())
  );

  const badge = (type) => {
    const base = "px-2.5 py-0.5 rounded-full text-xs font-semibold";
    const map = {
      Preparing: "bg-yellow-100 text-yellow-700",
      Pending: "bg-orange-100 text-orange-600",
      Delivered: "bg-green-100 text-green-600",
      Paid: "bg-green-100 text-green-600",
      PendingPay: "bg-orange-100 text-orange-600",
      WhatsApp: "bg-[#e5f0ff] text-[#1c8cff]",
      Instagram: "bg-[#ffeaf6] text-[#ff2da0]",
      Messenger: "bg-[#eaf1ff] text-[#006aff]",
    };
    return `${base} ${map[type] || "bg-gray-100 text-gray-600"}`;
  };

  return (
    <Layout>
      <div className="p-4 sm:p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
        <p className="text-sm text-gray-500">Track and manage customer orders across all channels</p>

        {/* Action bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative w-full sm:w-72">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders, customers, or emails..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>
            <button className="inline-flex items-center justify-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50">
              <FaFilter /> Filter
            </button>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50">
              <FaCalendarAlt /> Date Range
            </button>
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50">
              <FaFileExport /> Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto bg-white rounded-2xl shadow-md border border-[#dcd4ff]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f6edff] text-[#8557FF] font-semibold">
              <tr className="text-left">
                <th className="px-6 py-3">Order #</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Products</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Payment</th>
                <th className="px-6 py-3">Channel</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id} className="border-t last:border-b hover:bg-gray-50 cursor-pointer" onClick={() => openDetail(o)}>
                  <td className="px-6 py-4 font-medium text-gray-700">{o.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800 leading-5">{o.customer.name}</div>
                    <div className="text-gray-500 text-xs">{o.customer.email}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    {o.products.map((p, idx) => (
                      <div key={idx} className="text-gray-700">+{p.qty} {p.name}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4">${o.total.toFixed(2)}</td>
                  <td className="px-6 py-4"><span className={badge(o.status)}>{o.status}</span></td>
                  <td className="px-6 py-4"><span className={badge(o.payment === "Paid" ? "Paid" : "PendingPay")}>{o.payment}</span></td>
                  <td className="px-6 py-4"><span className={badge(o.channel)}>{o.channel}</span></td>
                  <td className="px-6 py-4 text-center"><FaEllipsisV className="text-gray-500" /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} className="py-6 text-center text-gray-500">No orders found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {/* ... (modal kısmı yukarıdakiyle aynı kaldı, responsive uyumlu) */}
    </Layout>
  );
}
