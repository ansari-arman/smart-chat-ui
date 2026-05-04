'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
    let [password,setPassword] = useState('');
    let [confirmPassword,setConfirmPassword] = useState('');
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    let router = useRouter()

    async function handleSubmit(e){
        e.preventDefault();
        let res = await fetch('http://localhost:4000/auth/change-password',{
            method:"POST",
            credentials:'include',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({password,confirmPassword,token })
        });
        let data = await res.json();
        alert(data.message)
        router.push('/sign-In')  
    }
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6">
      <div className="w-full max-w-sm border border-green-200 rounded-xl bg-white px-10 py-12 mt-[-5%]">
       
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
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-medium text-black text-center mb-1">Set new password</h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          Your new password must be at least 8 characters.
        </p>

        {/* Form — add your own onSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* New Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="newPassword" className="text-xs font-medium text-gray-600">
              New password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
              {/* show/hide — add your own onClick */}
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

          {/* Confirm New Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-600">
              Confirm new password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
              {/* show/hide — add your own onClick */}
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors mt-1"
          >
            Set new password
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
