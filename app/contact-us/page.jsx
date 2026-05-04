export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-black py-14 px-6 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-2xl px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          We&apos;d love to hear from you
        </div>
        <h1 className="text-3xl md:text-8xl font-medium text-white leading-tight mb-3">
          Get in touch with<br />
          <span className="text-green-400">Smart-Chat</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          Have a question, need a demo, or want to partner with us? Our team typically responds within a few hours.
        </p>
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#1a1a1a] border-b border-white/10 grid grid-cols-1 md:grid-cols-3">
        {[
          {
            label: "Phone",
            value: "(888) 435-9109",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            ),
          },
          {
            label: "Email",
            value: "support@smartchat.co",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            ),
          },
          {
            label: "Location",
            value: "Phoenix, AZ",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            ),
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 py-4 bg-green-500 border-b md:border-b-0 md:border-r border-white last:border-none"
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-green-500/20 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-[15px] text-gray-600 mb-0.5">{item.label}</p>
              <p className="text-lg text-gray-300 font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Main Section ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — Form */}
        <div className="bg-white px-8 py-10 border-r border-gray-100">
          <h2 className="text-sm font-medium text-black mb-1">Send us a message</h2>
          <p className="text-xs text-gray-400 mb-6">Fill out the form and our team will get back to you shortly.</p>

          {/* Form — add your own onSubmit */}
          <form className="flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="text-[10px] font-medium text-gray-500">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastName" className="text-[10px] font-medium text-gray-500">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-medium text-gray-500">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[10px] font-medium text-gray-500">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="topic" className="text-[10px] font-medium text-gray-500">Topic</label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General inquiry</option>
                  <option value="demo">Request demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] font-medium text-gray-500">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Send message →
            </button>

          </form>
        </div>

        {/* Right — Info Panel */}
        <div className="bg-white px-8 py-10 flex flex-col gap-6">

          {/* Heading */}
          <div>
            <h2 className="text-lg font-medium text-white leading-snug mb-2">
              Let&apos;s build something<br />
              <span className="text-green-400">great together</span>
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Whether you&apos;re a small business or a growing enterprise — we&apos;re here to help you never miss a customer again.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          {/* Contact Pills */}
          <div className="flex flex-col gap-3">
            {[
              {
                label: "Call us directly",
                value: "(888) 435-9109",
                iconBg: "bg-green-500/10 border-green-500/20",
                icon: (
                  <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                ),
              },
              {
                label: "Email support",
                value: "support@smartchat.co",
                iconBg: "bg-blue-500/10 border-blue-500/20",
                icon: (
                  <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                ),
              },
              {
                label: "Visit us",
                value: "2 N Central Ave, Phoenix AZ",
                iconBg: "bg-purple-500/10 border-purple-500/20",
                icon: (
                  <svg className="w-4 h-4 fill-purple-400" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
              },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-xl"
              >
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${pill.iconBg}`}>
                  {pill.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 mb-0.5">{pill.label}</p>
                  <p className="text-xs text-gray-300 font-medium">{pill.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10" />

          {/* Business Hours */}
          <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest px-4 py-2.5 border-b border-white/5">
              Business hours
            </p>
            {[
              { day: "Monday – Friday", time: "8 AM – 6 PM", open: true },
              { day: "Saturday",        time: "10 AM – 3 PM", open: false },
              { day: "Sunday",          time: "Closed",       open: false },
            ].map((row) => (
              <div
                key={row.day}
                className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-b-0"
              >
                <span className="text-xs text-gray-500">{row.day}</span>
                <div className="flex items-center gap-2">
                  {row.open && (
                    <span className="text-[9px] bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                      Open
                    </span>
                  )}
                  <span className={`text-xs font-medium ${row.time === "Closed" ? "text-gray-600" : "text-gray-300"}`}>
                    {row.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">Follow us</p>
            <div className="flex gap-2">
              {[
                {
                  name: "Twitter",
                  icon: <svg className="w-3.5 h-3.5 fill-gray-500" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>,
                },
                {
                  name: "LinkedIn",
                  icon: <svg className="w-3.5 h-3.5 fill-gray-500" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  name: "Instagram",
                  icon: <svg className="w-3.5 h-3.5 fill-gray-500" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
                },
              ].map((s) => (
                <button
                  key={s.name}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-green-500/30 transition-colors"
                >
                  {s.icon}
                  <span className="text-xs text-gray-500">{s.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Map Strip ── */}
      <section className="bg-black border-t border-white/10 px-8 py-5 flex flex-col sm:flex-row items-center gap-5">

        {/* Map mockup — replace with real Google Maps embed */}
        <div className="flex-1 h-20 bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
          {/* grid lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* pin */}
          <div className="relative z-10 w-5 h-5 bg-green-500 rounded-tl-full rounded-tr-full rounded-br-full rotate-[-45deg]">
            <div className="absolute inset-[3px] bg-black rounded-full" />
          </div>
        </div>

        <div className="flex-shrink-0">
          <p className="text-sm text-gray-300 font-medium mb-1">2 N Central Ave, Suite 1800</p>
          <p className="text-xs text-gray-600 mb-3">Phoenix, AZ 85004, United States</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-lg hover:bg-green-500/20 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

    </main>
  );
}
