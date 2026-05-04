const MONTHLY_DATA = [
  { month: "Jan", calls: 45 },
  { month: "Feb", calls: 60 },
  { month: "Mar", calls: 40 },
  { month: "Apr", calls: 75 },
  { month: "May", calls: 55 },
  { month: "Jun", calls: 80 },
  { month: "Jul", calls: 90 },
];

const MAX = Math.max(...MONTHLY_DATA.map((d) => d.calls));

export default function CallVolumeChart() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex-1">
      <p className="text-xs font-medium text-black mb-4">Monthly call volume</p>

      <div className="flex items-flex-end gap-2 h-24 justify-between">
        {MONTHLY_DATA.map((item, idx) => {
          const isLast = idx === MONTHLY_DATA.length - 1;
          const heightPct = (item.calls / MAX) * 100;
          return (
            <div key={item.month} className="flex flex-col items-center gap-1 flex-1">
              <div className="w-full flex items-end" style={{ height: "80px" }}>
                <div
                  className={`w-full rounded-t-sm transition-all ${isLast ? "bg-green-600" : "bg-green-100"}`}
                  style={{ height: `${heightPct}%` }}
                />
              </div>
              <span className="text-[9px] text-gray-400">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
