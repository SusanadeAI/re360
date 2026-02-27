import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Chinedu Okafor",
    role: "Tech Entrepreneur",
    content: "RE360 handled my Dubai trip flawlessly. From the visa processing to the hotel booking, everything was automated and seamless. The WhatsApp updates were a lifesaver.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    color: "bg-blue-50"
  },
  {
    id: 2,
    name: "Aisha Bello",
    role: "Fashion Designer",
    content: "I've used many agencies in Lagos, but RE360 is on another level. Their installment payment plan made my Maldives dream vacation a reality without breaking the bank.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    color: "bg-orange-50"
  },
  {
    id: 3,
    name: "Tunde Bakare",
    role: "Investment Banker",
    content: "The AI trip planner suggested a customized itinerary for Tokyo that I wouldn't have thought of. The 24/7 customer support was incredibly responsive when I needed to change my flight.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    color: "bg-teal-50"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Loved by <span className="text-[#FF5722]">Travelers</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See what our travelers have to say about their journey with RE360.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bento-card p-8 ${testimonial.color} border border-slate-100 relative group`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-900/5 group-hover:text-slate-900/10 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-8 relative z-10 text-lg font-medium leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-200/60 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-slate-900 font-extrabold">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
