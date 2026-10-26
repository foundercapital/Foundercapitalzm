import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand Logo */}
          <a href="#" className="flex items-center shrink-0 focus:outline-none">
            <img 
              src="/assets/aistudio/Founder_Capital_Landscape_1740de1f.jpeg" 
              alt="Founder Capital" 
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Zone 2: Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Services & Pricing
            </a>
            <a href="#how-it-works" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              How It Works
            </a>
            <a href="#booking" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Payment & Booking
            </a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-lg shadow-xs transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Mentorship</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-3 space-y-2 text-sm font-medium shadow-md">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-md"
          >
            Services & Pricing
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-md"
          >
            How It Works
          </a>
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-emerald-700 font-semibold hover:bg-emerald-50 rounded-md"
          >
            Book & Pay (MoMo)
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-md"
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
};
