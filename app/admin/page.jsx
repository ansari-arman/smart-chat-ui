'use client'
import Link from "next/link";
import AdminTopbar from "@/app/admin/components/AdminTopbar";

// ── Static data — replace with GET /api/admin/stats ─────────────────────────

const STATS = [
  { label: "Total users",            value: "248",   sub: "↑ +12 this month" },
  { label: "Demo requests",          value: "87",    sub: "↑ 14 new today" },
  { label: "Total calls (platform)", value: "18.4k", sub: "↑ +9% this month" },
  { label: "Active subscriptions",   value: "201",   sub: "81% retention rate" },
];

const RECENT_USERS = [
  { id: 1, name: "John Doe",     email: "john@acme.com",   role: "client", industry: "Plumbing",   joined: "May 7, 2026" },
  { id: 2, name: "Sara Williams",email: "sara@law.com",    role: "client", industry: "Legal",      joined: "May 6, 2026" },
  { id: 3, name: "Admin User",   email: "admin@smartchat.co", role: "admin", industry: "—",       joined: "Jan 1, 2026" },
  { id: 4, name: "Mike Johnson", email: "mike@clinic.com", role: "client", industry: "Healthcare", joined: "May 5, 2026" },
];

const RECENT_DEMOS = [
  { id: 1, name: "Priya Sharma", email: "priya@hvac.com",    industry: "HVAC",       status: "new" },
  { id: 2, name: "David Kim",    email: "david@law.com",     industry: "Legal",      status: "contacted" },
  { id: 3, name: "Nina Patel",   email: "nina@clinic.com",   industry: "Healthcare", status: "converted" },
  { id: 4, name: "Carlos Rivera",email: "carlos@fix.com",    industry: "Plumbing",   status: "new" },
];

const ALL_REGISTRATIONS = [
  { id: 1, name: "John Doe",     email: "john@acme.com",    company: "Acme Plumbing",     role: "client", joined: "May 7, 2026" },
  { id: 2, name: "Sara Williams",email: "sara@law.com",     company: "City Legal Group",  role: "client", joined: "May 6, 2026" },
  { id: 3, name: "Mike Johnson", email: "mike@clinic.com",  company: "Sunrise Healthcare",role: "client", joined: "May 5, 2026" },
  { id: 4, name: "Priya Sharma", email: "priya@hvac.com",   company: "Fast Fix HVAC",     role: "client", joined: "May 4, 2026" },
  { id: 5, name: "David Kim",    email: "david@law.com",    company: "Prime Law Firm",    role: "client", joined: "May 3, 2026" },
];

const ROLE_STYLES = {
  admin:  "bg-purple-50 text-purple-700",
  client: "bg-gray-100 text-gray-600",
};

const STATUS_STYLES = {
  new:       "bg-blue-50 text-blue-700",
  contacted: "bg-yellow-50 text-yellow-700",
  converted: "bg-green-50 text-green-700",
};

// ── Page ────────────────────────────────────────────────────────────────────

export default function AdminPage() {
    async function handleClick(id){
        let res = await fetch(`http://localhost:4000/leads/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify({id})
        });
        let data = await res.json();
        console.log(data)
    }
  return (
    <>
      <AdminTopbar title="Admin Overview" subtitle="Platform-wide statistics & management" />

      <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-400 mb-1.5">{s.label}</p>
              <p className="text-xl font-medium text-black">{s.value}</p>
              <p className="text-[10px] text-green-600 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Row 2 — Recent Users + Recent Demo Requests ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Recent Users */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-medium text-black">Recent users</p>
              <Link href="/admin/users" className="text-[10px] text-green-600 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-[1fr_60px_80px_55px] gap-3 px-5 py-2 bg-gray-50 border-b border-gray-100">
              {["Name", "Role", "Industry", "Action"].map((col) => (
                <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
              ))}
            </div>
            {RECENT_USERS.map((u) => (
              <div
                key={u.id}
                className="grid grid-cols-[1fr_60px_80px_55px] gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center"
              >
                <div>
                  <p className="text-xs font-medium text-black">{u.name}</p>
                  <p className="text-[10px] text-gray-400">{u.email}</p>
                </div>
                <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full capitalize ${ROLE_STYLES[u.role]}`}>
                  {u.role}
                </span>
                <span className="text-xs text-gray-400">{u.industry}</span>

                {/*
                  Delete button — onClick tum likhna
                  DELETE /api/admin/users/:id
                  admin ko delete nahi kar sakte
                */}
                {u.role === "admin" ? (
                  <span className="text-[10px] text-gray-300">—</span>
                ) : (
                  <button type="button" onClick={()=>{handleClick(u.id)}} className="text-[10px] text-red-500 hover:underline text-left">
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Recent Demo Requests */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-medium text-black">Recent demo requests</p>
              <Link href="/admin/demo-requests" className="text-[10px] text-green-600 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-[1fr_90px_80px] gap-3 px-5 py-2 bg-gray-50 border-b border-gray-100">
              {["Name", "Industry", "Status"].map((col) => (
                <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
              ))}
            </div>
            {RECENT_DEMOS.map((d) => (
              <div
                key={d.id}
                className="grid grid-cols-[1fr_90px_80px] gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center"
              >
                <div>
                  <p className="text-xs font-medium text-black">{d.name}</p>
                  <p className="text-[10px] text-gray-400">{d.email}</p>
                </div>
                <span className="text-xs text-gray-400">{d.industry}</span>
                {/*
                  Status badge — onClick tum likhna
                  PATCH /api/admin/demo-requests/:id { status: "contacted" }
                */}
                <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[d.status]}`}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── All Recent Registrations Table ── */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <p className="text-xs font-medium text-black">All recent registrations</p>
            {/*
              Export CSV — onClick tum likhna
              GET /api/admin/users/export → CSV download
            */}
            <button type="button" className="text-[10px] text-green-600 hover:underline">
              Export CSV
            </button>
          </div>

          <div className="grid grid-cols-[1fr_140px_80px_90px_60px] gap-3 px-5 py-2 bg-gray-50 border-b border-gray-100">
            {["User", "Company", "Role", "Joined", "Action"].map((col) => (
              <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
            ))}
          </div>

          {/*
            Rows — replace ALL_REGISTRATIONS with GET /api/admin/users data
          */}
          {ALL_REGISTRATIONS.map((u) => (
            <div
              key={u.id}
              className="grid grid-cols-[1fr_140px_80px_90px_60px] gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center"
            >
              <div>
                <p className="text-xs font-medium text-black">{u.name}</p>
                <p className="text-[10px] text-gray-400">{u.email}</p>
              </div>
              <span className="text-xs text-gray-400 truncate">{u.company}</span>
              <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full capitalize ${ROLE_STYLES[u.role]}`}>
                {u.role}
              </span>
              <span className="text-xs text-gray-400">{u.joined}</span>

              {/*
                Delete button — onClick tum likhna
                DELETE /api/admin/users/:id
              */}
              <button type="button" className="text-[10px] text-red-500 hover:underline text-left">
                Delete
              </button>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}
