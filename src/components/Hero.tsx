import { motion } from 'motion/react';
import SearchSystem from './SearchSystem';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#FF5722] text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722]"></span>
              </span>
              Your Ultimate Travel Partner
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Explore the <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Beautiful</span> World.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Discover breathtaking destinations, exclusive packages, and seamless visa assistance. Your dream vacation starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#FF5722] text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1">
                Plan a Trip
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-md hover:shadow-lg">
                View Destinations
              </button>
            </div>
          </motion.div>

          {/* Bento Grid Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4 h-[500px] lg:h-[600px]"
          >
            <div className="space-y-4 h-full flex flex-col">
              <div className="relative rounded-[2rem] overflow-hidden h-2/3 shadow-xl group">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" alt="Dubai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-900">
                  🇦🇪 Dubai
                </div>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden h-1/3 shadow-xl group">
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop" alt="Paris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-900">
                  🇫🇷 Paris
                </div>
              </div>
            </div>
            <div className="space-y-4 h-full flex flex-col pt-8">
              <div className="relative rounded-[2rem] overflow-hidden h-1/3 shadow-xl group">
                <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop" alt="Beach" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-900">
                  🇲🇻 Maldives
                </div>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden h-2/3 shadow-xl group">
                <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop" alt="Mountains" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-900">
                  🇨🇭 Swiss Alps
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Search System */}
        <div className="mt-12 lg:-mt-16 relative z-20">
          <SearchSystem />
        </div>
      </div>
    </div>
  );
}
