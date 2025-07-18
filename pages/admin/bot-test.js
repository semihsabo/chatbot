// pages/admin/bot-test.js
import { useState } from "react";
import Layout from "../../components/admin/Layout";
import { Switch } from "@headlessui/react";
import {
  FaPaperPlane,
  FaSyncAlt,
  FaRobot,
  FaPlay,
} from "react-icons/fa";

/* ------------------ MOCK DATA ------------------ */
const channels = [
  { id: "wa", name: "WhatsApp" },
  { id: "ig", name: "Instagram" },
  { id: "ms", name: "Messenger" },
];

const scenarios = [
  {
    id: "order",
    title: "Order Tracking",
    desc: "Customer wants to track their order",
    starter: "Hi, I'd like to track my order #12345",
  },
  {
    id: "product",
    title: "Product Questions",
    desc: "Customer asking about products",
    starter: "Do you have the new wireless headphones in stock?",
  },
];

/* ------------------ COMPONENTS ------------------ */
const Toggle = ({ val, set }) => (
  <Switch
    checked={val}
    onChange={set}
    className={`${val ? "bg-[#8557FF]" : "bg-gray-300"} inline-flex h-5 w-10 items-center rounded-full transition`}
  >
    <span
      className={`${val ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </Switch>
);

const Box = ({ children }) => (
  <div className="border rounded-xl p-4 space-y-3 bg-white">{children}</div>
);

/* ------------------ PAGE ------------------ */
export default function BotTestPage() {
  const [selectedChannel, setSelectedChannel] = useState("ig");
  const [typingDelay, setTypingDelay] = useState(2);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const runScenario = (sc) => {
    setMessages([{ from: "customer", text: sc.starter }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: "Sure! Let me check that for you…" }]);
    }, typingDelay * 1000);
  };

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "customer", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: "(Bot reply placeholder)" }]);
    }, typingDelay * 1000);
  };

  const resetChat = () => setMessages([]);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800">Bot Customization</h1>
        <p className="text-xs text-gray-500 -mt-1">Test your bot before publishing</p>

        {/* Test Mode Banner */}
        <div className="bg-[#f6edff] border border-[#dcd4ff] rounded-lg p-3 flex justify-between items-center text-sm mb-6">
          <span className="font-medium">Test Mode Active</span>
          <Toggle val={true} set={() => {}} />
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Channel + Scenarios */}
            <div className="grid md:grid-cols-2 gap-4">
              <Box>
                <h4 className="text-sm font-semibold">Channel Selection</h4>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {channels.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedChannel(c.id)}
                      className={`border rounded-lg py-3 text-xs font-medium ${
                        selectedChannel === c.id ? "bg-[#f6edff] border-[#8557FF] text-[#8557FF]" : "bg-gray-50"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">Selected: {channels.find((c) => c.id === selectedChannel).name}</p>
              </Box>

              <Box>
                <h4 className="text-sm font-semibold">Test Scenarios</h4>
                {scenarios.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => runScenario(s)}
                    className="w-full text-left px-3 py-1.5 border rounded-lg text-xs mb-2 hover:bg-gray-50"
                  >
                    <p className="font-medium">{s.title}</p>
                    <p className="text-gray-500">{s.desc}</p>
                  </button>
                ))}
                <button className="w-full mt-2 text-xs text-[#8557FF] underline">View All Scenarios</button>
              </Box>
            </div>

            {/* Chat Simulator */}
            <Box>
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold flex items-center gap-1">
                  <FaRobot /> Chat Simulator <span className="text-xs bg-[#f6edff] px-2 py-0.5 rounded-full">{channels.find((c) => c.id === selectedChannel).name}</span>
                </h4>
                <button onClick={resetChat} className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
                  <FaSyncAlt /> Reset
                </button>
              </div>

              {/* Chat window */}
              <div className="h-64 border rounded-lg p-3 overflow-y-auto bg-[#f6f7fa] space-y-2">
                {messages.length === 0 && (
                  <p className="text-center text-xs text-gray-400 mt-16">Start Testing Your Bot</p>
                )}
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[70%] px-3 py-2 text-xs rounded-lg shadow ${
                      m.from === "bot" ? "bg-white text-gray-800" : "bg-[#8557FF] text-white ml-auto"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Scenario quick buttons */}
              <div className="flex gap-2 mt-3 text-xs">
                {scenarios.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => runScenario(s)}
                    className="border rounded px-2 py-1 hover:bg-gray-50 flex items-center gap-1"
                  >
                    <FaPlay /> Run {s.title} Test
                  </button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={send} className="flex gap-2 mt-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your test message…"
                  className="flex-1 border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#8557FF] focus:outline-none"
                />
                <button className="px-3 py-2 bg-[#8557FF] text-white rounded-lg text-xs flex items-center gap-1">
                  Send <FaPaperPlane className="text-[10px]" />
                </button>
              </form>
              <p className="mt-1 text-[10px] text-gray-400 text-right">Typing delay: {typingDelay}s</p>
            </Box>
          </div>

          {/* RIGHT COLUMN – Live Test mini */}
          <Box>
            <h4 className="text-sm font-semibold mb-2">Live Test</h4>
            <label className="block text-xs font-medium mb-1">Test Channel</label>
            <select
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-xs mb-4"
            >
              {channels.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <div className="h-40 border rounded-lg flex items-center justify-center text-xs text-gray-400 mb-4">
              Start a conversation to test your bot
            </div>
            <form onSubmit={send} className="flex gap-2 mb-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 border rounded-lg px-2 py-1 text-xs"
              />
              <button className="px-3 py-1 bg-[#8557FF] text-white rounded-lg text-xs flex items-center gap-1">
                <FaPaperPlane />
              </button>
            </form>
            <button onClick={resetChat} className="w-full border rounded-lg py-1 text-xs text-gray-600 hover:bg-gray-50">
              Reset
            </button>
          </Box>
        </div>
      </div>
    </Layout>
  );
}
