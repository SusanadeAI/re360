import { motion } from 'motion/react';
import { Menu, X, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF5722]/30">
              <Plane className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
              RE360
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-slate-100">
            <a href="#destinations" className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors">Destinations</a>
            <a href="#packages" className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors">Packages</a>
            <a href="#visa" className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors">Visa Services</a>
            <a href="#reviews" className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors">Reviews</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-[#2563EB] transition-colors px-4 py-2">
              Log in
            </button>
            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 bg-white p-2 rounded-full shadow-sm">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100"
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-semibold text-slate-700 hover:text-[#2563EB]">Destinations</a>
            <a href="#packages" className="block text-base font-semibold text-slate-700 hover:text-[#2563EB]">Packages</a>
            <a href="#visa" className="block text-base font-semibold text-slate-700 hover:text-[#2563EB]">Visa Services</a>
            <a href="#reviews" className="block text-base font-semibold text-slate-700 hover:text-[#2563EB]">Reviews</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button className="w-full text-center text-base font-semibold text-slate-700 py-3 rounded-xl bg-slate-50">Log in</button>
              <button className="w-full text-center text-base font-bold text-white py-3 rounded-xl bg-[#2563EB] shadow-lg shadow-blue-500/30">Book Now</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
