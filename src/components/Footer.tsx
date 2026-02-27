import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <span className="font-sans font-semibold text-xl tracking-widest uppercase text-white">
                RE360
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              The future of travel. Combining intelligent automation with human expertise to deliver seamless journeys.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-medium uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#destinations" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-wider">Destinations</a></li>
              <li><a href="#packages" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-wider">Packages</a></li>
              <li><a href="#visa" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-wider">Visa Assistance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-medium uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 text-xs uppercase tracking-wider">Lagos, Nigeria</li>
              <li className="text-gray-500 text-xs uppercase tracking-wider">+234 800 123 4567</li>
              <li className="text-gray-500 text-xs uppercase tracking-wider">hello@re360.travel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-medium uppercase tracking-widest mb-6">Newsletter</h4>
            <div className="relative border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs tracking-widest uppercase"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} RE360. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
