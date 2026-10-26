import { ServiceItem, ProviderDetail } from '../types';

export const RECIPIENT_INFO = {
  fullName: 'Muzalema Mwanza',
  phoneDisplay: '+260 962 807 622',
  phoneRaw: '260962807622',
  whatsappRaw: '260962807622',
  email: 'foundercapitalzm@gmail.com',
  location: 'Lusaka, Zambia (Virtual Sessions via Google Meet)',
  brand: 'Founder Capital',
  tagline: 'Practical Virtual Mentorship for Zambian Entrepreneurs',
  subBrand: 'Powered by Vigorish Media',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-idea',
    title: 'Your Business Idea',
    hookQuestion: 'Have a business idea but don’t know where to start?',
    shortDesc: 'Let’s talk about it. Sometimes all you need is someone experienced to help you think through your next steps.',
    duration: '45 mins',
    priceZMW: 550,
    ctaText: 'Book a Discovery Call',
    recommendedFor: 'Aspiring founders & early idea stage',
    deliverables: [
      'Validate your core customer and problem statement',
      'Identify immediate, low-cost next execution steps',
      'Avoid common, costly early-stage founder mistakes'
    ]
  },
  {
    id: 'funding-applications',
    title: 'Funding Applications',
    hookQuestion: 'Found a funding opportunity but struggling with the application?',
    shortDesc: 'Let’s review it together. Understand what the funder is looking for and present your business, experience, and impact clearly.',
    duration: '75 mins',
    priceZMW: 1250,
    ctaText: 'Book a Funding Session',
    recommendedFor: 'Founders actively applying for grants & capital',
    deliverables: [
      'Line-by-line review of your application draft & budget',
      'Framing your impact story to score high on evaluator rubrics',
      'Follow-up feedback on your finalized draft before submission'
    ],
    badge: 'Popular'
  },
  {
    id: 'pitch-to-me',
    title: 'Pitch to Me',
    hookQuestion: 'You’ve got a business idea. But can you convince someone to fund it?',
    shortDesc: 'Pitch it to me. I’ve delivered over 100 pitches and know what makes a presentation compelling. We will find weaknesses and prepare for tough questions.',
    duration: '75 mins',
    priceZMW: 1350,
    ctaText: 'Book a Pitch Session',
    recommendedFor: 'Founders preparing for investors & demo days',
    deliverables: [
      'Live mock pitch with timing and tough Q&A drilling',
      'Slide-by-slide deck feedback (problem, TAM, traction)',
      'Executive verbal delivery and presentation polish'
    ],
    badge: 'High Impact'
  },
  {
    id: 'fellowships',
    title: 'Fellowship Opportunities',
    hookQuestion: 'Ever thought about applying for Echoing Green or the Africa Prize?',
    shortDesc: 'Not sure where to start? Learn how to find global fellowship programmes, understand application criteria, and tell your story effectively.',
    duration: '60 mins',
    priceZMW: 950,
    ctaText: 'Book a Fellowship Call',
    recommendedFor: 'Zambian changemakers & innovators',
    deliverables: [
      'Identifying which global fellowships fit your background',
      'Structuring standout essay answers & personal narrative',
      'Interview preparation simulation with real evaluator scrutiny'
    ]
  },
  {
    id: 'know-your-numbers',
    title: 'Know Your Numbers',
    hookQuestion: 'Do you know how much your business actually makes?',
    shortDesc: 'Understand your costs, pricing, profit, and financial projections so you can make better business decisions and prepare for funding discussions.',
    duration: '60 mins',
    priceZMW: 750,
    ctaText: 'Book a Financial Session',
    recommendedFor: 'Entrepreneurs wanting real financial clarity',
    deliverables: [
      'Unit economics: true costs, gross margins & pricing',
      'Cash flow runway & separating business from personal money',
      'Simple, manageable spreadsheet tools for ongoing tracking'
    ]
  }
];

export const MOBILE_MONEY_PROVIDERS: Record<string, ProviderDetail> = {
  airtel: {
    id: 'airtel',
    name: 'Airtel Money',
    tagline: 'Instant mobile transfer',
    brandColor: '#E60000',
    ussd: '*115#',
    steps: [
      'Dial *115# on your Airtel phone',
      'Select Send Money → To Airtel Customer',
      'Enter number: 0962807622 (Muzalema Mwanza)',
      'Enter amount: ZMW {AMOUNT}',
      'Enter PIN to approve, then copy the SMS reference'
    ]
  },
  mtn: {
    id: 'mtn',
    name: 'MTN MoMo',
    tagline: 'Fast MoMo payment',
    brandColor: '#FFCC00',
    ussd: '*303#',
    steps: [
      'Dial *303# on your MTN phone',
      'Select Send Money (or Cross-Network to Airtel)',
      'Enter number: 0962807622 (Muzalema Mwanza)',
      'Enter amount: ZMW {AMOUNT}',
      'Enter MoMo PIN, then copy the SMS reference'
    ]
  },
  zamtel: {
    id: 'zamtel',
    name: 'Zamtel Money',
    tagline: 'Reliable mobile transfer',
    brandColor: '#009639',
    ussd: '*444#',
    steps: [
      'Dial *444# on your Zamtel phone',
      'Select Send Money → To Other Network / Airtel',
      'Enter number: 0962807622 (Muzalema Mwanza)',
      'Enter amount: ZMW {AMOUNT}',
      'Approve with PIN and keep SMS transaction ID'
    ]
  }
};

export const FAQ_DATA = [
  {
    q: 'How does payment and booking verification work?',
    a: 'Choose your session and send mobile money via Airtel (*115#), MTN (*303#), or Zamtel (*444#) to Muzalema Mwanza at +260 962 807 622. Click the WhatsApp button to submit your reference or screenshot. We manually verify payment and send your Google Meet invite within 2 hours.'
  },
  {
    q: 'Will Founder Capital ever ask for my Mobile Money PIN?',
    a: 'Never. You dial the USSD code on your own phone. We will never ask for, collect, or store your mobile money PIN.'
  },
  {
    q: 'Who conducts the mentorship sessions?',
    a: 'Every 1-on-1 session is led directly by Muzalema Mwanza (Founder of Safe Motherhood Alliance, Africa Prize shortlist, 100+ investor pitches delivered, international grant & fellowship recipient).'
  },
  {
    q: 'Can I reschedule if my availability changes?',
    a: 'Yes. With at least 12 hours notice via WhatsApp or email, you can reschedule your session at no extra charge.'
  }
];
