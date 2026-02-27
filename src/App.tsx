/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import VisaAssistance from './components/VisaAssistance';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      {/* Global Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-4 md:grid-cols-12 gap-0 px-4 sm:px-6 lg:px-8 h-full opacity-[0.15]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-white/20 h-full hidden md:block"></div>
          ))}
          <div className="border-r border-white/20 h-full hidden md:block absolute right-4 sm:right-6 lg:right-8"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Packages />
          <VisaAssistance />
          <Testimonials />
        </main>
        <Footer />
        <AIChat />
      </div>
    </div>
  );
}
