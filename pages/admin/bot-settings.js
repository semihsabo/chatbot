// pages/admin/bot-settings.js
import React, { useState } from "react";
import Layout from "../../components/admin/Layout";
import { Tab, Switch } from "@headlessui/react";
import {
  FaPlus,
  FaRegPaperPlane,
  FaRobot,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

/* — Helpers — */
function Toggle({ val, set }) {
  return (
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
}

function Section({ title, children }) {
  return (
    <div className="border border-emerald-200 rounded-xl p-4 space-y-4 bg-white">
      <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
        <FaRobot className="text-[#6ee7b7]" /> {title}
      </h4>
      {children}
    </div>
  );
}

const baseField =
  "w-full mt-0.5 px-3 py-2 border rounded-lg text-sm " +
  "bg-[#f6edff] border-[#d6caff] focus:ring-2 focus:ring-[#8557FF] focus:outline-none";

function Input({ label, as: Comp = "input", children, className = "", ...props }) {
  return (
    <label className="block text-xs font-medium text-gray-700 space-y-1">
      {label}
      <Comp {...props} className={`${baseField} ${className}`}>
        {children}
      </Comp>
    </label>
  );
}

/* — Page — */
export default function BotSettings() {
  /* Toggles */
  const [testMode, setTestMode] = useState(true);
  const [botEnabled, setBotEnabled] = useState(true);

  /* General */
  const langs = ["English", "Türkçe", "Deutsch", "Español", "Français", "العربية"];
  const [primaryLang, setPrimaryLang] = useState("English");
  const [supported, setSupported] = useState(["English", "Türkçe", "Español"]);
  const [welcome, setWelcome] = useState("Hi! I am here to help you. How can I assist you today?");
  const [fallback, setFallback] = useState("Sorry, I didn’t catch that. Could you rephrase?");

  /* Channels */
  const channelMeta = [
    { key: "whatsapp", name: "WhatsApp Business", desc: "WhatsApp Business API", features: ["Rich‑media support","Interactive buttons","Quick replies","Location sharing"], color: "bg-[#f6edff]" },
    { key: "instagram", name: "Instagram Direct", desc: "Instagram Direct Messages", features: ["Rich‑media support","Quick replies"], color: "bg-[#fff6f6]" },
    { key: "facebook", name: "Facebook Messenger", desc: "Facebook Messenger", features: ["Rich‑media support","Quick replies"], color: "bg-[#f6faff]" },
  ];
  const [activeChannels, setActiveChannels] = useState({ whatsapp: true, instagram: true, facebook: false });
  const [selectedChannel, setSelectedChannel] = useState("whatsapp");
  const defaultData = {
    whatsapp: {
      welcome, fallback,
      keywords: ["order","tracking","refund"],
      rules: [
        { id:1, trigger:"check order", reply:"I can help you track your order status.", active:true },
        { id:2, trigger:"return", reply:"I'll help you with returns. What would you like to return?", active:true },
      ],
    },
    instagram: { welcome:"👋 Hi IG fam! How can I assist today?", fallback:"Oops, didn't catch that. Try rephrasing?", keywords:["order","dm","help"], rules:[] },
    facebook: { welcome:"Welcome to our Facebook support desk!", fallback:"Sorry, didn't get that. Could you say it differently?", keywords:["order","support"], rules:[] },
  };
  const [channelData, setChannelData] = useState(defaultData);
  const updateChannelField = (field, val) =>
    setChannelData(prev => ({ ...prev, [selectedChannel]: { ...prev[selectedChannel], [field]: val } }));

  /* A.I & NLP */
  const [aiEnabled, setAiEnabled] = useState(true);
  const nlpModels = ["GPT-3.5", "GPT-4", "Custom"];
  const [selectedModel, setSelectedModel] = useState("GPT-4");
  const [confidence, setConfidence] = useState(0.75);

  /* Flows */
  const [nodesCount] = useState(3);
  const [connsCount] = useState(2);

  /* Advanced */
  const [responseTiming, setResponseTiming] = useState("natural");
  const [productFlow, setProductFlow] = useState(true);
  const [orderFlow, setOrderFlow] = useState(true);
  const [paymentFlow, setPaymentFlow] = useState(true);
  const [trackingFlow, setTrackingFlow] = useState(false);
  const activeFlows = [productFlow,orderFlow,paymentFlow,trackingFlow].filter(Boolean).length;

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Bot Customization{" "}
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Beta</span>
          </h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border rounded-lg">Live Test</button>
            <button className="px-4 py-2 text-sm bg-[#8557FF] text-white rounded-lg">Publish</button>
          </div>
        </div>

        {/* Test Mode */}
        <div className="bg-[#f6edff] border border-[#dcd4ff] rounded-lg p-3 flex justify-between items-center text-sm">
          <span className="font-medium">Test Mode {testMode ? "Active" : "Inactive"}</span>
          <Toggle val={testMode} set={setTestMode} />
        </div>

        {/* Tabs */}
        <Tab.Group>
          <Tab.List className="flex flex-wrap gap-2 border-b text-sm font-medium">
            {["General","Channels","A.I & NLP","Flows","Advanced","Test"].map(tab=>(
              <Tab
                key={tab}
                className={({ selected }) =>
                  `${selected?"text-[#8557FF] border-b-2 border-[#8557FF]":"text-gray-600"} px-3 py-2 outline-none`
                }
              >{tab}</Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6 space-y-6">
            {/* General */}
            <Tab.Panel className="space-y-6">
              <Section title="Bot Status & Control">
                <div className="flex items-center justify-between text-sm">
                  <span>Enable Bot</span>
                  <Toggle val={botEnabled} set={setBotEnabled} />
                </div>
              </Section>
              <Section title="Working Hours">
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <Input label="Start" type="time" />
                  <Input label="End" type="time" />
                </div>
              </Section>
              <Section title="Language Configuration">
                <Input label="Primary Language" as="select" value={primaryLang} onChange={e=>setPrimaryLang(e.target.value)}>
                  {langs.map(l=> <option key={l}>{l}</option>)}
                </Input>
                <label className="block text-xs font-medium mt-3 mb-1">Supported Languages</label>
                <div className="flex flex-wrap gap-2">
                  {langs.map(l=>(
                    <button
                      key={l}
                      onClick={()=>setSupported(s=> s.includes(l)? s.filter(x=>x!==l): [...s,l])}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        supported.includes(l)
                          ?"bg-[#f6edff] border-[#8557FF] text-[#8557FF]"
                          :"bg-gray-50 hover:bg-[#f6edff]"
                      }`}
                    >{l}</button>
                  ))}
                </div>
              </Section>
              <Section title="Default Messages">
                <Input label="Welcome Message" as="textarea" rows={3} value={welcome} onChange={e=>setWelcome(e.target.value)}/>
                <Input label="Fallback Message" as="textarea" rows={3} value={fallback} onChange={e=>setFallback(e.target.value)}/>
              </Section>
              <Section title="Message Preview">
                <div className="space-y-2 text-xs">
                  {[welcome,fallback].map((m,i)=>
                    <div key={i} className="border border-[#8557FF] rounded-lg p-2 truncate">{m}</div>
                  )}
                </div>
              </Section>
            </Tab.Panel>

            {/* Channels */}
            <Tab.Panel className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-4">
                {channelMeta.map(({key,name,desc,color})=>(
                  <button
                    key={key}
                    onClick={()=>setSelectedChannel(key)}
                    className={`border rounded-lg p-4 space-y-2 text-left relative ${color} ${
                      selectedChannel===key?"ring-2 ring-[#8557FF]":""
                    }`}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-sm">{name}</h4>
                      <Toggle val={activeChannels[key]} set={v=>setActiveChannels(p=>({...p,[key]:v}))}/>
                    </div>
                    <p className="text-xs text-gray-600">{desc}</p>
                    {activeChannels[key]&&<FaCheckCircle className="absolute top-2 right-2 text-green-500" />}
                  </button>
                ))}
              </div>
              <Tab.Group>
                <Tab.List className="flex gap-4 mt-4 border-b text-xs font-medium">
                  {["WhatsApp Business","Instagram Direct","Facebook Messenger"].map((label,i)=>{
                    const k=["whatsapp","instagram","facebook"][i];
                    const d=!activeChannels[k];
                    return (
                      <Tab
                        key={k}
                        disabled={d}
                        onClick={()=>setSelectedChannel(k)}
                        className={({selected})=>
                          `${selected?"text-[#8557FF] border-b-2 border-[#8557FF]":"text-gray-600"} ${
                            d?"opacity-40 cursor-not-allowed":""
                          } px-3 py-2 outline-none`
                        }
                      >{label}</Tab>
                    );
                  })}
                </Tab.List>
              </Tab.Group>
              <div className="space-y-6">
                <Section title="Channel Features">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {channelMeta.find(c=>c.key===selectedChannel).features.map(f=>(
                      <span key={f} className="px-2 py-1 bg-gray-100 rounded-full">• {f}</span>
                    ))}
                  </div>
                </Section>
                <Input label="Welcome Message" as="textarea" rows={3} value={channelData[selectedChannel].welcome} onChange={e=>updateChannelField("welcome",e.target.value)}/>
                <Input label="Fallback Message" as="textarea" rows={3} value={channelData[selectedChannel].fallback} onChange={e=>updateChannelField("fallback",e.target.value)}/>
                <Section title="Detection Keywords">
                  <Input placeholder="Add keyword & press Enter" onKeyDown={e=>{
                    if(e.key==="Enter"&&e.target.value.trim()){
                      updateChannelField("keywords",[...channelData[selectedChannel].keywords,e.target.value.trim()]);
                      e.target.value=""; e.preventDefault();
                    }
                  }}/>
                  <div className="flex flex-wrap gap-1 mt-2 text-xs">
                    {channelData[selectedChannel].keywords.map(k=>(
                      <span key={k} className="px-2 py-0.5 bg-[#d6caff] text-[#4a368e] rounded-full">{k}</span>
                    ))}
                  </div>
                </Section>
                <Section title="Auto‑Reply Rules">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Trigger" placeholder="e.g. order status" value={channelData[selectedChannel].newTrigger||""} onChange={e=>updateChannelField("newTrigger",e.target.value)}/>
                    <Input label="Reply" placeholder="I can help you track…" value={channelData[selectedChannel].newReply||""} onChange={e=>updateChannelField("newReply",e.target.value)}/>
                  </div>
                  <button className="mt-2 text-xs bg-[#8557FF] text-white px-3 py-1 rounded" onClick={()=>{
                    const {newTrigger,newReply}=channelData[selectedChannel];
                    if(newTrigger&&newReply){
                      updateChannelField("rules",[...channelData[selectedChannel].rules,{id:Date.now(),trigger:newTrigger,reply:newReply,active:true}]);
                      updateChannelField("newTrigger",""); updateChannelField("newReply","");
                    }
                  }}><FaPlus className="inline mr-1"/>Add Rule</button>
                  <div className="space-y-2 mt-4">
                    {channelData[selectedChannel].rules.map(r=>(
                      <div key={r.id} className="border rounded-lg p-2 flex justify-between items-start text-xs">
                        <div><p className="font-medium">{r.trigger}</p><p className="text-gray-600">{r.reply}</p></div>
                        <div className="flex gap-2">
                          <button className="text-red-500" onClick={()=>updateChannelField("rules",channelData[selectedChannel].rules.filter(x=>x.id!==r.id))}><FaTrash/></button>
                          <Toggle val={r.active} set={v=>updateChannelField("rules",channelData[selectedChannel].rules.map(x=>x.id===r.id?{...x,active:v}:x))}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            </Tab.Panel>

            {/* A.I & NLP */}
            <Tab.Panel className="space-y-6">
              <Section title="A.I & NLP Configuration">
                <div className="flex items-center justify-between text-sm">
                  <span>Enable A.I & NLP</span>
                  <Toggle val={aiEnabled} set={setAiEnabled}/>
                </div>
                <Input label="NLP Model" as="select" value={selectedModel} onChange={e=>setSelectedModel(e.target.value)}>
                  {nlpModels.map(m=><option key={m}>{m}</option>)}
                </Input>
                <Input label="Confidence Threshold" type="number" min="0" max="1" step="0.01" value={confidence} onChange={e=>setConfidence(parseFloat(e.target.value))}/>
                <p className="text-xs text-gray-500">Minimum intent confidence level.</p>
              </Section>
            </Tab.Panel>

            {/* Flows */}
            <Tab.Panel className="space-y-6">
              <Section title="Visual Flow Editor">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
                  <input className="border rounded-lg px-3 py-2 text-sm flex-1" placeholder="Flow Name" defaultValue="Customer Support Flow"/>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>{nodesCount} nodes</span>
                    <span>{connsCount} connections</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs border rounded">Duplicate</button>
                    <button className="px-3 py-1 text-xs bg-[#8557FF] text-white rounded">Save Flow</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 bg-white space-y-2 text-xs">
                    <button className="block w-full text-left">+ Message</button>
                    <button className="block w-full text-left">+ Condition</button>
                    <button className="block w-full text-left">+ Action</button>
                    <button className="block w-full text-left">+ User Input</button>
                  </div>
                  <div className="border rounded-lg h-64 bg-white flex items-center justify-center text-gray-400">Flow Canvas</div>
                  <div className="border rounded-lg p-4 bg-white text-xs">
                    <div className="font-medium">Properties</div>
                    <p className="text-gray-400 mt-4">No node selected</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-1 border rounded text-sm">Test Flow</button>
                  <button className="px-4 py-1 border rounded text-sm">Export Flow</button>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2">Connect nodes by clicking the connection points</p>
              </Section>
            </Tab.Panel>

            {/* Advanced */}
            <Tab.Panel className="space-y-6">
              <Section title="Advanced Bot Configuration">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 bg-white text-center">
                    <div className="text-xs text-gray-600">Response Timing</div>
                    <div className="text-2xl font-bold">{responseTiming==="instant"? "0s": responseTiming==="natural"? "2s": "5s"}</div>
                    <div className="text-xs text-gray-500 capitalize">{responseTiming} typing speed</div>
                  </div>
                  <div className="border rounded-lg p-4 bg-white text-center">
                    <div className="text-xs text-gray-600">Active Flows</div>
                    <div className="text-2xl font-bold">{activeFlows}</div>
                    <div className="text-xs text-gray-500">out of 4</div>
                  </div>
                </div>
              </Section>
              <Section title="Response Timing">
                <div className="border rounded-lg p-4 bg-white space-y-4 text-xs">
                  <div className="font-medium">Typing Delay Simulation</div>
                  <div className="text-gray-500">Current delay: {responseTiming==="instant"? "Instant (0s)": responseTiming==="natural"? "Natural (2s)": "Slow (5s)"}</div>
                  <div className="grid grid-cols-3 gap-2">
                    {["instant","natural","slow"].map(opt=>(
                      <button key={opt} onClick={()=>setResponseTiming(opt)} className={`px-2 py-1 text-xs rounded ${responseTiming===opt? "bg-[#8557FF] text-white":"bg-gray-100"}`}>{
                        opt.charAt(0).toUpperCase()+opt.slice(1)} ({opt==="instant"?"0s":opt==="natural"?"2s":"5s"})
                      </button>
                    ))}
                  </div>
                </div>
              </Section>
              <Section title="Business Flow Controls">
                {[
                  ["Product Suggestion Flow", productFlow, setProductFlow],
                  ["Order Creation Flow", orderFlow, setOrderFlow],
                  ["Payment Link Flow", paymentFlow, setPaymentFlow],
                  ["Order Tracking Flow", trackingFlow, setTrackingFlow],
                ].map(([label,val,setVal])=>(
                  <div key={label} className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-medium">{label}</div>
                      <div className="text-xs text-gray-500">Enable flow</div>
                    </div>
                    <Toggle val={val} set={setVal}/>
                  </div>
                ))}
              </Section>
              <Section title="Flow Dependencies & Recommendations">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-medium">E‑commerce Flow</div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Product Suggestion</li>
                      <li>Order Creation</li>
                      <li>Payment Processing</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium">Support Flow</div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Order Tracking</li>
                      <li>Return Processing</li>
                      <li>Status Notifications</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Recommendation: Enable Product Suggestion → Order Creation → Payment Link to build a complete funnel.
                </p>
              </Section>
            </Tab.Panel>

            {/* Test */}
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
