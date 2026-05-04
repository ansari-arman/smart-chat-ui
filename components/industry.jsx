import Link from "next/link";

export default function IndustryPage({
  badge,
  headline,
  headlineHighlight,
  description,
  problems,
  featureHeading,
  featureHeadingHighlight,
  featureSubtext,
  features,
  stats,
  ctaHeading,
  ctaSubtext,
}) {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-black py-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          {badge}
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-3">
          {headline}<br />
          <span className="text-green-400">{headlineHighlight}</span>
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          {description}
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
            className="px-6 py-2.5 border border-gray-100 text-green-500 text-sm rounded-lg hover:border-white/40 bg-white"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-white border border-gray-100 rounded-xl p-5 hover:border-green-300 hover:bg-green-50/30 transition-colors hover:bg-green-100 hover:border-green-400"
          >
            <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
              {p.icon}
            </div>
            <p className="text-sm font-medium text-black mb-1.5">{p.title}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* ── Features + Stats ── */}
      <section id="how-it-works" className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — dark */}
        <div className="bg-white ml-5 border mb-5 rounded-2xl border-gray-100 hover:border-green-300 px-8 py-12 hover:bg-green-100 hover:border-green-400">
          <h2 className="text-xl font-medium text-black leading-snug mb-3">
            {featureHeading}<br />
            <span className="text-green-400">{featureHeadingHighlight}</span>
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-8">{featureSubtext}</p>

          <div className="flex flex-col gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 fill-green-400" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stats */}
        <div className="bg-gray-50 border-l border-gray-100 px-8 py-12 flex flex-col gap-4 justify-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-xl px-5 py-4 hover:bg-green-100 hover:border-green-400 transition-colors"
            >
              <p className="text-2xl font-medium text-green-600 mb-1">{s.value}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-green-600 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-white">{ctaHeading}</h3>
          <p className="text-xs text-green-100 mt-1">{ctaSubtext}</p>
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
