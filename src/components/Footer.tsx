import { motion } from 'motion/react';
import { Plane, Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 relative overflow-hidden text-slate-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF5722] via-[#FFB300] to-[#2563EB]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF5722]/30">
                <Plane className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                RE360
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">
              Your ultimate travel partner. We combine smart technology with human expertise to deliver seamless, unforgettable journeys across the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF5722] hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF5722] hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF5722] hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#destinations" className="text-slate-400 hover:text-[#FFB300] font-medium transition-colors text-sm">Destinations</a></li>
              <li><a href="#packages" className="text-slate-400 hover:text-[#FFB300] font-medium transition-colors text-sm">Travel Packages</a></li>
              <li><a href="#visa" className="text-slate-400 hover:text-[#FFB300] font-medium transition-colors text-sm">Visa Assistance</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-[#FFB300] font-medium transition-colors text-sm">Customer Reviews</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#FFB300] font-medium transition-colors text-sm">Installment Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB300] shrink-0" />
                <span className="text-slate-400 text-sm font-medium">123 Travel Avenue, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFB300] shrink-0" />
                <span className="text-slate-400 text-sm font-medium">+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFB300] shrink-0" />
                <span className="text-slate-400 text-sm font-medium">hello@re360.travel</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4 font-medium">Subscribe for exclusive deals and travel inspiration.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#2563EB] text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} RE360 Travel Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
