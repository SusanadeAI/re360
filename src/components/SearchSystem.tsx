import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchSystem() {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', label: 'Flights' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'tours', label: 'Tours' },
  ];

  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/20 w-full max-w-5xl">
      {/* Tabs */}
      <div className="flex border-b border-white/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 md:flex-none px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors ${
              activeTab === tab.id 
                ? 'bg-white text-black' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
        <div className="p-4">
          <label className="block text-[10px] font-medium text-gray-500 mb-2 uppercase tracking-widest">Origin</label>
          <input 
            type="text" 
            placeholder="Lagos (LOS)" 
            className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
          />
        </div>
        <div className="p-4">
          <label className="block text-[10px] font-medium text-gray-500 mb-2 uppercase tracking-widest">Destination</label>
          <input 
            type="text" 
            placeholder="Dubai (DXB)" 
            className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
          />
        </div>
        <div className="p-4">
          <label className="block text-[10px] font-medium text-gray-500 mb-2 uppercase tracking-widest">Dates</label>
          <input 
            type="text" 
            placeholder="Oct 12 - Oct 20" 
            className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <label className="block text-[10px] font-medium text-gray-500 mb-2 uppercase tracking-widest">Travelers</label>
            <select className="w-full bg-transparent text-white appearance-none focus:outline-none text-sm cursor-pointer">
              <option className="bg-black">1 Adult</option>
              <option className="bg-black">2 Adults</option>
              <option className="bg-black">Family (4)</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Action Area */}
      <div className="border-t border-white/20 p-4 flex justify-between items-center bg-white/5">
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="w-4 h-4 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors"></div>
            <span className="text-xs text-gray-400 group-hover:text-white uppercase tracking-wider">Direct Only</span>
          </label>
        </div>
        <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-gray-300 transition-colors">
          Search <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
