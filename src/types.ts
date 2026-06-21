/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface MemberTransformation {
  id: string;
  name: string;
  age: number;
  goal: string;
  duration: string;
  beforeWeight: string | number;
  afterWeight: string | number;
  beforeBodyFat?: string;
  afterBodyFat?: string;
  imageUrlBefore: string;
  imageUrlAfter: string;
  story: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  features: string[];
  isPopular: boolean;
  accentColor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  mobileNumber: string;
  fitnessGoal: string;
  preferredPlan: string;
  message?: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'joined';
}
