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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#FF5722] selection:text-white relative">
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
  );
}
