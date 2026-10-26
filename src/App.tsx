/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ServicesPricing } from './components/ServicesPricing';
import { BookingPaymentFlow } from './components/BookingPaymentFlow';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('funding-applications');

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Top Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Streamlined Main Content */}
      <main className="flex-1">
        <Hero onSelectService={scrollToBooking} />
        
        <HowItWorks />
        
        <ServicesPricing
          selectedServiceId={selectedServiceId}
          onSelectService={(id) => {
            setSelectedServiceId(id);
            scrollToBooking(id);
          }}
        />

        <BookingPaymentFlow
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer onBookClick={() => scrollToBooking()} />

    </div>
  );
}
