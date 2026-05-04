import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

// ── Static data — replace with API data ─────────────────────────────────────

const STATS = [
  { label: "Total calls",   value: "1,284", sub: "↑ +12% this month",  subColor: "text-green-600" },
  { label: "Answered",      value: "1,091", sub: "85% answer rate",     subColor: "text-green-600" },
  { label: "Missed",        value: "193",   sub: "15% miss rate",       subColor: "text-red-500",  valueColor: "text-red-500" },
  { label: "Avg duration",  value: "3m 42s",sub: "per answered call",   subColor: "text-gray-400" },
];

const CALLS = [
  { id: 1, name: "James Cooper",  phone: "(555) 012-3456", duration: "4m 22s", status: "answered",    date: "Today, 10:32 AM" },
  { id: 2, name: "Sara Williams", phone: "(555) 987-6543", duration: "0m 00s", status: "missed",      date: "Today, 9:15 AM" },
  { id: 3, name: "Mike Johnson",  phone: "(555) 246-8013", duration: "2m 45s", status: "transferred", date: "Yesterday, 4:50 PM" },
  { id: 4, name: "Priya Sharma",  phone: "(555) 135-7924", duration: "6m 10s", status: "answered",    date: "Yesterday, 2:20 PM" },
  { id: 5, name: "David Kim",     phone: "(555) 321-6540", duration: "1m 55s", status: "answered",    date: "Apr 30, 11:05 AM" },
  { id: 6, name: "Nina Patel",    phone: "(555) 654-3210", duration: "0m 00s", status: "missed",      date: "Apr 30, 9:40 AM" },
  { id: 7, name: "Carlos Rivera", phone: "(555) 789-0123", duration: "5m 08s", status: "answered",    date: "Apr 29, 3:15 PM" },
  { id: 8, name: "Emma Wilson",   phone: "(555) 234-5678", duration: "3m 22s", status: "transferred", date: "Apr 29, 1:00 PM" },
];

const STATUS_STYLES = {
  answered:    "bg-green-50 text-green-700",
  missed:      "bg-red-50 text-red-600",
  transferred: "bg-yellow-50 text-yellow-700",
};

// ── Page ────────────────────────────────────────────────────────────────────

export default function CallLogsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar activePath="/dashboard/calls" /> */}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Call Logs" subtitle="All incoming calls — filtered & searchable" />

        <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

          {/* ── Stats Row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                <p className={`text-xl font-medium ${s.valueColor ?? "text-black"}`}>{s.value}</p>
                <p className={`text-[10px] mt-1 ${s.subColor}`}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* ── Filters Row ── */}
          {/*
            Filters — logic tum khud likhna:
            - search input → filter CALLS array by name or phone
            - status select → filter by status field
            - date select   → filter by date field
            - export btn    → convert filtered data to CSV and download
          */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Search input — onChange tum likhna */}
            <div className="flex items-center gap-2 flex-1 min-w-[180px] px-3 py-2 bg-white border border-gray-200 rounded-lg">
              <svg className="w-3.5 h-3.5 fill-gray-400 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                name="search"
                placeholder="Search caller name or phone..."
                className="flex-1 text-xs text-black placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            {/* Status filter — onChange tum likhna */}
            <select
              name="status"
              className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
            >
              <option value="">All status</option>
              <option value="answered">Answered</option>
              <option value="missed">Missed</option>
              <option value="transferred">Transferred</option>
            </select>

            {/* Date filter — onChange tum likhna */}
            <select
              name="dateRange"
              className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
            >
              <option value="">All time</option>
              <option value="today">Today</option>
              <option value="week">This week</option>
              <option value="month">This month</option>
            </select>

            {/* Export button — onClick tum likhna (CSV download logic) */}
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Export CSV
            </button>
          </div>

          {/* ── Calls Table ── */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex-1">

            {/* Column headers */}
            <div className="grid grid-cols-[20px_1fr_100px_80px_100px_130px_70px] gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              {/*
                Checkbox header — onClick tum likhna (select all logic)
              */}
              <input type="checkbox" className="w-3.5 h-3.5 accent-green-600 mt-0.5" />
              {["Caller", "Phone", "Duration", "Status", "Date & time", "Action"].map((col) => (
                <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
              ))}
            </div>

            {/* Rows — map karo CALLS array pe, replace with API data */}
            {CALLS.map((call) => (
              <div
                key={call.id}
                className="grid grid-cols-[20px_1fr_100px_80px_100px_130px_70px] gap-3 px-4 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center"
              >
                {/*
                  Row checkbox — onChange tum likhna (row select logic)
                */}
                <input type="checkbox" className="w-3.5 h-3.5 accent-green-600" />

                {/* Caller name + phone */}
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-black truncate">{call.name}</span>
                  <span className="text-[10px] text-gray-400 mt-0.5">{call.phone}</span>
                </div>

                <span className="text-xs text-gray-400">{call.phone}</span>
                <span className="text-xs text-gray-400">{call.duration}</span>

                {/* Status badge */}
                <span>
                  <span className={`inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[call.status]}`}>
                    {call.status}
                  </span>
                </span>

                <span className="text-xs text-gray-400">{call.date}</span>

                {/*
                  View button — onClick tum likhna
                  Options: open modal with transcript, or navigate to /dashboard/calls/[id]
                */}
                <button
                  type="button"
                  className="text-xs text-green-600 hover:underline whitespace-nowrap text-left"
                >
                  View →
                </button>
              </div>
            ))}

            {/* ── Pagination ── */}
            {/*
              Pagination — logic tum likhna:
              - current page state manage karo
              - prev/next buttons se page change karo
              - API call karo with ?page=N&limit=10
            */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <p className="text-xs text-gray-400">Showing 1–10 of 1,284 calls</p>
              <div className="flex gap-1.5">
                {["← Prev", "1", "2", "3", "Next →"].map((p, i) => (
                  <button
                    key={p}
                    type="button"
                    className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                      i === 1
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-400 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
