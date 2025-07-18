// pages/admin/bot-settings.js
import { Fragment, useState } from "react";
import Layout from "../../components/admin/Layout";
import { Tab, Switch } from "@headlessui/react";
import {
  FaPlus,
  FaRegPaperPlane,
  FaRobot,
} from "react-icons/fa";

/* ---------------- Helpers ---------------- */
const Toggle = ({ val, set }) => (
  <Switch
    checked={val}
    onChange={set}
    className={`${val ? "bg-[#8557FF]" : "bg-gray-300"} inline-flex h-5 w-10 rounded-full items-center transition`}
  >
    <span
      className={`${val ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 bg-white rounded-full transition`}
    />
  </Switch>
);

const Section = ({ title, children }) => (
  <div className="border rounded-xl p-4 space-y-4 bg-white">
    <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
      <FaRobot /> {title}
    </h4>
    {children}
  </div>
);

const Input = ({ label, ...props }) => (
  <label className="block text-xs font-medium text-gray-700 space-y-1">
    {label}
    <input
      {...props}
      className="w-full mt-0.5 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#8557FF] focus:outline-none"
    />
  </label>
);

/* ---------------- Page ---------------- */
export default function BotCustomization() {
  /* global toggles */
  const [testMode, setTestMode] = useState(true);
  const [botEnabled, setBotEnabled] = useState(true);

  /* GENERAL */
  const langs = ["English", "Türkçe", "Deutsch", "Español", "Français", "العربية"];
  const [primaryLang, setPrimaryLang] = useState("English");
  const [supported, setSupported] = useState(["English", "Türkçe", "Español"]);
  const [welcome, setWelcome] = useState("Hi! Welcome to our WhatsApp support. How can I help you?");
  const [fallback, setFallback] = useState("I didn't get that. Can you try asking differently?");

  /* CHANNELS */
  const [channels, setChannels] = useState([
    { id: 1, name: "WhatsApp Business", status: "Active" },
    { id: 2, name: "Instagram Direct", status: "Pending" },
    { id: 3, name: "Facebook Messenger", status: "Active" },
  ]);

  const [keywords, setKeywords] = useState(["order", "tracking", "refund"]);

  /* AUTO‑REPLY RULES */
  const [autoReply, setAutoReply] = useState([
    { id: 1, trigger: "hi", reply: "Hello! How can I assist you?", active: true },
  ]);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Bot Customization <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Beta</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-0.5">Updated 2025‑07‑18 10:29</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border rounded-lg">Live Test</button>
            <button className="px-4 py-2 text-sm bg-[#8557FF] text-white rounded-lg">Publish</button>
          </div>
        </div>

        {/* Test mode banner */}
        <div className="bg-[#f6edff] border border-[#dcd4ff] rounded-lg p-3 flex justify-between items-center text-sm">
          <span className="font-medium">Test Mode {testMode ? "Active" : "Inactive"}</span>
          <Toggle val={testMode} set={setTestMode} />
        </div>

        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex gap-2 border-b text-sm font-medium">
            {[
              "General",
              "Channels",
              "A.I & NLP",
              "Flows",
              "Advanced",
              "Test",
            ].map((t) => (
              <Tab
                key={t}
                className={({ selected }) =>
                  `${selected ? "text-[#8557FF] border-b-2 border-[#8557FF]" : "text-gray-600"} px-3 py-2 outline-none`
                }
              >
                {t}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6 space-y-6">
            {/* GENERAL */}
            <Tab.Panel className="space-y-6">
              <Section title="Bot Status & Control">
                <div className="flex items-center justify-between text-sm">
                  <span>Enable bot</span>
                  <Toggle val={botEnabled} set={setBotEnabled} />
                </div>
              </Section>
              <Section title="Language Configuration">
                <Input label="Primary Language" as="select" value={primaryLang} onChange={(e) => setPrimaryLang(e.target.value)} />
                <label className="block text-xs font-medium mb-1">Supported Languages</label>
                <div className="flex flex-wrap gap-2">
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() =>
                        setSupported((prev) =>
                          prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]
                        )
                      }
                      className={`px-3 py-1 text-xs rounded-full border ${
                        supported.includes(l) ? "bg-[#f6edff] border-[#8557FF] text-[#8557FF]" : "bg-gray-50"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </Section>
              <Section title="Default Messages">
                <textarea
                  rows={3}
                  value={welcome}
                  onChange={(e) => setWelcome(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm mb-3 bg-[#f6edff]"
                  placeholder="Welcome Message"
                />
                <textarea
                  rows={3}
                  value={fallback}
                  onChange={(e) => setFallback(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm bg-[#f6edff]"
                  placeholder="Fallback Message"
                />
              </Section>
            </Tab.Panel>

            {/* CHANNELS */}
            <Tab.Panel className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-4">
                {channels.map((c) => (
                  <div key={c.id} className="border rounded-lg p-4 space-y-2 bg-[#f6edff]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{c.name}</h4>
                      <span className="text-xs bg-white px-2 py-0.5 rounded-full font-medium">{c.status}</span>
                    </div>
                    <p className="text-xs text-gray-600">Connected & Active</p>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8557FF] text-white rounded-lg text-sm">
                <FaPlus /> Add New Channel
              </button>

              <Section title="WhatsApp Business">
                <Input label="Welcome Message" value={welcome} onChange={(e) => setWelcome(e.target.value)} />
                <Input label="Fallback Message" value={fallback} onChange={(e) => setFallback(e.target.value)} />
                <label className="block text-xs font-medium mt-4 mb-1">Detection Keywords</label>
                <div className="border rounded-lg p-2 text-xs flex flex-wrap gap-1">
                  {keywords.map((k) => (
                    <span key={k} className="px-2 py-0.5 bg-gray-100 rounded-full">{k}</span>
                  ))}
                </div>
              </Section>
            </Tab.Panel>

            {/* AI & NLP */}
            <Tab.Panel className="text-center text-sm text-gray-500">Coming soon…</Tab.Panel>

            {/* FLOWS */}
            <Tab.Panel className="text-center text-sm text-gray-500">Visual Flow Editor placeholder</Tab.Panel>

            {/* ADVANCED */}
            <Tab.Panel className="text-center text-sm text-gray-500">Advanced settings placeholder</Tab.Panel>

            {/* TEST */}
            <Tab.Panel>
              <Section title="Live Test">
                <div className="border rounded-lg h-[300px] flex flex-col">
                  <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
                    Start a conversation to test your bot
                  </div>
                  <div className="flex p-2 border-t gap-2">
                    <input className="flex-1 border rounded px-2 py-1 text-xs" placeholder="Type a message…" />
                    <button className="px-3 py-1 rounded bg-[#8557FF] text-white text-xs flex items-center gap-1">
                      <FaRegPaperPlane /> Send
                    </button>
                  </div>
                </div>
              </Section>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}