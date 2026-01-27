import React, { useState } from 'react';
import { 
  Users, FileText, CreditCard, Settings, 
  Search, Bell, LogOut, LayoutDashboard,
  TrendingUp, Download, CheckCircle, Eye, 
  XCircle, UserPlus, Shield, Database, MoreVertical
} from 'lucide-react';

export default function Dashboard() {
  // Logic to switch between views
  const [activeTab, setActiveTab] = useState('admissions');

  return (
    /* MAIN CONTAINER: Uses negative margin to tuck under the fixed Navbar */
    <div className="flex h-screen bg-slate-100 overflow-hidden -mt-24 md:-mt-32">
      
      {/* ----------------------------------------------------------------------
          CATEGORY: SIDEBAR NAVIGATION
          Purpose: Permanent access to all school departments.
      ----------------------------------------------------------------------- */}
      <aside className="w-64 bg-cia-black text-white flex flex-col shadow-2xl z-20">
        {/* Branding Area */}
        <div className="p-8 border-b border-white/5 flex flex-col items-center">
          <img src="/logo.png" alt="CIA Logo" className="h-16 mb-4 object-contain" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cia-yellow text-center leading-tight">
            Institutional Portal
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {[
            { id: 'admissions', label: 'Admissions', icon: <FileText size={18}/> },
            { id: 'students', label: 'Student Registry', icon: <Users size={18}/> },
            { id: 'finance', label: 'Finance & Fees', icon: <CreditCard size={18}/> },
            { id: 'settings', label: 'System Settings', icon: <Settings size={18}/> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-sm text-[10px] font-black uppercase transition-all tracking-wider ${
                activeTab === item.id 
                ? 'bg-cia-maroon text-white shadow-lg translate-x-1' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        {/* Exit Action */}
        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-[10px] font-black uppercase text-red-400 hover:bg-red-500/10 transition-all">
            <LogOut size={18}/> Logout Session
          </button>
        </div>
      </aside>

      {/* ----------------------------------------------------------------------
          CATEGORY: MAIN CONTENT & TOP HEADER
          Purpose: Dynamic workspace for the staff.
      ----------------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* TOP BAR: Search and Profile info */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
          <h2 className="text-[11px] font-black uppercase text-cia-black tracking-[0.2em]">
            Portal Root / <span className="text-cia-maroon">{activeTab}</span>
          </h2>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input 
                placeholder="Find records..." 
                className="bg-slate-50 border border-gray-200 pl-10 pr-4 py-2 text-[10px] font-bold rounded-full w-64 focus:border-cia-maroon outline-none transition-all" 
              />
            </div>
            <div className="flex gap-4 border-l border-gray-200 pl-6">
                <Bell size={18} className="text-gray-400 cursor-pointer hover:text-cia-maroon" />
                <div className="h-8 w-8 bg-cia-maroon text-white rounded-full flex items-center justify-center font-black text-[10px]">AD</div>
            </div>
          </div>
        </header>

        {/* WORKSPACE AREA */}
        <div className="p-8 max-w-[1400px] mx-auto w-full">

          {/* ----------------------------------------------------------------------
              CATEGORY: ADMISSIONS TAB (Applicants)
              Purpose: Reviewing new students who applied via the website.
          ----------------------------------------------------------------------- */}
          {activeTab === 'admissions' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-black text-cia-black uppercase leading-none">Admission Queue</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">New Enrollment Requests</p>
                </div>
                <button className="bg-cia-black text-white px-6 py-2 text-[10px] font-black uppercase hover:bg-cia-maroon transition-all">Export All</button>
              </div>

              <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-gray-200 text-[10px] font-black uppercase text-gray-500">
                    <tr>
                      <th className="p-4">App ID</th>
                      <th className="p-4">Student Name</th>
                      <th className="p-4">Desired Course</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-xs">
                    {[1, 2, 3].map((i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-all group">
                        <td className="p-4 font-mono text-gray-400">2026-APP-{i}0{i}</td>
                        <td className="p-4 font-bold text-cia-black">Applicant Name {i}</td>
                        <td className="p-4 text-gray-600">Diploma in Fashion Design</td>
                        <td className="p-4">
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[9px] font-black uppercase">Pending</span>
                        </td>
                        <td className="p-4 text-right flex justify-end gap-2">
                          <button className="p-2 text-cia-maroon hover:bg-red-50 rounded"><Eye size={16}/></button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded"><CheckCircle size={16}/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              CATEGORY: STUDENT REGISTRY TAB (Active)
              Purpose: Management of confirmed, official students.
          ----------------------------------------------------------------------- */}
          {activeTab === 'students' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-black text-cia-black uppercase">Active Registry</h3>
                <button className="bg-cia-maroon text-white px-6 py-2 text-[10px] font-black uppercase flex items-center gap-2">
                    <UserPlus size={14}/> Add Transfer Student
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[1,2,3,4,5,6].map(s => (
                   <div key={s} className="bg-white p-5 border border-gray-200 shadow-sm flex items-center gap-4 hover:border-cia-maroon transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-cia-maroon">S{s}</div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400">CIA-2026-00{s}</p>
                        <p className="font-black text-cia-black uppercase text-sm">Student Name {s}</p>
                        <p className="text-[9px] text-cia-maroon font-bold uppercase tracking-tighter">Music Performance</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              CATEGORY: FINANCE & FEES TAB
              Purpose: Tracking revenue, balances, and sponsorship payouts.
          ----------------------------------------------------------------------- */}
          {activeTab === 'finance' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-cia-maroon p-8 text-white shadow-xl flex flex-col justify-between">
                  <TrendingUp className="text-cia-yellow mb-4" size={28}/>
                  <div>
                    <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Revenue Collected</p>
                    <p className="text-4xl font-black">M142,500</p>
                  </div>
                </div>
                <div className="bg-white p-8 border border-gray-200 flex flex-col justify-between">
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Outstanding Balances</p>
                   <p className="text-4xl font-black text-red-600">M45,200</p>
                </div>
                <div className="bg-white p-8 border border-gray-200 flex flex-col justify-between">
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Sponsorship Pending</p>
                   <p className="text-4xl font-black text-cia-black">12 <span className="text-lg opacity-30 italic font-medium">Students</span></p>
                </div>
              </div>

              <div className="bg-white border rounded-sm shadow-sm overflow-hidden">
                <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase">Recent Transactions</span>
                    <button className="text-[10px] font-black text-cia-maroon flex items-center gap-1 uppercase underline"><Download size={14}/> Download Ledgers</button>
                </div>
                <table className="w-full text-left text-sm">
                   <thead className="bg-white border-b text-[10px] font-black uppercase text-gray-400">
                      <tr><th className="p-4">Student</th><th className="p-4">Type</th><th className="p-4">Amount</th><th className="p-4">Status</th></tr>
                   </thead>
                   <tbody className="divide-y">
                      <tr className="hover:bg-slate-50"><td className="p-4 font-bold">Thabo Letsie</td><td className="p-4 uppercase text-[10px]">Tuition</td><td className="p-4 font-black">M5,000</td><td className="p-4 text-green-600 font-black">CLEARED</td></tr>
                      <tr className="hover:bg-slate-50"><td className="p-4 font-bold">Mary Smith</td><td className="p-4 uppercase text-[10px]">Registration</td><td className="p-4 font-black">M1,500</td><td className="p-4 text-red-600 font-black">PARTIAL</td></tr>
                   </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              CATEGORY: SYSTEM SETTINGS TAB
              Purpose: Managing school database and app configuration.
          ----------------------------------------------------------------------- */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Sub-Category: Course Control */}
                  <div className="bg-white p-6 border border-gray-200 shadow-sm">
                     <h4 className="font-black uppercase text-xs mb-6 border-b pb-2 flex items-center gap-2">
                       <Shield size={16} className="text-cia-maroon"/> Intake Configuration
                     </h4>
                     <div className="space-y-3">
                        {['Diploma in Fashion', 'Music Production', 'Makeup Artistry'].map(c => (
                          <div key={c} className="flex justify-between items-center p-3 bg-slate-50 rounded">
                             <span className="text-[10px] font-black uppercase">{c}</span>
                             <button className="text-[10px] font-black text-blue-600">EDIT PRICE</button>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Sub-Category: Database Control */}
                  <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="font-black uppercase text-xs mb-6 border-b pb-2 flex items-center gap-2">
                        <Database size={16} className="text-cia-maroon"/> System Maintenance
                      </h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-4 leading-relaxed">
                        Last automated backup: 27 Jan 2026, 08:00 AM.
                      </p>
                    </div>
                    <button className="bg-cia-black text-white w-full py-4 text-[10px] font-black uppercase hover:bg-cia-maroon transition-all">
                      Export Full Database (.CSV)
                    </button>
                  </div>
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}