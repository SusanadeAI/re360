import { motion } from 'motion/react';
import SearchSystem from './SearchSystem';

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-end pb-12 md:pb-24 pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://picsum.photos/seed/architecture/1920/1080" 
          alt="Architecture" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-12"
        >
          <div className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/30"></span>
            Next-Gen Travel
          </div>
          
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-6 leading-[1.1] uppercase">
            Redefining <br />
            <span className="font-medium">Global Travel.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed">
            Experience seamless journeys powered by intelligent automation. Curated destinations, effortless booking, and uncompromising standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <SearchSystem />
        </motion.div>
      </div>
    </div>
  );
}
