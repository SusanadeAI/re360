import { motion } from 'motion/react';
import { Star, MapPin, Clock } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Dubai Luxury Escape",
    location: "United Arab Emirates",
    duration: "6 Days / 5 Nights",
    price: "₦850,000",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Maldives Honeymoon",
    location: "Maldives",
    duration: "7 Days / 6 Nights",
    price: "₦1,200,000",
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop",
    tag: "Romantic"
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "10 Days / 9 Nights",
    price: "₦1,500,000",
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
    tag: "Adventure"
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Popular <span className="text-[#2563EB]">Destinations</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Handpicked travel packages designed for the modern explorer. Complete with flights, accommodation, and automated visa processing.
            </p>
          </div>
          <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-bold hover:bg-slate-200 transition-colors self-start md:self-auto">
            View All Packages
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bento-card group cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  {pkg.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#FFB300] fill-current" /> {pkg.rating} ({pkg.reviews})
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 font-medium">
                  <MapPin className="w-4 h-4 text-[#FF5722]" /> {pkg.location}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">{pkg.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-6 bg-slate-50 w-fit px-3 py-1.5 rounded-lg border border-slate-100">
                  <Clock className="w-4 h-4 text-[#2563EB]" /> {pkg.duration}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Starting from</div>
                    <div className="text-2xl font-extrabold text-slate-900">{pkg.price}</div>
                  </div>
                  <button className="px-6 py-3 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5">
                    Book
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
