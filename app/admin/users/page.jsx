import AdminTopbar from "@/app/admin/components/AdminTopbar";

const USERS = [
  { id: 1, name: "John Doe",     email: "john@acme.com",    company: "Acme Plumbing",     industry: "Plumbing",   role: "client", joined: "May 7, 2026" },
  { id: 2, name: "Sara Williams",email: "sara@law.com",     company: "City Legal Group",  industry: "Legal",      role: "client", joined: "May 6, 2026" },
  { id: 3, name: "Admin User",   email: "admin@smartchat.co",company: "Smart-Chat HQ",   industry: "—",          role: "admin",  joined: "Jan 1, 2026" },
  { id: 4, name: "Mike Johnson", email: "mike@clinic.com",  company: "Sunrise Healthcare",industry: "Healthcare", role: "client", joined: "May 5, 2026" },
  { id: 5, name: "Priya Sharma", email: "priya@hvac.com",   company: "Fast Fix HVAC",     industry: "HVAC",       role: "client", joined: "May 4, 2026" },
  { id: 6, name: "David Kim",    email: "david@law.com",    company: "Prime Law Firm",    industry: "Legal",      role: "client", joined: "May 3, 2026" },
  { id: 7, name: "Nina Patel",   email: "nina@clinic.com",  company: "City Dental Care",  industry: "Healthcare", role: "client", joined: "May 2, 2026" },
];

const ROLE_STYLES = {
  admin:  "bg-purple-50 text-purple-700",
  client: "bg-gray-100 text-gray-600",
};

export default function AdminUsersPage() {
  return (
    <>
      <AdminTopbar title="Users" subtitle="All registered users on the platform" />

      <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-xs px-3 py-2 bg-white border border-gray-200 rounded-lg">
            <svg className="w-3.5 h-3.5 fill-gray-400 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              name="search"
              placeholder="Search name or email..."
              className="flex-1 text-xs text-black placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
          {/* role filter — onChange tum likhna */}
          <select name="role" className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none">
            <option value="">All roles</option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
          </select>
          {/* Export CSV — onClick tum likhna */}
          <button type="button" className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition-colors ml-auto">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
            Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_140px_90px_90px_90px_70px] gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-100">
            {["User", "Company", "Industry", "Role", "Joined", "Action"].map((col) => (
              <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
            ))}
          </div>

          {USERS.map((u) => (
            <div
              key={u.id}
              className="grid grid-cols-[1fr_140px_90px_90px_90px_70px] gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center"
            >
              <div>
                <p className="text-xs font-medium text-black">{u.name}</p>
                <p className="text-[10px] text-gray-400">{u.email}</p>
              </div>
              <span className="text-xs text-gray-400 truncate">{u.company}</span>
              <span className="text-xs text-gray-400">{u.industry}</span>
              <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full capitalize w-fit ${ROLE_STYLES[u.role]}`}>
                {u.role}
              </span>
              <span className="text-xs text-gray-400">{u.joined}</span>
              {u.role === "admin" ? (
                <span className="text-[10px] text-gray-300">—</span>
              ) : (
                <button type="button" className="text-[10px] text-red-500 hover:underline text-left">
                  Delete
                </button>
              )}
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">Showing 1–10 of 248 users</p>
            <div className="flex gap-1.5">
              {["← Prev", "1", "2", "3", "Next →"].map((p, i) => (
                <button key={p} type="button"
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${i === 1 ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-400 border-gray-200 hover:bg-gray-50"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
