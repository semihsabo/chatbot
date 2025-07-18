// pages/admin/messages/[id].js
import Layout from "../../../components/admin/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaRobot,
  FaTruck,
  FaRegPaperPlane,
  FaRegStickyNote,
} from "react-icons/fa";

/***************************
 * GLOBAL MOCK DATA
 * ‑ In prod, replace with API fetch (e.g. getServerSideProps)
 ***************************/
const mockConversations = [
  {
    id: "1",
    orderId: "ORD‑2024‑001",
    customer: {
      name: "Alice Johnson",
      phone: "+1 234 567 890",
      email: "alice@example.com",
      tags: ["VIP", "Returning"],
    },
    messages: [
      { from: "customer", text: "Hi, I have a question about my order", time: "16:01" },
      { from: "agent", text: "Hello! Can you share your order number?", time: "16:03" },
      { from: "customer", text: "I ordered wireless headphones but haven’t received a confirmation email", time: "16:04" },
    ],
    order: { items: 2, total: 499.98 },
  },
  {
    id: "2",
    orderId: "ORD‑2024‑002",
    customer: {
      name: "Bob Smith",
      phone: "+1 987 654 321",
      email: "bob@example.com",
      tags: ["New"],
    },
    messages: [
      { from: "customer", text: "When will my headphones be shipped?", time: "14:11" },
      { from: "agent", text: "We’re preparing your shipment today", time: "14:14" },
    ],
    order: { items: 1, total: 299.99 },
  },
  {
    id: "3",
    orderId: "ORD‑2024‑003",
    customer: {
      name: "Carol Davis",
      phone: "+1 555 987 1234",
      email: "carol@example.com",
      tags: ["Returning"],
    },
    messages: [
      { from: "customer", text: "Thanks for the quick response!", time: "09:22" },
      { from: "agent", text: "Happy to help!", time: "09:23" },
    ],
    order: { items: 2, total: 159.98 },
  },
];

/***************************
 * REUSABLES
 ***************************/
const Badge = ({ children, color }) => {
  const colors = {
    gray: "bg-gray-100 text-gray-600",
    vip: "bg-[#e7ddff] text-[#8557FF]",
    tag: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${colors[color] || colors.gray}`}>
      {children}
    </span>
  );
};

const Bubble = ({ from, text, time }) => (
  <div
    className={`max-w-lg text-sm rounded-lg px-3 py-2 shadow-sm relative ${
          from === "agent" ? "bg-[#8557FF] text-white ml-auto" : "bg-gray-100 text-gray-800"
        }`}
  >
    {text}
    <span className="absolute bottom-1 right-2 text-[10px] opacity-60">{time}</span>
  </div>
);

export default function MessageConversationPage() {
  const router = useRouter();
  const { id } = router.query;
  const [conv, setConv] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!id) return;
    const data = mockConversations.find((c) => c.id === id);
    setConv(data || null);
  }, [id]);

  if (!conv) {
    return (
      <Layout>
        <div className="p-6 text-center text-gray-500">Conversation not found…</div>
      </Layout>
    );
  }

  const sendMsg = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setConv((prev) => ({
      ...prev,
      messages: [...prev.messages, { from: "agent", text: input, time: "16:10" }],
    }));
    setInput("");
  };

  const suggestions = [
    "Could you share your order ID?",
    "Let me check on that for you…",
    "Would you like to speak with a human agent?",
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Back */}
        <button onClick={() => router.push("/admin/messages")} className="flex items-center gap-2 text-sm text-[#8557FF]">
          <FaArrowLeft /> All Conversations
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800">Chat with {conv.customer.name}</h1>
        <p className="text-sm text-gray-500 -mt-2">Manage this customer conversation</p>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Customer Card */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  {conv.customer.name}
                  {conv.customer.tags.includes("VIP") && <Badge color="vip">VIP</Badge>}
                </div>
                <div className="text-xs text-gray-500 flex gap-2 mt-1">
                  <span>{conv.customer.phone}</span>•<span>{conv.customer.email}</span>
                </div>
              </div>
              <Badge>#{conv.orderId}</Badge>
            </div>

            {/* Messages */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 h-[380px] overflow-y-auto space-y-3">
              {conv.messages.map((m, i) => (
                <Bubble key={i} {...m} />
              ))}
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => setInput(s)} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={sendMsg} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 border border-gray-300 rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button type="submit" className="px-4 py-2 bg-[#8557FF] hover:bg-purple-700 text-white text-sm rounded-lg flex items-center gap-1">
                Send <FaRegPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-4 text-xs">
            {/* Bot Control */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 space-y-3">
              <div className="font-semibold text-gray-800 flex items-center gap-2">
                <FaRobot /> Bot Control
              </div>
              <div className="flex justify-between items-center">
                <span>Bot Active</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-[#8557FF] relative">
                    <div className="absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5" />
                  </div>
                </label>
              </div>
              <button className="w-full border border-gray-300 rounded-lg py-1">Re‑enable Bot</button>
            </div>

            {/* Order */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 space-y-3">
              <div className="font-semibold text-gray-800">Active Order</div>
              <div className="border p-2 rounded-md space-y-1">
                <div className="flex justify-between"><span>Order ID</span><span>#{conv.orderId}</span></div>
                <div className="flex justify-between"><span>Items</span><span>{conv.order.items}</span></div>
                <div className="flex justify-between font-medium"><span>Total</span><span>${conv.order.total.toFixed(2)}</span></div>
              </div>
              <button className="w-full border border-gray-300 rounded-lg py-1">View Details</button>
              <button className="w-full bg-[#8557FF] text-white rounded-lg py-1 flex items-center justify-center gap-1"><FaTruck /> Track Shipment</button>
            </div>

            {/* Notes */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 space-y-2">
              <div className="font-semibold text-gray-800 flex items-center gap-1"><FaRegStickyNote /> Customer Notes</div>
              <textarea rows={3} placeholder="Add notes…" className="w-full border rounded-lg p-2"></textarea>
              <button className="w-full border border-gray-300 rounded-lg py-1">Save Notes</button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-[#dcd4ff] rounded-lg p-4 space-y-2">
              <div className="font-semibold text-gray-800">Quick Actions</div>
              <button className="w-full border border-gray-300 rounded-lg py-1">Schedule Follow‑up</button>
              <button className="w-full border border-gray-300 rounded-lg py-1">Send Template</button>
              <button className="w-full border border-gray-300 rounded-lg py-1">Schedule Call</button>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}