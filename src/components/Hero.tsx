import React from 'react';
import { ArrowRight, Award, ShieldCheck, Zap } from 'lucide-react';
import { RECIPIENT_INFO } from '../data/content';

interface HeroProps {
  onSelectService: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 bg-white border-b border-slate-200/80">
      {/* Subtle green ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Quiet Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <span>Virtual Mentorship</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Lusaka, Zambia</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Google Meet</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18]" style={{ textWrap: 'balance' }}>
              Practical Business & Funding Guidance from a Founder Who Has Walked the Path.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              1-on-1 virtual advisory on business scaling, winning grant capital, international fellowships, and pitch deck readiness—tailored for Zambian entrepreneurs.
            </p>

            {/* Founder Authority Snapshot Strip */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Muzalema Mwanza</span>
                  <span className="text-slate-500 text-[11px]">Founder, Safe Motherhood</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Global Grant Funding</span>
                  <span className="text-slate-500 text-[11px]">Secured non-dilutive capital</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Global Fellowships</span>
                  <span className="text-slate-500 text-[11px]">International pitch finalist</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#booking"
                onClick={() => onSelectService()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-lg shadow-xs transition-all"
              >
                <span>Book a Mentorship Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
              >
                View Services & Pricing (ZMW)
              </a>
            </div>

            {/* Zambian Payment Acceptance Bar */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Instant Mobile Money:</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Airtel Money (*115#)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> MTN MoMo (*303#)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Zamtel Money (*444#)
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/founder_mentorship_session_1793018306685.jpg"
                alt="Founder Capital 1-on-1 virtual business mentorship session with Muzalema Mwanza"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 p-3 rounded-xl shadow-xs">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Muzalema Mwanza</p>
                    <p className="text-slate-500 text-[11px]">Global Award-Winning Zambian Founder</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-700 font-bold block text-xs">1-on-1 Virtual</span>
                    <span className="text-slate-500 text-[10px]">Google Meet / Zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
