import Link from "next/link";

const RECENT_CALLS = [
  { id: 1, name: "James Cooper",  phone: "(555) 012-3456", duration: "4m 22s", status: "answered",    date: "Today" },
  { id: 2, name: "Sara Williams", phone: "(555) 987-6543", duration: "0m 00s", status: "missed",      date: "Today" },
  { id: 3, name: "Mike Johnson",  phone: "(555) 246-8013", duration: "2m 45s", status: "transferred", date: "Yesterday" },
  { id: 4, name: "Priya Sharma",  phone: "(555) 135-7924", duration: "6m 10s", status: "answered",    date: "Yesterday" },
];

const STATUS_STYLES = {
  answered:    "bg-green-50 text-green-700",
  missed:      "bg-red-50 text-red-600",
  transferred: "bg-yellow-50 text-yellow-700",
};

export default function RecentCallsTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">

      {/* Table header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <p className="text-xs font-medium text-black">Recent call logs</p>
        <Link href="/dashboard/calls" className="text-[11px] text-green-600 hover:underline">
          View all →
        </Link>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_100px_80px_90px_70px] gap-2 px-4 py-2 bg-gray-50 border-b border-gray-100">
        {["Caller", "Phone", "Duration", "Status", "Date"].map((col) => (
          <span key={col} className="text-[10px] text-gray-400">{col}</span>
        ))}
      </div>

      {/* Rows */}
      {RECENT_CALLS.map((call) => (
        <div
          key={call.id}
          className="grid grid-cols-[1fr_100px_80px_90px_70px] gap-2 px-4 py-2.5 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors"
        >
          <span className="text-xs font-medium text-black truncate">{call.name}</span>
          <span className="text-xs text-gray-400">{call.phone}</span>
          <span className="text-xs text-gray-400">{call.duration}</span>
          <span>
            <span className={`inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[call.status]}`}>
              {call.status}
            </span>
          </span>
          <span className="text-xs text-gray-400">{call.date}</span>
        </div>
      ))}
    </div>
  );
}
