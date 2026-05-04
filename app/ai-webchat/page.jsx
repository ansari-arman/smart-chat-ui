import Link from "next/link";

const PROBLEMS = [
  {
    title: "Visitors leave without contacting",
    desc: "AI greets every visitor instantly and starts a conversation before they bounce.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    title: "No agent available 24/7",
    desc: "Smart-Chat never sleeps — it handles chats at midnight just like during business hours.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Untracked leads",
    desc: "Every chat session is logged with visitor info, intent, and follow-up actions needed.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
];

const FEATURES = [
  "Instant AI replies — under 1 second",
  "Captures name, email & intent automatically",
  "Books appointments from within the chat",
  "Full chat history stored in your dashboard",
];

const STATS = [
  { value: "<1s",  label: "AI response time" },
  { value: "3x",   label: "More leads vs contact forms" },
  { value: "24/7", label: "Always online, never misses a chat" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Paste one script tag",
    desc: "Copy the embed code from your dashboard and add it to your website's HTML. Works on any platform.",
    color: "text-green-400",
  },
  {
    step: "02",
    title: "AI learns your business",
    desc: "We train Smart-Chat on your FAQs, services, pricing and tone — so it sounds like you.",
    color: "text-blue-400",
  },
  {
    step: "03",
    title: "Widget goes live",
    desc: "The chat bubble appears on your site. Visitors click it and Smart-Chat handles the rest.",
    color: "text-purple-400",
  },
  {
    step: "04",
    title: "Review leads in dashboard",
    desc: "Every conversation is logged. View transcripts, captured contacts, and booked appointments.",
    color: "text-yellow-400",
  },
];

export default function AIWebchatPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-black py-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          AI Webchat
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-3">
          Chat with every visitor<br />
          <span className="text-green-400">automatically</span>
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          Smart-Chat&apos;s webchat widget sits on your site and instantly engages visitors — answering questions, capturing leads and booking appointments.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/request-demo"
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get a demo →
          </Link>
          <a
            href="#how-it-works"
            className="px-6 py-2.5 border border-white/20 text-green-600 text-sm rounded-lg hover:border-white/40 transition-colors bg-white"
          >
            See live demo
          </a>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="bg-white border border-gray-100 rounded-xl p-5 hover:border-green-400 hover:bg-green-100 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
              {p.icon}
            </div>
            <p className="text-sm font-medium text-black mb-1.5">{p.title}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* ── How it Works ── */}
      <section id="how-it-works" className="bg-black py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-2">Setup</p>
          <h2 className="text-2xl font-medium text-white text-center mb-10">
            Live in <span className="text-green-400">4 simple steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-xl hover:border-green-500/20 hover:bg-white/90 transition-colors"
              >
                <span className={`text-2xl font-medium leading-none flex-shrink-0 ${item.color}`}>
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features + Stats ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <div className="bg-white px-8 py-12 border-green-100 m-10 border rounded-2xl hover:bg-green-100 hover:border-green-400">
          <h2 className="text-xl font-medium text-black leading-snug mb-3">
            One widget,<br />
            <span className="text-green-600">infinite conversations</span>
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed mb-8">
            Drop one script tag on your website and Smart-Chat handles the rest — no coding required after setup.
          </p>
          <div className="flex flex-col gap-4">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 fill-green-600" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>

          {/* Code snippet preview */}
          <div className="mt-8 bg-gray-950 rounded-xl p-4 border border-gray-800">
            <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-widest">Embed code</p>
            <code className="text-xs text-green-400 leading-relaxed break-all">
              {`<script src="https://cdn.smartchat.co/widget.js" data-id="YOUR_ID"></script>`}
            </code>
          </div>
        </div>

        {/* Right — stats */}
        <div className="bg-gray-50 px-8 py-12 flex flex-col gap-4 justify-center">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-green-400 hover:bg-green-100 transition-colors"
            >
              <p className="text-2xl font-medium text-green-600 mb-1">{s.value}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}

          {/* Testimonial */}
          <div className="bg-black rounded-xl p-5 mt-2">
            <p className="text-xs text-gray-400 leading-relaxed italic mb-3">
              &ldquo;We went from 3 contact form submissions a week to 20+ chat leads a day. Incredible.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
                BS
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium">Brendan S.</p>
                <p className="text-[10px] text-gray-600">HVAC Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-green-600 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-white">Turn your website into a lead machine</h3>
          <p className="text-xs text-green-100 mt-1">One script tag. Live in minutes.</p>
        </div>
        <Link
          href="/request-demo"
          className="flex-shrink-0 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors"
        >
          Book a free demo
        </Link>
      </section>

    </main>
  );
}
