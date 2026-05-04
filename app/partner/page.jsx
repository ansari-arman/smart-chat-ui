import Link from "next/link";

const STRIP_ITEMS = [
  {
    label: "Commission",
    value: "Up to 30% recurring",
    icon: (
      <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    label: "Active partners",
    value: "500+ worldwide",
    icon: (
      <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    label: "Avg monthly earning",
    value: "$2,400 / partner",
    icon: (
      <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
];

const PARTNER_TYPES = [
  {
    badge: "Referral",
    badgeStyle: "bg-green-50 text-green-700 border border-green-200",
    title: "Referral partner",
    desc: "Refer clients and earn a recurring commission every month they stay on Smart-Chat.",
    earn: "Up to 20% monthly",
    icon: (
      <svg className="w-4 h-4 fill-green-600" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    badge: "Reseller",
    badgeStyle: "bg-blue-50 text-blue-700 border border-blue-200",
    title: "Reseller partner",
    desc: "Resell Smart-Chat under your own brand. Full white-label support with your logo and domain.",
    earn: "Up to 30% monthly",
    icon: (
      <svg className="w-4 h-4 fill-green-600" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
  {
    badge: "Agency",
    badgeStyle: "bg-purple-50 text-purple-700 border border-purple-200",
    title: "Agency partner",
    desc: "Manage multiple client accounts, get dedicated support, and earn the highest commission tier.",
    earn: "Custom commission",
    icon: (
      <svg className="w-4 h-4 fill-green-600" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    num: "01",
    title: "Dedicated partner manager",
    desc: "A real person who helps you close deals and answer client questions.",
  },
  {
    num: "02",
    title: "Marketing materials",
    desc: "Ready-made sales decks, one-pagers, and email templates.",
  },
  {
    num: "03",
    title: "Partner dashboard",
    desc: "Track referrals, earnings, and commission payouts in real time.",
  },
  {
    num: "04",
    title: "Priority support",
    desc: "Your clients get fast-tracked onboarding and dedicated support.",
  },
];

const EARN_CARDS = [
  {
    value: "$2,400",
    label: "Average monthly partner earnings",
    desc: "Based on partners with 10–15 active referrals at $200/mo plan",
  },
  {
    value: "30%",
    label: "Max recurring commission rate",
    desc: "Earned on every payment, for the lifetime of the client account",
  },
  {
    value: "Monthly",
    label: "Commission payout schedule",
    desc: "Direct deposit on the 1st of each month. No minimum threshold.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Apply online",
    desc: "Fill out the partner application. Takes under 5 minutes.",
  },
  {
    num: "02",
    title: "Get approved",
    desc: "We review and approve applications within 24 hours.",
  },
  {
    num: "03",
    title: "Start referring",
    desc: "Get your unique link and start referring businesses today.",
  },
  {
    num: "04",
    title: "Earn monthly",
    desc: "Get paid recurring commissions every month, automatically.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Partner Program
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-3">
          Grow your business<br />
          with <span className="text-green-400">Smart-Chat</span>
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          Join our partner ecosystem and earn recurring commissions by referring clients to the platform that&apos;s changing how businesses handle calls.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/request-demo"
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Become a partner →
          </Link>
          <a
            href="#benefits"
            className="px-6 py-2.5 border border-white/20 text-green-600 text-sm rounded-lg hover:border-white/40 transition-colors bg-white"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-green-600 border-b border-white/10 grid grid-cols-1 md:grid-cols-3">
        {STRIP_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-white/90 last:border-none"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-green-500/20 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] text-black mb-0.5">{item.label}</p>
              <p className="text-xs text-white/90 font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Partner Types ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">Partner types</p>
        <h2 className="text-2xl font-medium text-black text-center mb-8">
          Choose how you want to <span className="text-green-600">partner with us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PARTNER_TYPES.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-green-500 hover:bg-green-100/80 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <span className={`inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-3 ${p.badgeStyle}`}>
                {p.badge}
              </span>
              <p className="text-sm font-medium text-black mb-2">{p.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">{p.desc}</p>
              <p className="text-sm font-medium text-green-600">{p.earn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits + Earnings ── */}
      <section id="benefits" className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — dark */}
        <div className="bg-white border ml-5 mb-5 rounded-2xl border-green-400 px-8 py-12 hover:bg-green-100/80">
          <h2 className="text-xl font-medium text-black leading-snug mb-3">
            Everything you need<br />
            to <span className="text-green-400">succeed</span>
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-8">
            We set you up with everything needed to start earning — no technical knowledge required.
          </p>
          <div className="flex flex-col gap-5">
            {BENEFITS.map((b) => (
              <div key={b.num} className="flex gap-4 items-start">
                <span className="text-xl font-medium text-green-400 leading-none flex-shrink-0 w-6">
                  {b.num}
                </span>
                <div>
                  <p className="text-xs font-medium text-black mb-1">{b.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — earnings cards */}
        <div className="bg-gray-50 border-l border-gray-100 px-8 py-12 flex flex-col gap-4 justify-center">
          {EARN_CARDS.map((e) => (
            <div
              key={e.label}
              className="bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-green-500 hover:bg-green-100/80 transition-colors"
            >
              <p className="text-2xl font-medium text-green-600 mb-1">{e.value}</p>
              <p className="text-xs text-gray-500 mb-2">{e.label}</p>
              <p className="text-[10px] text-gray-400 leading-relaxed border-t border-gray-100 pt-2">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to get started ── */}
      <section className="bg-gray-50 border-t border-gray-100 px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">Process</p>
        <h2 className="text-2xl font-medium text-black text-center mb-8">
          How to get started
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="bg-white border border-gray-100 rounded-xl p-5 hover:border-green-500 hover:bg-green-100/80 transition-colors"
            >
              <p className="text-2xl font-medium text-green-600 mb-3">{s.num}</p>
              <p className="text-sm font-medium text-black mb-1.5">{s.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-2">What partners say</p>
        <h2 className="text-2xl font-medium text-black text-center mb-8">
          Real results from real partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              quote: "I referred 8 clients in my first month and now earn a consistent $1,600 every month on autopilot. Best side income I've ever had.",
              name: "Marcus T.",
              role: "Digital Marketing Agency",
              initials: "MT",
            },
            {
              quote: "The partner dashboard is clean, commissions are paid on time, and the team actually helps you close. This is a real partnership.",
              name: "Sandra K.",
              role: "Business Consultant",
              initials: "SK",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-black border border-gray-100 rounded-xl p-6 hover:border-green-200 transition-colors"
            >
              <p className="text-xs text-white/90 leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-medium text-black">{t.name}</p>
                  <p className="text-[10px] text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-green-600 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-white">Ready to start earning?</h3>
          <p className="text-xs text-green-100 mt-1">Join 500+ partners already growing with Smart-Chat.</p>
        </div>
        <Link
          href="/request-demo"
          className="flex-shrink-0 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors"
        >
          Apply now →
        </Link>
      </section>

    </main>
  );
}
