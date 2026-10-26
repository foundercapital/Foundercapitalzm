import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { RECIPIENT_INFO } from '../data/content';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      
      {/* Concise Closing CTA Banner */}
      <div className="border-b border-slate-200 py-10 md:py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Take the Next Step for Your Venture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Build a Funded, Resilient Enterprise?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Book your 1-on-1 virtual advisory session with Muzalema Mwanza. Simple local mobile money payment via Airtel, MTN, or Zamtel.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Book Your Session Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${RECIPIENT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <img 
              src="/assets/aistudio/Founder_Capital_Landscape_1740de1f.jpeg" 
              alt="Founder Capital" 
              className="h-8 w-auto object-contain"
            />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Founder Capital delivers practical 1-on-1 virtual mentorship for Zambian entrepreneurs on business growth, grant readiness, international fellowships, and pitch preparation.
            </p>
            <div className="text-xs text-slate-800 font-medium">
              <span className="text-slate-900 font-bold">Founder Capital</span> · Powered by <strong className="text-emerald-700 font-bold">Vigorish Media</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <a href="#services" className="hover:text-emerald-700 transition-colors">
                  Services & Rates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-700 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-emerald-700 transition-colors">
                  Payment & Booking
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-700 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contact & Payment Details
            </h4>
            <div className="space-y-1 text-xs text-slate-600">
              <p><strong className="text-slate-700">Recipient:</strong> {RECIPIENT_INFO.fullName}</p>
              <p><strong className="text-slate-700">Mobile Money:</strong> {RECIPIENT_INFO.phoneDisplay}</p>
              <p><strong className="text-slate-700">Networks:</strong> Airtel (*115#) · MTN (*303#) · Zamtel (*444#)</p>
              <p><strong className="text-slate-700">Email:</strong> {RECIPIENT_INFO.email}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Founder Capital. Powered by Vigorish Media. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/founder-capital-export.html"
              download="founder-capital-export.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
            >
              Standalone HTML File
            </a>
            <span aria-hidden="true">·</span>
            <span>Lusaka, Zambia</span>
            <span aria-hidden="true">·</span>
            <span>Google Meet Delivery</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
