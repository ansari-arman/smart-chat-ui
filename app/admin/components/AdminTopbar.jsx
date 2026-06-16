export default function AdminTopbar({ title = "Admin Overview", subtitle = "Platform-wide statistics & management" }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 flex-shrink-0">
      <div>
        <h1 className="text-sm font-medium text-black">{title}</h1>
        <p className="text-[10px] text-gray-400">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 fill-gray-400" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-green-500 border border-white" />
        </div>
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-medium">
          AU
        </div>
      </div>
    </header>
  );
}
