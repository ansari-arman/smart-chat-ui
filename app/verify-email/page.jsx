"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  let router = useRouter()

  useEffect(() => {
    const verify = async () => {
      const res = await fetch(`http://localhost:4000/auth/verify-email?token=${token}`);
      const data = await res.json();
      if(data.url == "new-password"){
        router.push(`/new-password?token=${token}`)
      }else{
        router.push('/sign-In')
        alert('Something went wrong. try again')
      }
    };

    if (token) verify();
  }, [token]);

  return <div className="h-screen w-full flex justify-center items-center">
    <h1 className="text-blue-400 text-2xl font-bold">Verifying your email...</h1>
  </div>
}