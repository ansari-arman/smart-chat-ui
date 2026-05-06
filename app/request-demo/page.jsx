'use client'
import { useState } from "react";

export default function RequestDemoPage() {
    let [firstName,setFirstName] = useState('');
    let [lastName,setLastName] = useState('');
    let [email,setEmail] = useState('');
    let [phone,setPhone] = useState('');
    let [message,setMessage] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        let res = await fetch('http://localhost:4000/api/leads',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({firstName,lastName,email,phone,message})
        });

        let data = await res.json();
        if(res.ok){
            console.log(data.info)
        }else{
            alert('Something went wrong try again')
        }
    }
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-black py-14 px-6 text-center min-h-screen flex flex-col items-center justify-center mt-[-5%]">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-lg px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Free — No credit card required
        </div>
        <h1 className="text-3xl md:text-7xl font-medium text-white leading-tight mb-3">
          See Smart-Chat<br />
          <span className="text-green-400">in action</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          Book a personalized demo and see how Smart-Chat can help your business capture more leads and never miss a call.
        </p>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-[#1a1a1a] border-b border-white/10 grid grid-cols-1 md:grid-cols-3 mt-[-5.5%]">
        {[
          {
            label: "Setup time",
            value: "Under 2 days",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            ),
          },
          {
            label: "Businesses onboarded",
            value: "3,000+",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            ),
          },
          {
            label: "Avg calls recovered",
            value: "35% more leads",
            icon: (
              <svg className="w-3.5 h-3.5 fill-green-400" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            ),
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 last:border-none"
          >
            <div className="w-15 h-15 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-[20px] text-gray-600 mb-0.5">{item.label}</p>
              <p className="text-lg text-gray-300 font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Main Section ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left — Demo Form ── */}
        <div className="bg-white px-8 py-10 border-r border-gray-100">
          <h2 className="text-sm font-medium text-black mb-1">Book your free demo</h2>
          <p className="text-xs text-gray-400 mb-6">
            Fill in your details and a Smart-Chat specialist will reach out within 24 hours.
          </p>

          {/*
            FORM — tum khud onSubmit likhna
            sabhi input fields ke `name` attributes already set hain
            inhe POST /api/leads pe send karna hai
          */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* name — POST body mein "name" field */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="text-[10px] font-medium text-gray-500">
                  First name <span className="text-red-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastName" className="text-[10px] font-medium text-gray-500">
                  Last name <span className="text-red-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  placeholder="Smith"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
            </div>

            {/* email — POST body mein "email" field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-medium text-gray-500">
                Work email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* phone — POST body mein "phone" field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[10px] font-medium text-gray-500">
                Phone number <span className="text-red-400">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="(555) 000-0000"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* company + industry — POST body mein "company" aur "industry" fields */}
            {/* <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-[10px] font-medium text-gray-500">
                  Company name <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="industry" className="text-[10px] font-medium text-gray-500">
                  Industry <span className="text-red-400">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors bg-white"
                >
                  <option value="">Select industry</option>
                  <option value="home-services">Home Services</option>
                  <option value="legal">Legal</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div> */}

            {/* businessSize — POST body mein "businessSize" field */}
            {/* <div className="flex flex-col gap-1.5">
              <label htmlFor="businessSize" className="text-[10px] font-medium text-gray-500">
                Business size
              </label>
              <select
                id="businessSize"
                name="businessSize"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors bg-white"
              >
                <option value="">Select size</option>
                <option value="1-5">1 – 5 employees</option>
                <option value="6-20">6 – 20 employees</option>
                <option value="21-50">21 – 50 employees</option>
                <option value="50+">50+ employees</option>
              </select>
            </div> */}

            {/* message — POST body mein "message" field (optional) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] font-medium text-gray-500">
                Anything specific you&apos;d like to see? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="E.g. I want to see how call booking works..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
              />
            </div>

            {/*
              Submit button — is button ka type="submit" hai
              form ka onSubmit tumhara logic chalayega
              success pe success state dikhana hai (tum decide karo)
              failure pe error message dikhana hai
            */}
            <button
              type="submit"
              className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Book my free demo →
            </button>

            <p className="text-[10px] text-gray-400 text-center">
              By submitting, you agree to our{" "}
              <a href="/terms" className="text-green-600 hover:underline">Terms</a> and{" "}
              <a href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</a>.
            </p>

          </form>
        </div>

        {/* ── Right — What to expect panel ── */}
        <div className="bg-white px-8 py-10 flex flex-col gap-6">

          <div>
            <h2 className="text-lg font-medium text-white leading-snug mb-2">
              What happens after<br />
              <span className="text-green-400">you submit?</span>
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our team reviews every request personally. Here&apos;s what you can expect next.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          {/* Steps — sirf UI hai, koi logic nahi */}
          <div className="flex flex-col gap-4">
            {[
              {
                step: "01",
                title: "We review your request",
                desc: "A Smart-Chat specialist reviews your details within a few hours.",
                color: "text-green-400",
              },
              {
                step: "02",
                title: "You get a calendar invite",
                desc: "We'll send you a Calendly link to pick a time that works for you.",
                color: "text-blue-400",
              },
              {
                step: "03",
                title: "Live 30-min demo call",
                desc: "We walk you through the platform live, tailored to your industry.",
                color: "text-purple-400",
              },
              {
                step: "04",
                title: "You go live in 2 days",
                desc: "Our team handles full onboarding. You'll be live before the week ends.",
                color: "text-yellow-400",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <span className={`text-xl font-medium leading-none flex-shrink-0 ${item.color}`}>
                  {item.step}
                </span>
                <div>
                  <p className="text-xs font-medium text-white mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10" />

          {/* Testimonial */}
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <p className="text-xs text-gray-400 leading-relaxed italic mb-4">
              &ldquo;The demo took 30 minutes and by the next morning Smart-Chat was answering our calls. Best decision we made this year.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
                AM
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium">Anna Miller</p>
                <p className="text-[10px] text-gray-600">Plumbing Company Owner</p>
              </div>
            </div>
          </div>

          {/* Contact fallback */}
          <p className="text-xs text-gray-600">
            Prefer to talk first?{" "}
            <a href="tel:8884359109" className="text-green-400 hover:underline font-medium">
              Call (888) 435-9109
            </a>
          </p>

        </div>
      </section>

    </main>
  );
}
