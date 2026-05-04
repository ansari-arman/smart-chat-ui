import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
  },
  {
    label: "Call Logs",
    href: "/dashboard/calls",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "Chat Sessions",
    href: "/dashboard/chats",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
];

export default function Sidebar({ activePath = "/dashboard" }) {
  return (
    <aside className="w-[300px] bg-black flex flex-col flex-shrink-0 min-h-screen">

      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
        <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <span className="text-white text-sm font-medium">Smart-Chat</span>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col pt-3 flex-1">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest px-4 pb-1">Main</p>

        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href;
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

        <p className="text-[10px] text-gray-600 uppercase tracking-widest px-4 pb-1 mt-5">Account</p>
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-2 mx-2 px-3 py-2 rounded-md text-xs transition-colors ${
            activePath === "/dashboard/settings"
              ? "bg-green-500/15 text-green-400"
              : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
          }`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
          Settings
        </Link>
      </nav>

      {/* Bottom user info — wire up with real user data */}
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-[11px] font-medium flex-shrink-0">
            JD
          </div>
          <div>
            <p className="text-xs text-gray-300">John Doe</p>
            <p className="text-[10px] text-gray-600">Client</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
