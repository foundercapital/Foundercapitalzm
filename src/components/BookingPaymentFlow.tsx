import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  Send, 
  ShieldCheck, 
  Calendar, 
  User
} from 'lucide-react';
import { SERVICES_DATA, MOBILE_MONEY_PROVIDERS, RECIPIENT_INFO } from '../data/content';
import { MobileMoneyProvider, BookingFormData } from '../types';

interface BookingPaymentFlowProps {
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
}

export const BookingPaymentFlow: React.FC<BookingPaymentFlowProps> = ({
  selectedServiceId,
  onServiceChange,
}) => {
  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    businessName: '',
    businessStage: 'early_revenue',
    serviceId: selectedServiceId,
    preferredDate: '',
    preferredTimeSlot: 'morning',
    paymentProvider: 'airtel',
    transactionRef: '',
    challengeNote: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
  }, [selectedServiceId]);

  const provider = MOBILE_MONEY_PROVIDERS[formData.paymentProvider];

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Enter full name';
    if (!formData.whatsappNumber.trim()) {
      errors.whatsappNumber = 'Enter WhatsApp number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Enter valid email';
    }
    if (!formData.businessName.trim()) {
      errors.businessName = 'Enter business name';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateWhatsAppUrl = () => {
    const timeSlotLabel = 
      formData.preferredTimeSlot === 'morning' ? 'Morning (09:00 - 12:00 CAT)' :
      formData.preferredTimeSlot === 'afternoon' ? 'Afternoon (13:00 - 16:00 CAT)' :
      'Evening (17:00 - 19:30 CAT)';

    const refText = formData.transactionRef.trim()
      ? `\n*Transaction Reference:* ${formData.transactionRef}`
      : '\n*(Payment SMS screenshot attached)*';

    const message = 
`*NEW MENTORSHIP BOOKING - FOUNDER CAPITAL*
----------------------------------------
*Founder:* ${formData.fullName}
*WhatsApp Phone:* ${formData.whatsappNumber}
*Email:* ${formData.email}
*Business:* ${formData.businessName}

*Service:* ${currentService.title} (${currentService.duration})
*Amount Due:* ZMW ${currentService.priceZMW.toLocaleString()}
*Payment Method:* ${provider.name}
*Recipient:* ${RECIPIENT_INFO.fullName} (${RECIPIENT_INFO.phoneDisplay})
${refText}

*Preferred Date:* ${formData.preferredDate || 'Earliest Available'}
*Preferred Time:* ${timeSlotLabel}

*Note/Focus:*
${formData.challengeNote ? formData.challengeNote : 'Ready for our session!'}`;

    return `https://wa.me/${RECIPIENT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="booking" className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
            Zambian Mobile Money Checkout
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Reserve & Pay via Mobile Money
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Fill your details, pay via Airtel Money, MTN MoMo, or Zamtel, and submit proof on WhatsApp for quick confirmation.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Compact Details Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-600" />
              <span>Step 1: Booking Details</span>
            </h3>

            {/* Service Selector */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Selected Mentorship Service
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => {
                  const id = e.target.value;
                  onServiceChange(id);
                  setFormData((prev) => ({ ...prev, serviceId: id }));
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-emerald-600"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} — ZMW {srv.priceZMW.toLocaleString()} ({srv.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kondwani Tembo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-slate-50 border ${
                    formErrors.fullName ? 'border-red-500' : 'border-slate-300'
                  } rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 097... or +260 96..."
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className={`w-full bg-slate-50 border ${
                    formErrors.whatsappNumber ? 'border-red-500' : 'border-slate-300'
                  } rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600`}
                />
              </div>
            </div>

            {/* Email & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  Email (For Google Meet Invite) *
                </label>
                <input
                  type="email"
                  placeholder="e.g. founder@venture.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-slate-50 border ${
                    formErrors.email ? 'border-red-500' : 'border-slate-300'
                  } rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  Business / Project Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lusaka AgriTech"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className={`w-full bg-slate-50 border ${
                    formErrors.businessName ? 'border-red-500' : 'border-slate-300'
                  } rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600`}
                />
              </div>
            </div>

            {/* Preferred Date & Time Window */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-700 mb-1">
                  Time Window (CAT)
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                >
                  <option value="morning">Morning (09:00 - 12:00 CAT)</option>
                  <option value="afternoon">Afternoon (13:00 - 16:00 CAT)</option>
                  <option value="evening">Evening (17:00 - 19:30 CAT)</option>
                </select>
              </div>
            </div>

            {/* Challenge Note */}
            <div>
              <label className="block text-[11px] font-medium text-slate-700 mb-1">
                Main Goal for this Session (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need feedback on our grant proposal budget and theory of change..."
                value={formData.challengeNote}
                onChange={(e) => setFormData({ ...formData, challengeNote: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
              />
            </div>

          </div>

          {/* Right Column: Payment Instructions & WhatsApp Proof */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                Step 2: Pay & Submit Proof
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Mobile Money Payment Details
              </h3>
            </div>

            {/* Provider Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5">
              {(['airtel', 'mtn', 'zamtel'] as MobileMoneyProvider[]).map((provKey) => {
                const p = MOBILE_MONEY_PROVIDERS[provKey];
                const isActive = formData.paymentProvider === provKey;
                return (
                  <button
                    key={provKey}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentProvider: provKey })}
                    className={`py-2 px-1.5 rounded-lg border text-center transition-all ${
                      isActive
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-2xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs block leading-tight">{p.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{p.ussd}</span>
                  </button>
                );
              })}
            </div>

            {/* Recipient Details Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              
              {/* Amount */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Exact Amount</span>
                  <span className="text-lg font-extrabold text-emerald-700 tabular-nums">
                    ZMW {currentService.priceZMW.toLocaleString()}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(currentService.priceZMW.toString(), 'amount')}
                  className="px-2 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-200 flex items-center gap-1 transition-colors"
                >
                  {copiedField === 'amount' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'amount' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Number */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Recipient Number</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    {RECIPIENT_INFO.phoneDisplay}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RECIPIENT_INFO.phoneRaw, 'phone')}
                  className="px-2 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-200 flex items-center gap-1 transition-colors"
                >
                  {copiedField === 'phone' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Name */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Recipient Name</span>
                  <span className="text-xs font-bold text-slate-900">
                    {RECIPIENT_INFO.fullName}
                  </span>
                  <span className="text-[10px] text-emerald-600 block">✓ Verified Account Name</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(RECIPIENT_INFO.fullName, 'name')}
                  className="px-2 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-200 flex items-center gap-1 transition-colors"
                >
                  {copiedField === 'name' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'name' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

            {/* USSD Quick Steps */}
            <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">
                Quick Instructions for {provider.name}:
              </span>
              <p>Dial <strong>{provider.ussd}</strong> → Send Money → Number: <strong>0962807622</strong> ({RECIPIENT_INFO.fullName}) → Amount: <strong>ZMW {currentService.priceZMW}</strong> → Enter PIN.</p>
            </div>

            {/* Reference Input */}
            <div>
              <label className="block text-[11px] font-medium text-slate-700 mb-1">
                SMS Transaction ID / Reference (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. MP261026.0945 or Airtel Reference"
                value={formData.transactionRef}
                onChange={(e) => setFormData({ ...formData, transactionRef: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-mono"
              />
            </div>

            {/* WhatsApp Proof Button */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!validateForm()) {
                  e.preventDefault();
                  alert('Please enter your Name, WhatsApp number, Email, and Business Name in Step 1 first.');
                }
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Proof via WhatsApp</span>
            </a>

            <div className="flex items-start gap-1.5 text-[10px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Manual payment verification before Google Meet invite within 2 hours. We never ask for your PIN.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
