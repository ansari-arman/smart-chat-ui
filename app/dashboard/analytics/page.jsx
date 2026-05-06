import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

// ── Static data — replace with GET /api/analytics ───────────────────────────

const STATS = [
  { label: "Total calls",       value: "1,284", change: "▲ +12% vs last month", up: true  },
  { label: "Leads captured",    value: "347",   change: "▲ +8% vs last month",  up: true  },
  { label: "Jobs booked",       value: "212",   change: "▲ +15% vs last month", up: true  },
  { label: "Est. revenue saved",value: "$18.4k",change: "▲ +20% vs last month", up: true  },
];

const MONTHLY_CALLS = [
  { month: "Jan", calls: 420 },
  { month: "Feb", calls: 560 },
  { month: "Mar", calls: 390 },
  { month: "Apr", calls: 710 },
  { month: "May", calls: 540 },
  { month: "Jun", calls: 780 },
  { month: "Jul", calls: 900 },
];

const MONTHLY_JOBS = [
  { month: "Jan", jobs: 28 },
  { month: "Feb", jobs: 36 },
  { month: "Mar", jobs: 22 },
  { month: "Apr", jobs: 41 },
  { month: "May", jobs: 31 },
  { month: "Jun", jobs: 44 },
  { month: "Jul", jobs: 54 },
];

const MONTHLY_TABLE = [
  { month: "July 2026",  calls: 900, leads: 87, jobs: 54 },
  { month: "June 2026",  calls: 780, leads: 72, jobs: 44 },
  { month: "May 2026",   calls: 540, leads: 50, jobs: 31 },
  { month: "April 2026", calls: 710, leads: 65, jobs: 41 },
  { month: "March 2026", calls: 390, leads: 35, jobs: 22 },
];

// line chart points — replace with real data
const LINE_POINTS = "0,65 50,55 100,60 150,38 200,45 250,25 300,15";

const MAX_CALLS = Math.max(...MONTHLY_CALLS.map((d) => d.calls));
const MAX_JOBS  = Math.max(...MONTHLY_JOBS.map((d) => d.jobs));

// ── Page ────────────────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar activePath="/dashboard/analytics" /> */}

      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar with date range filter */}
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 flex-shrink-0">
          <div>
            <h1 className="text-sm font-medium text-black">Analytics</h1>
            <p className="text-[10px] text-gray-400">Performance overview</p>
          </div>
          <div className="flex items-center gap-3">
            {/*
              Date range select — onChange tum likhna
              GET /api/analytics?range=7months or 3months or year
            */}
            <select
              name="range"
              className="px-3 py-1.5 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none focus:border-green-500 transition-colors"
            >
              <option value="7months">Last 7 months</option>
              <option value="3months">Last 3 months</option>
              <option value="year">This year</option>
            </select>
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-medium">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

          {/* ── Stats Row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 mb-1.5">{s.label}</p>
                <p className="text-xl font-medium text-black">{s.value}</p>
                <p className={`text-[10px] mt-1 ${s.up ? "text-green-600" : "text-red-500"}`}>
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          {/* ── Row 2 — Bar Chart + Donut ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4">

            {/* Bar Chart — Monthly call volume */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-black">Monthly call volume</p>
                <p className="text-[10px] text-gray-400">Jan – Jul 2026</p>
              </div>
              <div className="flex items-flex-end gap-2 h-28 justify-between">
                {MONTHLY_CALLS.map((item, idx) => {
                  const isLast = idx === MONTHLY_CALLS.length - 1;
                  const pct = (item.calls / MAX_CALLS) * 100;
                  return (
                    <div key={item.month} className="flex flex-col items-center gap-1 flex-1">
                      <span className="text-[9px] text-gray-400">{item.calls}</span>
                      <div className="w-full flex items-end" style={{ height: "80px" }}>
                        <div
                          className={`w-full rounded-t-sm ${isLast ? "bg-green-600" : "bg-green-100"}`}
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-400">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Donut — Call status breakdown */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center gap-4">
              <p className="text-xs font-medium text-black self-start">Call status breakdown</p>

              {/* SVG donut — pure SVG, no library needed */}
              <svg width="90" height="90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" fill="none" stroke="#dcfce7" strokeWidth="18" />
                <circle
                  cx="40" cy="40" r="30"
                  fill="none" stroke="#16a34a" strokeWidth="18"
                  strokeDasharray="160 29" strokeDashoffset="47"
                  transform="rotate(-90 40 40)"
                />
                <circle
                  cx="40" cy="40" r="30"
                  fill="none" stroke="#fecaca" strokeWidth="18"
                  strokeDasharray="29 160" strokeDashoffset="-113"
                  transform="rotate(-90 40 40)"
                />
              </svg>

              <div className="flex flex-col gap-2 w-full">
                {[
                  { label: "Answered", pct: "85%", color: "bg-green-500" },
                  { label: "Missed",   pct: "15%", color: "bg-red-200 border border-red-400" },
                ].map((l) => (
                  <div key={l.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${l.color}`} />
                      {l.label}
                    </div>
                    <span className="font-medium text-black">{l.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Row 3 — Line Chart + Jobs Bar Chart ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Line Chart — Leads per month */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-xs font-medium text-black mb-4">Leads captured per month</p>

              {/* Pure SVG line chart — replace points with real data */}
              <div className="h-20 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 80"
                  preserveAspectRatio="none"
                >
                  {/* Area fill */}
                  <polyline
                    points={`${LINE_POINTS} 300,80 0,80`}
                    fill="#16a34a"
                    fillOpacity="0.08"
                    stroke="none"
                  />
                  {/* Line */}
                  <polyline
                    points={LINE_POINTS}
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Dots */}
                  {[
                    [0, 65], [50, 55], [100, 60],
                    [150, 38], [200, 45], [250, 25], [300, 15],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#16a34a" />
                  ))}
                </svg>
              </div>

              <div className="flex justify-between mt-1">
                {MONTHLY_CALLS.map((d) => (
                  <span key={d.month} className="text-[9px] text-gray-400">{d.month}</span>
                ))}
              </div>
            </div>

            {/* Bar Chart — Jobs booked per month */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-xs font-medium text-black mb-4">Jobs booked per month</p>
              <div className="flex items-flex-end gap-2 h-20 justify-between">
                {MONTHLY_JOBS.map((item, idx) => {
                  const isLast = idx === MONTHLY_JOBS.length - 1;
                  const pct = (item.jobs / MAX_JOBS) * 100;
                  return (
                    <div key={item.month} className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-full flex items-end" style={{ height: "65px" }}>
                        <div
                          className={`w-full rounded-t-sm ${isLast ? "bg-green-600" : "bg-green-100"}`}
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-400">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Monthly Breakdown Table ── */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">

            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-medium text-black">Monthly breakdown</p>
              {/*
                Export CSV button — onClick tum likhna
                MONTHLY_TABLE data ko CSV mein convert karo aur download karo
              */}
              <button
                type="button"
                className="text-xs text-green-600 hover:underline"
              >
                Export CSV
              </button>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-4 gap-3 px-5 py-2 bg-gray-50 border-b border-gray-100">
              {["Month", "Total calls", "Leads", "Jobs booked"].map((col) => (
                <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
              ))}
            </div>

            {/* Rows — replace MONTHLY_TABLE with API data */}
            {MONTHLY_TABLE.map((row) => (
              <div
                key={row.month}
                className="grid grid-cols-4 gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs font-medium text-black">{row.month}</span>
                <span className="text-xs text-gray-400">{row.calls}</span>
                <span className="text-xs text-gray-400">{row.leads}</span>
                <span className="text-xs text-gray-400">{row.jobs}</span>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
