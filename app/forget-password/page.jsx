'use client'
import { useState } from "react";

export default function ForgotPasswordPage() {

    let [email,setEmail] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        let res = await fetch('http://localhost:4000/auth/forget-password',{
            method:"POST",
            credentials:'include',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email})
        });

        let data = await res.json();
        alert(data.message)
    }
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <div className="w-full bg-white max-w-sm border border-green-200 shadow-m rounded-2xl py-25 px-10">

        {/* Logo */}
        {/* <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <span className="text-black text-sm font-medium">Smart-Chat</span>
        </div> */}

        {/* Icon */}
        <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 fill-green-600" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-medium text-black text-center mb-1">Forgot password?</h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          Enter your email and we'll send you a reset link.
        </p>

        {/* Form — add your own onSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Send reset link
          </button>
        </form>

        {/* Back to sign in */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Remember your password?{" "}
          <a href="/sign-In" className="text-green-600 hover:underline font-medium">
            Sign in
          </a>
        </p>

      </div>
    </div>
  );
}
