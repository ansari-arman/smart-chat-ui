import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

// ── Static data — replace with API data ─────────────────────────────────────

const STATS = [
  { label: "Total sessions",  value: "428",  sub: "↑ +9% this month", subColor: "text-green-600" },
  { label: "Open",            value: "12",   sub: "Active now",        subColor: "text-green-600" },
  { label: "Leads captured",  value: "184",  sub: "43% conversion",    subColor: "text-gray-400" },
];

const SESSIONS = [
  { id: 1, name: "James Cooper",  email: "james@email.com",  msgs: 6, status: "open",   date: "Today" },
  { id: 2, name: "Sara Williams", email: "sara@email.com",   msgs: 4, status: "closed", date: "Today" },
  { id: 3, name: "Visitor #4821", email: "Anonymous",        msgs: 2, status: "open",   date: "Today" },
  { id: 4, name: "Mike Johnson",  email: "mike@email.com",   msgs: 8, status: "closed", date: "Yesterday" },
  { id: 5, name: "Priya Sharma",  email: "priya@email.com",  msgs: 5, status: "closed", date: "Yesterday" },
  { id: 6, name: "David Kim",     email: "david@email.com",  msgs: 3, status: "closed", date: "Apr 30" },
];

// Selected session preview — replace with state-driven selected session
const PREVIEW_SESSION = {
  name:  "James Cooper",
  email: "james@email.com",
  date:  "Today, 10:32 AM",
  msgs:  6,
  status: "open",
};

const PREVIEW_MESSAGES = [
  { id: 1, sender: "ai",      text: "Hi! I'm Smart-Chat. How can I help you today?",               time: "10:32 AM" },
  { id: 2, sender: "visitor", text: "I need to book a plumbing appointment",                        time: "10:33 AM" },
  { id: 3, sender: "ai",      text: "Sure! What date and time works best for you?",                 time: "10:33 AM" },
  { id: 4, sender: "visitor", text: "Tomorrow at 10am if possible",                                 time: "10:34 AM" },
  { id: 5, sender: "ai",      text: "I've booked you for tomorrow at 10:00 AM. You'll get a confirmation email shortly!", time: "10:35 AM" },
  { id: 6, sender: "visitor", text: "Thank you!",                                                   time: "10:35 AM" },
];

const STATUS_STYLES = {
  open:   "bg-green-50 text-green-700",
  closed: "bg-gray-100 text-gray-500",
};

// ── Page ────────────────────────────────────────────────────────────────────

export default function ChatSessionsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar activePath="/dashboard/chats" /> */}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Chat Sessions" subtitle="All visitor chat conversations" />

        <div className="flex flex-1 overflow-hidden">

          {/* ── Left Panel — Sessions List ── */}
          <div className="flex flex-col flex-1 gap-3 p-4 overflow-y-auto border-r border-gray-100">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                  <p className="text-xl font-medium text-black">{s.value}</p>
                  <p className={`text-[10px] mt-1 ${s.subColor}`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            {/*
              Filters — logic tum khud likhna:
              - search → filter SESSIONS by name or email
              - status select → filter by status field
              - date select   → filter by date field
            */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg">
                <svg className="w-3 h-3 fill-gray-400 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <input
                  type="text"
                  name="search"
                  placeholder="Search visitor..."
                  className="flex-1 text-xs text-black placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* status filter — onChange tum likhna */}
              <select
                name="status"
                className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
              >
                <option value="">All status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>

              {/* date filter — onChange tum likhna */}
              <select
                name="dateRange"
                className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
              >
                <option value="">All time</option>
                <option value="today">Today</option>
                <option value="week">This week</option>
                <option value="month">This month</option>
              </select>
            </div>

            {/* Sessions Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">

              {/* Column headers */}
              <div className="grid grid-cols-[1fr_70px_80px_70px_55px] gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                {["Visitor", "Messages", "Status", "Date", "Action"].map((col) => (
                  <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
                ))}
              </div>

              {/*
                Rows — map karo SESSIONS pe
                onClick → selected session ka state set karo
                selected session right panel mein dikhega
              */}
              {SESSIONS.map((s, idx) => (
                <div
                  key={s.id}
                  className={`grid grid-cols-[1fr_70px_80px_70px_55px] gap-3 px-4 py-3 border-b border-gray-50 last:border-b-0 hover:bg-green-50/40 transition-colors items-center cursor-pointer ${
                    idx === 0 ? "bg-green-50/40 border-l-2 border-green-500" : ""
                  }`}
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-black truncate">{s.name}</span>
                    <span className="text-[10px] text-gray-400 mt-0.5 truncate">{s.email}</span>
                  </div>
                  <span className="text-xs text-gray-400">{s.msgs} msgs</span>
                  <span>
                    <span className={`inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[s.status]}`}>
                      {s.status}
                    </span>
                  </span>
                  <span className="text-xs text-gray-400">{s.date}</span>

                  {/* View button — onClick tum likhna: set selected session */}
                  <button
                    type="button"
                    className="text-xs text-green-600 hover:underline text-left"
                  >
                    View
                  </button>
                </div>
              ))}

              {/* Pagination */}
              {/*
                Pagination — logic tum likhna:
                page state manage karo
                GET /api/chats?page=N&limit=10 call karo
              */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">1–10 of 428 sessions</p>
                <div className="flex gap-1.5">
                  {["←", "1", "2", "3", "→"].map((p, i) => (
                    <button
                      key={p}
                      type="button"
                      className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
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
          </div>

          {/* ── Right Panel — Chat Preview ── */}
          {/*
            Yeh panel selected session ki chat dikhata hai
            PREVIEW_SESSION aur PREVIEW_MESSAGES ko
            selected session ke actual data se replace karo
          */}
          <div className="w-[280px] flex-shrink-0 flex flex-col bg-white border-l border-gray-100">

            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-medium text-black">{PREVIEW_SESSION.name}</p>
                <span className={`inline-flex text-[9px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[PREVIEW_SESSION.status]}`}>
                  {PREVIEW_SESSION.status}
                </span>
              </div>
              <p className="text-[10px] text-gray-400">
                {PREVIEW_SESSION.email} · {PREVIEW_SESSION.date} · {PREVIEW_SESSION.msgs} messages
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 flex flex-col gap-3 px-3 py-3 overflow-y-auto bg-gray-50">
              <p className="text-center text-[9px] text-gray-400">Today 10:32 AM</p>

              {PREVIEW_MESSAGES.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.sender === "visitor" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-medium ${
                      msg.sender === "ai"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500 border border-gray-300"
                    }`}
                  >
                    {msg.sender === "ai" ? "SC" : PREVIEW_SESSION.name[0]}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] px-3 py-2 text-[11px] leading-relaxed ${
                      msg.sender === "ai"
                        ? "bg-white border border-gray-100 text-black rounded-xl rounded-bl-sm"
                        : "bg-green-600 text-white rounded-xl rounded-br-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Reply input */}
            {/*
              Reply input — onSubmit tum likhna
              POST /api/chats/:sessionId/message
              sender: "agent"
            */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100">
              <input
                type="text"
                name="reply"
                placeholder="Reply as agent..."
                className="flex-1 px-3 py-1.5 text-xs text-black placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
              />
              {/* Send button — onClick tum likhna */}
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
