import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: "Chinedu Okafor",
    role: "Entrepreneur",
    content: "RE360 handled my Dubai trip flawlessly. From the visa processing to the hotel booking, everything was automated and seamless.",
  },
  {
    id: 2,
    name: "Aisha Bello",
    role: "Designer",
    content: "I've used many agencies, but RE360 is on another level. Their installment payment plan made my Maldives dream vacation a reality.",
  },
  {
    id: 3,
    name: "Tunde Bakare",
    role: "Director",
    content: "The AI trip planner suggested a customized itinerary for Tokyo that I wouldn't have thought of. Exceptional service.",
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-medium text-gray-500 tracking-[0.2em] uppercase mb-4">Client Feedback</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase">
            Trusted <span className="font-medium">Globally</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 bg-black hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[80px]">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white text-xs font-medium uppercase tracking-widest mb-1">{testimonial.name}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
