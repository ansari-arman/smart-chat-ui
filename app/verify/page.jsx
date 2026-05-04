"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  let router = useRouter()

  useEffect(() => {
    const verify = async () => {
      const res = await fetch(`http://localhost:4000/auth/verify?token=${token}`);
      const data = await res.json();
      console.log(data);
      router.push('/sign-In')
    };

    if (token) verify();
  }, [token]);

  return <div className="h-screen w-full flex justify-center items-center">
    <h1 className="text-blue-400 text-2xl font-bold">Verifying your email...</h1>
  </div>
}