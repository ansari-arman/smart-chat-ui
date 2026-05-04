const STATS = [
  {
    label: "Total calls",
    value: "1,284",
    change: "+12% this month",
    up: true,
  },
  {
    label: "Calls answered",
    value: "1,091",
    change: "85% answer rate",
    up: true,
  },
  {
    label: "Missed calls",
    value: "193",
    change: "15% miss rate",
    up: false,
  },
  {
    label: "Leads captured",
    value: "347",
    change: "+8% this month",
    up: true,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="bg-white border border-gray-100 rounded-xl px-4 py-3"
        >
          <p className="text-xs text-gray-400 mb-1.5">{s.label}</p>
          <p className="text-xl font-medium text-black">{s.value}</p>
          <p className={`text-[10px] mt-1 flex items-center gap-1 ${s.up ? "text-green-600" : "text-red-500"}`}>
            {s.up ? (
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5z" />
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            )}
            {s.change}
          </p>
        </div>
      ))}
    </div>
  );
}
