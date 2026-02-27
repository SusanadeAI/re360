import { useState } from 'react';
import { Search, Plane, Building, Map, Calendar, Users } from 'lucide-react';

export default function SearchSystem() {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Building },
    { id: 'tours', label: 'Tours', icon: Map },
  ];

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-6 md:p-8 max-w-5xl mx-auto border border-slate-100">
      {/* Tabs */}
      <div className="flex space-x-2 mb-8 border-b border-slate-100 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Origin / Destination */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
          <div className="relative group">
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">From</label>
            <div className="relative">
              <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Lagos (LOS)" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>
          <div className="relative group">
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">To</label>
            <div className="relative">
              <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transform rotate-90" />
              <input 
                type="text" 
                placeholder="Dubai (DXB)" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="relative group">
          <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Dates</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Oct 12 - Oct 20" 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Passengers & Search */}
        <div className="flex gap-4">
          <div className="relative group flex-1">
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Travelers</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 font-semibold appearance-none focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>Family (4)</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button className="h-[58px] px-6 bg-[#FF5722] text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
