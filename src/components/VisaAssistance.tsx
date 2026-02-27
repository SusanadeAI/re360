import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function VisaAssistance() {
  return (
    <section id="visa" className="py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center"
          >
            <div className="text-xs font-medium text-gray-500 tracking-[0.2em] uppercase mb-6">Visa Processing</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-8">
              Frictionless <br />
              <span className="font-medium">Borders</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
              Our proprietary systems analyze your documents, predict approval rates, and fast-track your application. Skip the queues and let our experts handle the complexity.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { title: "Document Verification", desc: "Automated checklist and real-time validation." },
                { title: "Status Tracking", desc: "Monitor your application progress 24/7." },
                { title: "Expert Review", desc: "Final checks by seasoned immigration consultants." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="text-xs font-mono text-gray-500 mt-1">0{idx + 1}</div>
                  <div>
                    <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest hover:text-gray-400 transition-colors group w-fit">
              Start Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 md:p-16 bg-white/[0.02] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] opacity-10 grayscale mix-blend-overlay" />
            
            <div className="relative z-10 bg-black border border-white/10 p-8 w-full max-w-md mx-auto">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white mb-1">UK Visitor Visa</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Est. Time: 3-4 Weeks</p>
                </div>
                <div className="text-2xl grayscale">🇬🇧</div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest mb-3">
                    <span className="text-gray-400">Document Review</span>
                    <span className="text-white">Completed</span>
                  </div>
                  <div className="w-full bg-white/10 h-[1px]">
                    <div className="bg-white h-[1px] w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest mb-3">
                    <span className="text-gray-400">Biometrics</span>
                    <span className="text-gray-500">Pending</span>
                  </div>
                  <div className="w-full bg-white/10 h-[1px]">
                    <div className="bg-white h-[1px] w-1/3"></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 border border-white/10 bg-white/5 flex items-center gap-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white mb-1">High Probability</p>
                  <p className="text-[10px] text-gray-500">Based on financial profile</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
