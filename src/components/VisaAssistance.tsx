import { motion } from 'motion/react';
import { FileText, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function VisaAssistance() {
  return (
    <section id="visa" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-[#0D9488] text-sm font-bold mb-6">
              Automated Processing
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Visa Applications, <br />
              <span className="text-[#0D9488]">Simplified.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-lg">
              Skip the long queues and confusing paperwork. Our AI-driven visa assistance platform analyzes your documents, predicts approval rates, and fast-tracks your application.
            </p>

            <div className="space-y-6">
              {[
                { icon: FileText, title: "Smart Document Checklist", desc: "Upload your passport and get an instant, personalized list of required documents." },
                { icon: Clock, title: "Real-time Tracking", desc: "Monitor your application status 24/7 through your personalized dashboard." },
                { icon: ShieldCheck, title: "98% Approval Rate", desc: "Our experts review every application before submission to ensure maximum success." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#0D9488] text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-1 flex items-center gap-2 group">
              Start Visa Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-[3rem] blur-3xl opacity-20" />
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">UK Visitor Visa</h3>
                  <p className="text-sm font-medium text-slate-500">Processing Time: 3-4 Weeks</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                  <span className="text-3xl">🇬🇧</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-bold mb-2">
                    <span className="text-slate-700">Document Verification</span>
                    <span className="text-[#0D9488] flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Completed</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-[#0D9488] h-3 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm font-bold mb-2">
                    <span className="text-slate-700">Biometrics Appointment</span>
                    <span className="text-[#FFB300]">Pending</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-[#FFB300] h-3 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-teal-50 rounded-2xl border border-teal-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#0D9488]" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">High Approval Probability</p>
                  <p className="text-sm font-medium text-slate-600">Based on your financial profile</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
