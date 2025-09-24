// Service and Pricing Types
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  pages: number;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
}

export interface TicketResponse {
  ticketId: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

// Chat Types
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatPresetResponse {
  trigger: string[];
  response: string;
  category: 'email' | 'services' | 'support' | 'pricing' | 'general';
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  loop?: boolean;
}
