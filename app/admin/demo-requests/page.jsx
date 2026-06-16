'use client'
import AdminTopbar from "@/app/admin/components/AdminTopbar";
import { useState } from "react";

const DEMOS = [
  { id: 1, name: "Priya Sharma", email: "priya@hvac.com",    phone: "(555) 123-4567", company: "Fast Fix HVAC",     industry: "HVAC",       status: "new",       date: "May 7, 2026" },
  { id: 2, name: "David Kim",    email: "david@law.com",     phone: "(555) 234-5678", company: "Prime Law Firm",    industry: "Legal",      status: "contacted", date: "May 6, 2026" },
  { id: 3, name: "Nina Patel",   email: "nina@clinic.com",   phone: "(555) 345-6789", company: "City Dental Care",  industry: "Healthcare", status: "converted", date: "May 5, 2026" },
  { id: 4, name: "Carlos Rivera",email: "carlos@fix.com",    phone: "(555) 456-7890", company: "Quick Repairs Co",  industry: "Plumbing",   status: "new",       date: "May 5, 2026" },
  { id: 5, name: "Emma Wilson",  email: "emma@hvac.com",     phone: "(555) 567-8901", company: "Metro Home Svc",    industry: "Home Svc",   status: "new",       date: "May 4, 2026" },
  { id: 6, name: "Liam Brown",   email: "liam@law.com",      phone: "(555) 678-9012", company: "Elite Legal",       industry: "Legal",      status: "contacted", date: "May 3, 2026" },
];

const STATUS_STYLES = {
  new:       "bg-blue-50 text-blue-700",
  contacted: "bg-yellow-50 text-yellow-700",
  converted: "bg-green-50 text-green-700",
};

export default function AdminDemoRequestsPage() {
  let [selectValue,setSelectValue] = useState(DEMOS);

  async function handleSelectedValue(id,newValue){
    setSelectValue(newValue);
    let res = await fetch(`http://localhost:4000/leads/${id}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id,newValue})
    });
    let data = await res.json();
    console.log(data.message)
  }
  return (
    <>
      <AdminTopbar title="Demo Requests" subtitle="All incoming demo request submissions" />

      <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total requests", value: "87", color: "text-black" },
            { label: "New (unread)",   value: "14", color: "text-blue-600" },
            { label: "Converted",      value: "32", color: "text-green-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className={`text-xl font-medium ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-xs px-3 py-2 bg-white border border-gray-200 rounded-lg">
            <svg className="w-3.5 h-3.5 fill-gray-400 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="text" name="search" placeholder="Search name or email..." className="flex-1 text-xs text-black placeholder-gray-400 outline-none bg-transparent" />
          </div>
          {/* status filter — onChange tum likhna */}
          <select name="status" className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg outline-none">
            <option value="">All status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_130px_90px_100px_100px_90px] gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-100">
            {["Name", "Company", "Industry", "Phone", "Status", "Date"].map((col) => (
              <span key={col} className="text-[10px] font-medium text-gray-400">{col}</span>
            ))}
          </div>

          {DEMOS.map((d) => (
            <div key={d.id} className="grid grid-cols-[1fr_130px_90px_100px_100px_90px] gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors items-center">
              <div>
                <p className="text-xs font-medium text-black">{d.name}</p>
                <p className="text-[10px] text-gray-400">{d.email}</p>
              </div>
              <span className="text-xs text-gray-400 truncate">{d.company}</span>
              <span className="text-xs text-gray-400">{d.industry}</span>
              <span className="text-xs text-gray-400">{d.phone}</span>

              {/*
                Status dropdown — onChange tum likhna
                PATCH /api/admin/demo-requests/:id { status: newStatus }
              */}
              <select
                name="status"
                value={d.status}
                onChange={(e)=>{handleSelectedValue(3,e.target.value)}}
                className={`text-[10px] font-medium px-2 py-1 rounded-full border-0 outline-none cursor-pointer ${STATUS_STYLES[d.status]}`}
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
              </select>

              <span className="text-xs text-gray-400">{d.date}</span>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">Showing 1–10 of 87 requests</p>
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
