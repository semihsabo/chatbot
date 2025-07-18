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
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Management</h1>
        <p className="text-sm text-gray-500 mb-4">Track and manage customer orders across all channels</p>

        {/* Action bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {/* Search */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
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
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50"><FaFilter /> Filter</button>
          </div>
          {/* Right buttons */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50"><FaCalendarAlt /> Date Range</button>
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50"><FaFileExport /> Export</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-[#dcd4ff]">
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
      <Transition show={detailOpen} as={Fragment}>
        <Dialog onClose={() => setDetailOpen(false)} className="relative z-50">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-xl space-y-6">
                {selected && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <Dialog.Title className="text-lg font-semibold text-gray-800">Order Details - {selected.id}</Dialog.Title>
                      <button className="text-gray-500 hover:text-gray-700" onClick={() => setDetailOpen(false)}><FaTimes /></button>
                    </div>

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Customer Info */}
                      <div className="md:col-span-2 border border-[#dcd4ff] rounded-[12px] p-4 space-y-2">
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2"><FaUser className="text-[#8557FF]" /> Customer Information</h4>
                        <div className="text-sm text-gray-700"><span className="font-medium">Full Name:</span> {selected.customer.name}</div>
                        <div className="text-sm text-gray-700"><span className="font-medium">Email Address:</span> {selected.customer.email}</div>
                        <div className="text-sm text-gray-700"><span className="font-medium">Phone Number:</span> {selected.customer.phone}</div>
                        <div className="text-sm text-gray-700"><span className="font-medium">Order Channel:</span> {selected.channel}</div>
                        <div className="text-sm text-gray-700"><span className="font-medium">Shipping Address:</span> {selected.customer.address}</div>
                      </div>

                      {/* Order Management */}
                      <div className="border border-[#dcd4ff] rounded-[12px] p-4 space-y-3">
                        <h4 className="font-medium text-gray-800 mb-1">Order Management</h4>
                        <div className="text-sm flex flex-col gap-2">
                          <div><span className="font-medium">Order Status:</span> <span className={badge(selected.status)}>{selected.status}</span></div>
                          <div><span className="font-medium">Payment Status:</span> <span className={badge(selected.payment === "Paid" ? "Paid" : "PendingPay")}>{selected.payment}</span></div>
                          <div><span className="font-medium">Order Date:</span> {selected.date}</div>
                          <div><span className="font-medium">Total Amount:</span> ${selected.total.toFixed(2)}</div>
                        </div>
                        <button className="w-full mt-2 inline-flex justify-center items-center gap-2 bg-[#8557FF] hover:bg-purple-700 text-white text-xs py-2 rounded-lg"><FaEnvelope /> Contact Customer</button>
                        <button className="w-full inline-flex justify-center items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs py-2 rounded-lg"><FaCalendarAlt /> Schedule Follow‑up</button>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="border border-[#dcd4ff] rounded-[12px] p-4 space-y-2">
                      <h4 className="font-medium text-gray-800 mb-2">Order Items ({selected.products.length})</h4>
                      {selected.products.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm text-gray-700 border-b last:border-none py-2">
                          <div>
                            {item.name}
                            <div className="text-xs text-gray-500">SKU: {item.sku} &nbsp;|&nbsp; Qty: {item.qty} &nbsp;|&nbsp; Unit Price: ${item.price.toFixed(2)}</div>
                          </div>
                          <div>${(item.qty * item.price).toFixed(2)}</div>
                        </div>
                      ))}
                      <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t">
                        <span>Total Amount</span>
                        <span>${selected.total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 pt-2">
                      <button onClick={() => setDetailOpen(false)} className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm">Close</button>
                      <button className="px-5 py-2 rounded-lg bg-[#8557FF] hover:bg-purple-700 text-white text-sm shadow">Print Invoice</button>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
}
