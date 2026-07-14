export interface Template {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  tag: "new" | "free" | null;
  image: string;
  href: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  avatar: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface SiteStats {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BenefitComparison {
  id: string;
  label: string;
  title: string;
  description: string;
  priceRange: string;
  priceNote?: string;
  highlighted: boolean;
}
