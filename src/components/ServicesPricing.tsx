import React from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesPricingProps {
  onSelectService: (serviceId: string) => void;
  selectedServiceId?: string;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ 
  onSelectService, 
  selectedServiceId 
}) => {
  return (
    <section id="services" className="py-12 md:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
            Mentorship Sessions & Transparent Rates
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Focus Area
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Focused, private 1-on-1 virtual sessions via Google Meet. Transparent Zambian Kwacha pricing with simple mobile money checkout.
          </p>
        </div>

        {/* 5 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const isSelected = selectedServiceId === service.id;
            const isWide = index === 0; // First item or layout span

            return (
              <div
                key={service.id}
                className={`p-5 rounded-2xl transition-all border flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-emerald-50/50 border-emerald-500 ring-1 ring-emerald-500 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.duration}</span>
                    </span>

                    {service.badge && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Hook Question */}
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-emerald-800/90 italic mb-2">
                    "{service.hookQuestion}"
                  </p>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Fee in ZMW */}
                  <div className="py-2 px-3 rounded-lg bg-slate-50 border border-slate-200/80 mb-4 flex items-baseline justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">Session Fee:</span>
                    <span className="text-lg font-extrabold text-slate-900 tabular-nums">
                      ZMW {service.priceZMW.toLocaleString()}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1.5 mb-5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button with Specific Campaign CTA */}
                <a
                  href="#booking"
                  onClick={() => onSelectService(service.id)}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-slate-900 text-white hover:bg-emerald-600'
                  }`}
                >
                  <span>{isSelected ? 'Selected' : service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
