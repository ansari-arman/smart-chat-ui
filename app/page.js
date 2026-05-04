import ChatWidget from "@/components/chatWidget";


const FEATURES = [
  {
    title: "Instant AI responses",
    desc: "Replies to customers in under 1 second, 24 hours a day.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    title: "Appointment booking",
    desc: "Automatically books and reschedules jobs in your calendar.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    title: "Full call transcripts",
    desc: "Every conversation logged with summary and key data points.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    title: "Smart notifications",
    desc: "Alerts the right person at the right time — even at 3 AM.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
  },
  {
    title: "CRM integrations",
    desc: "Syncs with your existing tools, dispatch board and calendar.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    title: "Advanced analytics",
    desc: "Turn every conversation into powerful business insights.",
    icon: (
      <svg className="w-5 h-5 fill-green-600" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
];

const STATS = [
  { num: "24/7", label: "Always available" },
  { num: "35%", label: "Missed calls recovered" },
  { num: "2 days", label: "Setup time" },
];

const TESTIMONIALS = [
  {
    name: "Anna Miller",
    role: "Plumbing Company Owner",
    text: "Having an AI CSR for our plumbing company has been a game changer. Smart-Chat handles every call we miss.",
  },
  {
    name: "Brendan S.",
    role: "HVAC Business",
    text: "Their technology is advanced and nearly indecipherable as a machine vs human. Leading the charge in AI.",
  },
  {
    name: "Colton Collins",
    role: "Marketing Agency",
    text: "We have never seen anything like it. Well worth exploring if you're looking to scale your business!",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Call answered",
    desc: "Smart-Chat answers your missed calls and speaks to customers just like your team would.",
  },
  {
    step: "02",
    title: "Integrate your systems",
    desc: "We run advanced workflows — create jobs, customer records, follow-up tasks, and more.",
  },
  {
    step: "03",
    title: "Notifications",
    desc: "Smart-Chat parses key elements out of each call and notifies the right person instantly.",
  },
  {
    step: "04",
    title: "Call logging",
    desc: "Every call comes with a transcript, recording, key data points, and who was notified.",
  },
];

const FAQS = [
  {
    q: "What is Smart-Chat?",
    a: "Smart-Chat is an AI voice assistant platform that helps service-based businesses answer phone calls, book appointments, and capture leads — 24/7.",
  },
  {
    q: "How does the AI assistant work?",
    a: "Our AI handles a call just as a human would. It understands customer intent, responds naturally in real time, books jobs, and routes calls when needed.",
  },
  {
    q: "Can the AI integrate with my existing systems?",
    a: "Yes. Smart-Chat integrates with your CRM, booking calendar, dispatch board, and other operations to keep everything running smoothly.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are up and running within 1–2 days. Our team handles onboarding and trains the AI to sound like your brand.",
  },
];

export default function Home() {
  return (<main className="bg-gray-200">

      {/* ── Hero ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          AI-powered 24/7 answering service
        </div>

        <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-4">
          Never miss a call,<br />
          never lose a{" "}
          <span className="text-green-600">customer</span>
        </h1>

        <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
          Smart-Chat handles your customer queries, books appointments, and captures leads — day and night, without a single missed opportunity.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <a
            href="/request-demo"
            className="px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            See a live demo →
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-2.5 border border-green-600 text-green-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors bg-white"
          >
            Watch how it works
          </a>
        </div>

        <p className="text-xs text-gray-400">
          <span className="text-green-500">★★★★★</span>&nbsp; Trusted by 3,000+ businesses
        </p>
      </section>

      {/* ── Chat Preview ── */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <ChatWidget />
      </section>

      {/* ── Stats ── */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-black rounded-xl p-5 text-center">
              <p className="text-2xl font-medium text-green-400">{s.num}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">Process</p>
        <h2 className="text-2xl font-medium text-black text-center mb-10">
          Here&apos;s what happens behind the scenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              className="flex gap-4 p-5 border border-green-100 rounded-xl bg-white hover:border-green-300 hover:bg-green-100 transition-colors"
            >
              <span className="text-2xl font-medium text-green-400 leading-none">{item.step}</span>
              <div>
                <p className="text-sm font-medium text-black mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">Features</p>
        <h2 className="text-2xl font-medium text-black text-center mb-10">
          Why businesses choose Smart-Chat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-5 border border-green-100 rounded-xl bg-white hover:border-green-300 hover:bg-green-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <p className="text-sm font-medium text-black mb-1">{f.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-green-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">Reviews</p>
          <h2 className="text-2xl font-medium text-black text-center mb-10">
            What our clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-green-100 rounded-xl p-5 hover:bg-green-100 hover:border-green-400">
                <p className="text-xs text-gray-500 leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-medium">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black">{t.name}</p>
                    <p className="text-[11px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-2xl mx-auto px-6 py-12 mt-10 bg-white rounded-2xl">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">FAQ</p>
        <h2 className="text-2xl font-medium text-black text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="border border-green-300 rounded-xl p-5 hover:bg-green-100">
              <p className="text-sm font-medium text-black mb-2">{faq.q}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-black rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl font-medium text-white mb-3">
            Interested in a demo?
          </h2>
          <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
            Give us your email and one of our experts will walk you through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/90 border border-white/20 text-white placeholder-gray-400 text-sm outline-none focus:border-green-400"
            />
            <a
              href="/request-demo"
              className="px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Request demo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
