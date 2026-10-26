import React from 'react';
import { Calendar, Smartphone, MessageSquare, Video, CheckCircle2, Award } from 'lucide-react';
import { RECIPIENT_INFO } from '../data/content';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Select Session',
      desc: 'Pick your mentorship focus: grant funding, growth, fellowship, or pitch prep.',
      icon: Calendar,
    },
    {
      step: '02',
      title: 'Send Mobile Money',
      desc: `Send exact payment via Airtel (*115#), MTN (*303#), or Zamtel (*444#) to ${RECIPIENT_INFO.phoneDisplay}.`,
      icon: Smartphone,
    },
    {
      step: '03',
      title: 'Submit via WhatsApp',
      desc: 'Click our instant WhatsApp button to send your payment reference or screenshot.',
      icon: MessageSquare,
    },
    {
      step: '04',
      title: 'Join Google Meet',
      desc: 'Receive your verified Google Meet calendar invite within 2 hours.',
      icon: Video,
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Simple 4-Step Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              From Selection to Virtual Session
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Pay safely with local mobile money. Human verification ensures zero double-billing and instant scheduling.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    STEP {item.step}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compact Founder Authority Callout (Combined instead of full extra section) */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">
                Mentored directly by Muzalema Mwanza (Safe Motherhood Alliance)
              </span>
              <span className="text-slate-500 text-[11px]">
                Royal Academy of Engineering Africa Prize shortlisted · Raised global equity-free grants · International pitch finalist.
              </span>
            </div>
          </div>
          <a 
            href="#booking"
            className="text-emerald-700 font-bold hover:underline shrink-0 text-xs"
          >
            Book your session now &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
