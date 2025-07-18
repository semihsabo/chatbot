// pages/admin/settings.js
import { useState } from "react";
import Layout from "../../components/admin/Layout";
import { Switch } from "@headlessui/react";
import {
  FaCheckCircle,
  FaPlus,
  FaUserPlus,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

/* ----------------- Reusable ----------------- */
const Toggle = ({ enabled, setEnabled }) => (
  <Switch
    checked={enabled}
    onChange={setEnabled}
    className={`${enabled ? "bg-[#8557FF]" : "bg-gray-300"} relative inline-flex h-5 w-10 items-center rounded-full transition`}
  >
    <span
      className={`${enabled ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </Switch>
);

const Section = ({ title, children }) => (
  <div className="border rounded-2xl p-6 space-y-4 bg-white">
    <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
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

const Select = ({ label, options, value, onChange }) => (
  <label className="block text-xs font-medium text-gray-700 space-y-1">
    {label}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mt-0.5 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#8557FF] focus:outline-none"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </label>
);

/* ----------------- Page ----------------- */
export default function SettingsPage() {
  /* Bot Configuration State */
  const [botName, setBotName] = useState("Chatflow Assistant");
  const [welcome, setWelcome] = useState("Hi! I’m here to help you with your orders and questions. How can I assist you today?");
  const [lang, setLang] = useState("English");
  const [autoResp, setAutoResp] = useState(true);
  const [smartSug, setSmartSug] = useState(true);
  const [learning, setLearning] = useState(false);

  /* Notifications */
  const notifTogglesInit = {
    newMsg: true,
    orderUpdate: false,
    botTransfer: true,
    emailNotif: false,
  };
  const [notif, setNotif] = useState(notifTogglesInit);
  const [notifEmail, setNotifEmail] = useState("alerts@company.com");

  /* AI & Automation */
  const [autoTranslate, setAutoTranslate] = useState(true);
  const [sentiment, setSentiment] = useState(true);
  const [autoTagging, setAutoTagging] = useState(true);
  const [confidence, setConfidence] = useState("Medium (70%)");
  const [responseTime, setResponseTime] = useState("Instant");

  /* Channels */
  const [channels, setChannels] = useState([
    { id: 1, name: "WhatsApp Business", status: "Active" },
    { id: 2, name: "Instagram Direct", status: "Pending" },
    { id: 3, name: "Facebook Messenger", status: "Active" },
  ]);
  const [hours, setHours] = useState({ start: "09:00 AM", end: "06:00 PM" });

  /* Team */
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", role: "Support Agent" },
    { id: 2, name: "Jane Smith", role: "Support Agent" },
  ]);
  const [autoAssign, setAutoAssign] = useState("Round Robin");

  const saveAll = () => {
    // mock save – replace with API call
    alert("Settings saved ✔️");
  };

  return (
    <Layout>
      <div className="p-6 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <p className="text-sm text-gray-500 -mt-2">Configure your chatbot and system preferences</p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bot Config */}
            <Section title="Bot Configuration">
              <Input label="Bot Name" value={botName} onChange={(e) => setBotName(e.target.value)} />
              <Input label="Welcome Message" value={welcome} onChange={(e) => setWelcome(e.target.value)} />
              <Select label="Response Language" options={["English", "Türkçe", "Deutsch"]} value={lang} onChange={setLang} />

              {[
                { label: "Auto‑Response", val: autoResp, setter: setAutoResp },
                { label: "Smart Suggestions", val: smartSug, setter: setSmartSug },
                { label: "Learning Mode", val: learning, setter: setLearning },
              ].map((t) => (
                <div key={t.label} className="flex items-center justify-between text-sm">
                  <span>{t.label}</span>
                  <Toggle enabled={t.val} setEnabled={t.setter} />
                </div>
              ))}
            </Section>

            {/* Notifications */}
            <Section title="Notifications">
              {[
                { key: "newMsg", label: "New Messages" },
                { key: "orderUpdate", label: "Order Updates" },
                { key: "botTransfer", label: "Bot Transfer Alert" },
                { key: "emailNotif", label: "Email Notifications" },
              ].map((n) => (
                <div key={n.key} className="flex items-center justify-between text-sm">
                  <span>{n.label}</span>
                  <Toggle
                    enabled={notif[n.key]}
                    setEnabled={(val) => setNotif((prev) => ({ ...prev, [n.key]: val }))}
                  />
                </div>
              ))}
              <Input label="Notification Email" value={notifEmail} onChange={(e) => setNotifEmail(e.target.value)} />
            </Section>

            {/* AI & Automation */}
            <Section title="AI & Automation Settings">
              <div className="flex items-center justify-between text-sm">
                <span>Auto‑Translate</span>
                <Toggle enabled={autoTranslate} setEnabled={setAutoTranslate} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Sentiment Analysis</span>
                <Toggle enabled={sentiment} setEnabled={setSentiment} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Auto‑Tagging</span>
                <Toggle enabled={autoTagging} setEnabled={setAutoTagging} />
              </div>
              <Select
                label="Response Confidence Threshold"
                options={["Low (50%)", "Medium (70%)", "High (90%)"]}
                value={confidence}
                onChange={setConfidence}
              />
              <Select
                label="Max Bot Response Time"
                options={["Instant", "Within 1 min", "Within 5 min"]}
                value={responseTime}
                onChange={setResponseTime}
              />
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Channel Settings */}
            <Section title="Channel Settings">
              <div className="space-y-2">
                {channels.map((c) => (
                  <div
                    key={c.id}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg border ${
                      c.status === "Active" ? "bg-[#f6edff]" : "bg-gray-50"
                    }`}
                  >
                    <span>{c.name}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        c.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-[#8557FF] text-white rounded-lg text-sm">
                <FaPlus /> Add New Channel
              </button>
              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <Input label="Start Time" value={hours.start} onChange={(e) => setHours({ ...hours, start: e.target.value })} />
                <Input label="End Time" value={hours.end} onChange={(e) => setHours({ ...hours, end: e.target.value })} />
              </div>
            </Section>

            {/* Team Management */}
            <Section title="Team Management">
              <div className="space-y-2">
                {members.map((m) => (
                  <div key={m.id} className="flex items-center justify-between px-4 py-2 border rounded-lg bg-gray-50">
                    <div>
                      <p className="text-sm font-semibold">{m.name}</p>
                      <p className="text-xs text-gray-600">{m.role}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2 mt-3 border rounded-lg bg-white text-sm hover:bg-gray-50">
                <FaUserPlus /> Invite Team Member
              </button>
              <Select
                label="Auto Assignment"
                options={["Round Robin", "Least Busy", "First Available"]}
                value={autoAssign}
                onChange={setAutoAssign}
              />
            </Section>
          </div>
        </div>

        <div className="text-right">
          <button onClick={saveAll} className="px-6 py-2 bg-[#8557FF] hover:bg-[#7749ff] text-white rounded-full font-medium">
            Save All Settings
          </button>
        </div>
      </div>
    </Layout>
  );
}
