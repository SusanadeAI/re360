import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-xl tracking-widest uppercase">
              RE360
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">Destinations</a>
            <a href="#packages" className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">Packages</a>
            <a href="#visa" className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">Visa Services</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
              Login
            </button>
            <button className="bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
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
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#destinations" className="block text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest">Destinations</a>
            <a href="#packages" className="block text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest">Packages</a>
            <a href="#visa" className="block text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest">Visa Services</a>
            <button className="w-full text-left text-sm font-medium text-white uppercase tracking-widest pt-4 border-t border-white/10">Login / Register</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
