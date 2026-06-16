'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    section: "Admin",
    items: [
      {
        label: "Overview",
        href: "/admin",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>,
      },
      {
        label: "Users",
        href: "/admin/users",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>,
      },
      {
        label: "Demo Requests",
        href: "/admin/demo-requests",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z" /></svg>,
      },
      {
        label: "All Calls",
        href: "/admin/calls",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>,
      },
      {
        label: "Analytics",
        href: "/admin/analytics",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>,
      },
    ],
  },
  {
    section: "Account",
    items: [
      {
        label: "Settings",
        href: "/admin/settings",
        icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>,
      },
    ],
  },
];

export default function AdminSidebar({ activePath = "/admin" }) {
    let pathname = usePathname()
  return (
    <aside className="w-[190px] bg-black flex flex-col flex-shrink-0 min-h-screen">

      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
        <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <span className="text-white text-xs font-medium">Smart-Chat</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 pt-2">
        {NAV_ITEMS.map((group) => (
          <div key={group.section}>
            <p className="text-[9px] text-gray-600 uppercase tracking-widest px-4 py-2">{group.section}</p>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 mx-2 px-3 py-2 rounded-md text-xs transition-colors ${
                    isActive
                      ? "bg-green-500/15 text-green-400"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom user */}
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0">
            AU
          </div>
          <div>
            <p className="text-xs text-gray-300">Admin User</p>
            <p className="text-[9px] text-green-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
