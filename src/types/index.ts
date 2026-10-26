export type MobileMoneyProvider = 'airtel' | 'mtn' | 'zamtel';

export interface ServiceItem {
  id: string;
  title: string;
  hookQuestion: string;
  shortDesc: string;
  duration: string;
  priceZMW: number;
  ctaText: string;
  recommendedFor: string;
  deliverables: string[];
  badge?: string;
}

export interface BookingFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  businessName: string;
  businessStage: 'idea' | 'early_revenue' | 'scaling' | 'grant_seeking';
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  paymentProvider: MobileMoneyProvider;
  transactionRef: string;
  challengeNote: string;
}

export interface ProviderDetail {
  id: MobileMoneyProvider;
  name: string;
  tagline: string;
  brandColor: string;
  ussd: string;
  steps: string[];
}
