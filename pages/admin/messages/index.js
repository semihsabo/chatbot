// pages/admin/messages/index.js
import Layout from "../../../components/admin/Layout";
import { useRouter } from "next/router";
import {
  FaSearch,
  FaFilter,
  FaRegComments,
  FaComments,
  FaEnvelopeOpenText,
  FaUserFriends,
} from "react-icons/fa";
import { useState, useMemo } from "react";

/* ——————— MOCK DATA (çoğaltılabilir) ——————— */
const conversations = [
  {
    id: 1,
    customer: "Alice Johnson",
    phone: "+1234567890",
    email: "alice@example.com",
    last: "Hi, I have a question about my order",
    channel: "WhatsApp",
    status: "Active",
    tags: ["VIP", "Returning"],
    activity: "2 min ago",
    unread: 2,
  },
  {
    id: 2,
    customer: "Bob Smith",
    phone: "+1234567891",
    email: "bob@example.com",
    last: "When will my headphones be shipped?",
    channel: "Instagram",
    status: "Active",
    tags: ["New Customer"],
    activity: "1 hour ago",
    unread: 0,
  },
  {
    id: 3,
    customer: "Carol Davis",
    phone: "+1234567892",
    email: "carol@example.com",
    last: "Thank you for the quick response!",
    channel: "Messenger",
    status: "Closed",
    tags: ["Returning", "Satisfied"],
    activity: "3 hours ago",
    unread: 1,
  },
  {
    id: 4,
    customer: "David Wilson",
    phone: "+1234567893",
    email: "david@example.com",
    last: "Can I change my shipping address?",
    channel: "WhatsApp",
    status: "On Hold",
    tags: ["Returning", "VIP"],
    activity: "5 hours ago",
    unread: 0,
  },
  {
    id: 5,
    customer: "Emma Brown",
    phone: "+1234567894",
    email: "emma@example.com",
    last: "Perfect! Order received successfully",
    channel: "Instagram",
    status: "Closed",
    tags: ["VIP"],
    activity: "1 day ago",
    unread: 0,
  },
  {
    id: 6,
    customer: "Frank Miller",
    phone: "+1234567895",
    email: "frank@example.com",
    last: "I need help with my payment",
    channel: "WhatsApp",
    status: "Active",
    tags: ["Payment Issue"],
    activity: "2 days ago",
    unread: 3,
  },
];

/* ——————— Reusable helpers ——————— */
const statusBadge = (txt) =>
  ({
    Active: "bg-green-100 text-green-600",
    Closed: "bg-gray-200 text-gray-600",
    "On Hold": "bg-yellow-100 text-yellow-700",
  }[txt] || "bg-gray-100 text-gray-600");

const channelBadge = (ch) =>
  ({
    WhatsApp: "bg-[#e5f0ff] text-[#1c8cff]",
    Instagram: "bg-[#ffeaf6] text-[#ff2da0]",
    Messenger: "bg-[#eaf1ff] text-[#006aff]",
  }[ch] || "bg-gray-100 text-gray-600");

export default function LiveChatManagement() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  /* — Dinamik Özet Kutuları — */
  const summary = useMemo(() => {
    const total = conversations.length;
    const active = conversations.filter((c) => c.status === "Active").length;
    const unreadMsgs = conversations.reduce((sum, c) => sum + c.unread, 0);
    const online = 3; // mock – gerçek API’den gelebilir
    return [
      { icon: FaRegComments, label: "Total Chats", value: total },
      { icon: FaComments, label: "Active Chats", value: active },
      { icon: FaEnvelopeOpenText, label: "Unread Messages", value: unreadMsgs },
      { icon: FaUserFriends, label: "Online Customers", value: online },
    ];
  }, []);

  /* — Arama & filtre — */
  const list = conversations.filter((c) => {
    const q = search.toLowerCase();
    const matches =
      c.customer.toLowerCase().includes(q) ||
      c.phone.includes(q) ||
      c.email.toLowerCase().includes(q);
    const statusOK = filter === "All" || c.status === filter;
    return matches && statusOK;
  });

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Başlık */}
        <h1 className="text-2xl font-bold text-gray-800">Live Chat Management</h1>
        <p className="text-sm text-gray-500 -mt-2">
          Manage customer conversations across all channels
        </p>

        {/* Özet kutular */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summary.map((c) => (
            <div
              key={c.label}
              className="bg-white border border-[#dcd4ff] rounded-lg p-4 flex items-center gap-4 shadow-sm"
            >
              <c.icon className="text-[#8557FF]" />
              <div>
                <div className="text-sm text-gray-500">{c.label}</div>
                <div className="text-xl font-semibold text-gray-800">
                  {c.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & quick filter */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone…"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
          {["All", "Active", "On Hold", "Closed"].map((lbl) => (
            <button
              key={lbl}
              onClick={() => setFilter(lbl)}
              className={`px-4 py-2 text-sm rounded-lg border ${
                filter === lbl
                  ? "bg-[#8557FF] text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {lbl}
            </button>
          ))}
          <button className="px-3 py-2 flex items-center gap-2 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
            <FaFilter /> More Filters
          </button>
        </div>

        {/* Conversations table */}
        <div className="overflow-x-auto bg-white border border-[#dcd4ff] rounded-2xl shadow-md">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f6edff] text-[#8557FF] font-semibold">
              <tr className="text-left">
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Last Message</th>
                <th className="px-6 py-3">Channel</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Tags</th>
                <th className="px-6 py-3">Last Activity</th>
                <th className="px-6 py-3 text-center">Unread</th>
              </tr>
            </thead>
            <tbody>
              {list.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => router.push(`/admin/messages/${c.id}`)}
                  className="border-t last:border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{c.customer}</div>
                    <div className="text-xs text-gray-500">{c.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                    {c.email}
                  </td>
                  <td className="px-6 py-4 max-w-sm truncate">{c.last}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${channelBadge(
                        c.channel
                      )}`}
                    >
                      {c.channel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusBadge(
                        c.status
                      )}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{c.activity}</td>
                  <td className="px-6 py-4 text-center">
                    {c.unread ? (
                      <span className="bg-[#8557FF] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        {c.unread}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-6 text-center text-gray-500">
                    No conversations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
