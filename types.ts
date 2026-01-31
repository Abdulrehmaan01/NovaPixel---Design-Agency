// Fix: Import React to resolve the missing 'React' namespace for React.ReactNode.
import React from 'react';

export interface Feature {
  title: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  delivery: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}