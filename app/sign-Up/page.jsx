'use client'
import { useState } from "react";

export default function SignUpPage() {
    let [fullName,setFullName] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [confirmPassword,setConfirmPassword] = useState('');

    let [showPassword,setShowPassword] = useState(false);
    let [showConfirmPassword,setShowConfirmPassword] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        let res = await fetch('http://localhost:4000/auth/register',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({fullName,email,password,confirmPassword})
        });

        let data = await res.json();
        alert(data.message)
    }

    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    function handleShowConfirmPassword(){
        setShowConfirmPassword(!showConfirmPassword)
    }
  return (
    <div className="max-h-screen bg-white flex p-10">

      {/* ── Left Panel ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center">

        {/* Logo */}
        {/* <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <span className="text-white text-sm font-medium">Smart-Chat</span>
        </div> */}

        {/* Center Content */}
        <div className="border rounded-2xl border-green-300 py-25 px-45 bg-white">
          <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 fill-green-400" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
            </svg>
          </div>
          <h2 className="text-black text-2xl font-medium leading-snug mb-3">
            Join thousands of<br />
            businesses on{" "}
            <span className="text-green-400">Smart-Chat</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Set up your AI assistant in under 2 days. Never miss a call or a customer again.
          </p>

          {/* Checklist */}
          <div className="mt-10 flex flex-col gap-4">
            {[
              "24/7 AI answering service",
              "Automatic appointment booking",
              "Full call logs & transcripts",
              "CRM & calendar integrations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 fill-green-400" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        {/* <div className="border-l-2 border-green-500 pl-4">
          <p className="text-gray-400 text-xs leading-relaxed italic">
            &ldquo;Having an AI CSR for our plumbing company has been a game changer. Smart-Chat handles every call we miss.&rdquo;
          </p>
          <p className="text-gray-500 text-xs mt-2">— Anna Miller, Plumbing Company</p>
        </div> */}
      </div>

      {/* ── Right Panel (Form UI only) ── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 ">

        {/* Mobile Logo */}
        <div className="lg:hidden mb-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <span className="text-black text-sm font-medium">Smart-Chat</span>
        </div>

        <div className="w-full max-w-sm border py-10 px-10 border-green-300 rounded-2xl">

          {/* Heading */}
          <h1 className="text-2xl font-medium text-black mb-1">Create an account</h1>
          <p className="text-sm text-gray-400 mb-8">
            Already have an account?{" "}
            <a href="/sign-In" className="text-green-600 hover:underline font-medium">
              Sign in
            </a>
          </p>

          {/* Form — no onSubmit, no state, just UI */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-gray-600">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-gray-600">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Company + Industry — side by side */}
            {/* <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-medium text-gray-600">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={company}
                  onChange={(e)=>setCompany(e.target.value)}
                  placeholder="Acme Inc."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div> */}
              {/* <div className="flex flex-col gap-1.5">
                <label htmlFor="industry" className="text-xs font-medium text-gray-600">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={industry}
                  onChange={(e)=>setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors bg-white"
                >
                  <option value="">Select</option>
                  <option value="home-services">Home Services</option>
                  <option value="legal">Legal</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div> */}

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-xs font-medium text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text':'password'}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
                {/* show/hide — add your own onClick logic */}
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {
                        showPassword 
                            ? 
                            "❌" 
                            :
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    }
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-600">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text':'password'}
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleShowConfirmPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    {
                        showConfirmPassword 
                            ? 
                            "❌" 
                            :
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    }
                  
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            {/* <div className="flex items-start gap-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-4 h-4 mt-0.5 accent-green-600 rounded border-gray-300 flex-shrink-0"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                I agree to the{" "}
                <a href="/terms" className="text-green-600 hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</a>
              </label>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Create account
            </button>

          </form>

          {/* Divider */}
          {/* <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or sign up with</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div> */}

          {/* Google Button */}
          {/* <button
            type="button"
            className="w-full py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign up with Google
          </button> */}

        </div>
      </div>
    </div>
  );
}
