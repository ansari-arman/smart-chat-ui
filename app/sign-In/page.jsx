'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
    let [email,setEMail] = useState('');
    let [password,setPassword] = useState('');

    let router = useRouter()
    async function handleSubmit(e){
        e.preventDefault();
        let res = await fetch('http://localhost:4000/auth/login',{
            method:"POST",
            credentials:'include',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        });
        let data = await res.json();

        if(res.ok){
            router.push('/dashboard')
        }
        alert(data.message);
    }
  return (
    <div className="max-h-screen bg-white flex p-10 mb-20">

      {/* ── Left Panel ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-center items-center border border-green-300 rounded-2xl shadow-l">

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
        <div>
          <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 fill-green-400" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h2 className="text-black text-2xl font-medium leading-snug mb-3">
            Welcome back to<br />
            <span className="text-green-400">Smart-Chat</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your AI assistant is working 24/7. Sign in to view your call logs, chats, and analytics.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-col gap-4">
            {[
              { num: "3,000+", label: "Businesses using Smart-Chat" },
              { num: "35%",    label: "Average missed calls recovered" },
              { num: "24/7",   label: "Always-on AI assistant" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="text-green-400 font-medium text-sm w-16">{s.num}</span>
                <span className="text-gray-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        {/* <div className="border-l-2 border-green-500 pl-4">
          <p className="text-gray-400 text-xs leading-relaxed italic">
            &ldquo;Smart-Chat transformed the way we operate. It feels like gaining an invaluable extension of our own team.&rdquo;
          </p>
          <p className="text-gray-500 text-xs mt-2">— Plumbing Business Owner</p>
        </div> */}
      </div>

      {/* ── Right Panel (Form UI only) ── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">

        {/* Mobile Logo */}
        <div className="lg:hidden mb-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <span className="text-black text-sm font-medium">Smart-Chat</span>
        </div>

        <div className="w-full max-w-sm border px-10 py-10 border-green-300 rounded-2xl">

          {/* Heading */}
          <h1 className="text-2xl font-medium text-black mb-1">Sign in</h1>
          <p className="text-sm text-gray-400 mb-8">
            Don&apos;t have an account?{" "}
            <a href="/sign-Up" className="text-green-600 hover:underline font-medium">
              Sign up
            </a>
          </p>

          {/* Form — no onSubmit, no state, just UI */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

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
                onChange={(e)=>setEMail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-medium text-gray-600">
                  Password
                </label>
                <a href="/forget-password" className="text-xs text-green-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
                {/* show/hide button — add your own onClick logic */}
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            {/* <div className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 accent-green-600 rounded border-gray-300"
              />
              <label htmlFor="remember" className="text-xs text-gray-500 cursor-pointer">
                Remember me for 30 days
              </label>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Sign in
            </button>

          </form>

          {/* Divider */}
          {/* <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or continue with</span>
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
            Sign in with Google
          </button> */}

          {/* Footer Note */}
          <p className="text-center text-xs text-gray-400 mt-8">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-green-600 hover:underline">Terms</a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </div>
  );
}
