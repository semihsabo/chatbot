// pages/admin/products.js
import Layout from "../../components/admin/Layout";
import Image from "next/image";
import { useState, Fragment } from "react";
import {
  FaPlus,
  FaSearch,
  FaEllipsisV,
  FaFilter,
  FaFileExport,
  FaTimes,
} from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

const initialProducts = [
  {
    id: "HR-001",
    name: "Premium Wireless Headphones",
    desc: "High‑quality noise‑cancelling headphones with premium sound quality",
    category: "Electronics",
    price: 259.9,
    stock: 45,
    status: "InStock",
    image: "/images/placeholder_product.svg",
  },
  {
    id: "SM-002",
    name: "Smart Fitness Watch",
    desc: "Advanced fitness tracking with heart rate monitoring and GPS",
    category: "Wearables",
    price: 139.9,
    stock: 8,
    status: "LowStock",
    image: "/images/placeholder_product.svg",
  },
  {
    id: "BX-003",
    name: "Portable Bluetooth Speaker",
    desc: "Waterproof speaker with 360‑degree sound and 12‑hour battery",
    category: "Audio",
    price: 79.9,
    stock: 0,
    status: "OutOfStock",
    image: "/images/placeholder_product.svg",
  },
];

export default function ProductManagementPage() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    sku: "",
    desc: "",
    category: "",
    price: "",
    stock: "",
    images: [],
  });

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status) => {
    const base = "px-2.5 py-0.5 rounded-full text-xs font-semibold";
    switch (status) {
      case "InStock":
        return `${base} bg-green-100 text-green-600`;
      case "LowStock":
        return `${base} bg-yellow-100 text-yellow-700`;
      default:
        return `${base} bg-red-100 text-red-600`;
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setForm({ ...form, images: [...form.images, ...files] });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Management</h1>
        <p className="text-sm text-gray-500 mb-4">Manage your product catalog and inventory</p>

        {/* Action bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search area */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, SKU, or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50">
              <FaFilter /> Filter
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm bg-white hover:bg-gray-50">
              <FaFileExport /> Export
            </button>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 bg-[#8557FF] hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm shadow"
            >
              <FaPlus /> Add Product
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-[#dcd4ff]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f6edff] text-[#8557FF] font-semibold">
              <tr className="text-left">
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">SKU</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t last:border-b hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                        <Image src={p.image} alt={p.name} width={40} height={40} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 leading-5">{p.name}</div>
                        <div className="text-gray-500 text-xs line-clamp-1 max-w-xs">{p.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{p.id}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 text-xs bg-[#eae7ff] text-[#8557FF] rounded-full font-medium">{p.category}</span>
                  </td>
                  <td className="px-6 py-4">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{p.stock}</td>
                  <td className="px-6 py-4">
                    <span className={statusBadge(p.status)}>
                      {p.status === "InStock" ? "In Stock" : p.status === "LowStock" ? "Low Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-500 hover:text-gray-700">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-gray-500">
                    No products match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-xl space-y-6">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="text-lg font-semibold text-gray-800">Edit Product</Dialog.Title>
                  <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <FaTimes />
                  </button>
                </div>

                {/* Grid Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="font-medium">Product Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="font-medium">SKU *</label>
                    <input
                      type="text"
                      value={form.sku}
                      onChange={(e) => setForm({ ...form, sku: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="font-medium">Description *</label>
                    <textarea
                      rows={2}
                      value={form.desc}
                      onChange={(e) => setForm({ ...form, desc: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  {/* Three small inputs */}
                  <div className="flex flex-col gap-2">
                    <label className="font-medium">Price *</label>
                    <input
                      type="number"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium">Stock *</label>
                    <input
                      type="number"
                      value={form.stock}
                      onChange={(e) => setForm({ ...form, stock: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium">Category *</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                      <option value="">Select...</option>
                      <option>Electronics</option>
                      <option>Wearables</option>
                      <option>Audio</option>
                    </select>
                  </div>

                  {/* Image Uploader */}
                  <div className="col-span-2">
                    <label className="font-medium block mb-2">Product Images *</label>
                    <div className="flex gap-4 items-start">
                      <label className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition relative">
                        <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
                        <FaPlus className="text-[#8557FF] text-lg" />
                      </label>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 mb-2">
                          Selected Images <span className="text-[#8557FF] font-semibold">{form.images.length} pcs</span>
                        </p>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {form.images.map((src, idx) => (
                            <div key={idx} className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                              <Image src={src} alt="preview" width={64} height={64} className="object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Footer buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="px-5 py-2 rounded-lg bg-[#8557FF] hover:bg-purple-700 text-white text-sm shadow"
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
}
