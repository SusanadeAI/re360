import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Dubai Architecture",
    duration: "6 Days",
    price: "₦850,000",
    image: "https://picsum.photos/seed/dubai2/800/1000"
  },
  {
    id: 2,
    title: "Tokyo Minimalist",
    duration: "10 Days",
    price: "₦1,500,000",
    image: "https://picsum.photos/seed/tokyo2/800/1000"
  },
  {
    id: 3,
    title: "Nordic Retreat",
    duration: "7 Days",
    price: "₦1,200,000",
    image: "https://picsum.photos/seed/nordic/800/1000"
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-xs font-medium text-gray-500 tracking-[0.2em] uppercase mb-4">Curated Experiences</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase">
              Featured <span className="font-medium">Journeys</span>
            </h2>
          </div>
          <button className="text-xs font-medium uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors self-start md:self-auto">
            View All Packages
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 overflow-hidden bg-black"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-2">{pkg.duration}</div>
                    <h3 className="text-2xl font-light uppercase tracking-tight mb-1">{pkg.title}</h3>
                    <div className="text-sm text-gray-300">{pkg.price}</div>
                  </div>
                  <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
