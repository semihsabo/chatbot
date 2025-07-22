// components/admin/GeneralTab.js
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FaRobot } from 'react-icons/fa';

/* === Reusable UI Components === */
function Toggle({ val, set }) {
  return (
    <Switch
      checked={val}
      onChange={set}
      className={`${
        val ? 'bg-[#8557FF]' : 'bg-gray-300'
      } inline-flex h-5 w-10 rounded-full items-center transition`}
    >
      <span
        className={`${
          val ? 'translate-x-5' : 'translate-x-1'
        } inline-block h-4 w-4 bg-white rounded-full transition`}
      />
    </Switch>
  );
}

function Section({ title, children }) {
  return (
    <div className="border border-emerald-200 rounded-xl p-4 sm:p-6 space-y-4 bg-white">
      <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        <FaRobot className="text-[#6ee7b7]" />
        {title}
      </h4>
      {children}
    </div>
  );
}

const baseField =
  'w-full px-3 py-2 border rounded-lg text-sm bg-[#f6edff] border-[#d6caff] focus:ring-2 focus:ring-[#8557FF] focus:outline-none';

function Input({ label, as: Comp = 'input', children, ...props }) {
  return (
    <label className="block text-xs font-medium text-gray-700 space-y-1">
      {label}
      <Comp {...props} className={`${baseField} mt-0.5`}>
        {children}
      </Comp>
    </label>
  );
}

/* === GeneralTab Component === */
export default function GeneralTab() {
  const langs = ['English', 'Türkçe', 'Deutsch', 'Español', 'Français', 'العربية'];

  const [botEnabled, setBotEnabled] = useState(true);
  const [primaryLang, setPrimaryLang] = useState('English');
  const [supported, setSupported] = useState(['English', 'Türkçe', 'Español']);
  const [welcome, setWelcome] = useState(
    'Hi! I am here to help you with your questions. How can I assist you today?'
  );
  const [fallback, setFallback] = useState(
    'I’m sorry, I didn’t understand that. Could you please rephrase your question?'
  );

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* 1. Bot Durumu */}
      <Section title="Bot Status & Control">
        <div className="flex items-center justify-between text-sm">
          <span>Enable Bot</span>
          <Toggle val={botEnabled} set={setBotEnabled} />
        </div>
      </Section>

      {/* 2. Çalışma Saatleri */}
      <Section title="Working Hours">
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Input label="Start Time" type="time" />
          <Input label="End Time" type="time" />
        </div>
      </Section>

      {/* 3. Dil Ayarları */}
      <Section title="Language Configuration">
        <Input
          label="Primary Language"
          as="select"
          value={primaryLang}
          onChange={(e) => setPrimaryLang(e.target.value)}
        >
          {langs.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </Input>

        <label className="block text-xs font-medium mt-3 mb-1">Supported Languages</label>
        <div className="flex flex-wrap gap-2">
          {langs.map((lang) => {
            const isActive = supported.includes(lang);
            return (
              <button
                key={lang}
                onClick={() =>
                  setSupported((prev) =>
                    isActive ? prev.filter((x) => x !== lang) : [...prev, lang]
                  )
                }
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  isActive
                    ? 'bg-[#f6edff] border-[#8557FF] text-[#8557FF]'
                    : 'bg-gray-50 hover:bg-[#f6edff]'
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </Section>

      {/* 4. Varsayılan Mesajlar */}
      <Section title="Default Messages">
        <Input
          label="Welcome Message"
          as="textarea"
          rows={3}
          value={welcome}
          onChange={(e) => setWelcome(e.target.value)}
        />
        <Input
          label="Fallback Message"
          as="textarea"
          rows={3}
          value={fallback}
          onChange={(e) => setFallback(e.target.value)}
        />
      </Section>

      {/* 5. Mesaj Önizleme */}
      <Section title="Message Preview">
        <div className="space-y-2 text-xs">
          {[welcome, fallback].map((m, i) => (
            <div key={i} className="border border-[#8557FF] rounded-lg p-2 truncate bg-[#faf5ff]">
              {m}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
