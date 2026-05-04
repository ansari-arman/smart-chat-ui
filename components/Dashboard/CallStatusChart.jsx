const LEGEND = [
  { label: "Answered", pct: "85%", color: "bg-green-500" },
  { label: "Missed",   pct: "15%", color: "bg-red-200" },
];

export default function CallStatusChart() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 min-w-[170px]">
      <p className="text-xs font-medium text-black self-start">Call status</p>

      {/* SVG donut — no library needed */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* grey track */}
        <circle cx="40" cy="40" r="30" fill="none" stroke="#dcfce7" strokeWidth="18" />
        {/* green arc = 85% → dasharray(188.5 * 0.85) ≈ 160  remaining ≈ 28 */}
        <circle
          cx="40" cy="40" r="30"
          fill="none"
          stroke="#16a34a"
          strokeWidth="18"
          strokeDasharray="160 29"
          strokeDashoffset="47"
          transform="rotate(-90 40 40)"
        />
        {/* red arc = 15% */}
        <circle
          cx="40" cy="40" r="30"
          fill="none"
          stroke="#fecaca"
          strokeWidth="18"
          strokeDasharray="29 160"
          strokeDashoffset="-113"
          transform="rotate(-90 40 40)"
        />
      </svg>

      {/* Legend */}
      <div className="flex flex-col gap-2 w-full">
        {LEGEND.map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-[10px] text-gray-500">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${l.color}`} />
            {l.label} — {l.pct}
          </div>
        ))}
      </div>
    </div>
  );
}
