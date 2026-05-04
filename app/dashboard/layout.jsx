'use client'
import Sidebar from "@/components/Dashboard/Sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    let pathname = usePathname()
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activePath={`${pathname}`} />
      <div className="flex flex-col flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
