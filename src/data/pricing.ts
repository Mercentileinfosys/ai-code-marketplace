import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 899,
    originalPrice: 8091,
    discount: 90,
    pages: 1,
    features: [
      'Single Page Application',
      'Responsive Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
      'Social Media Links',
      '3 Revisions',
      '7 Days Delivery',
      'Basic Animation Effects'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 1499,
    originalPrice: 13491,
    discount: 90,
    pages: 5,
    popular: true,
    features: [
      'Up to 5 Pages',
      'Advanced Responsive Design',
      'Full SEO Optimization',
      'AI ChatBot Integration',
      'Contact Form with Ticketing',
      'Social Media Integration',
      '5 Revisions',
      '14 Days Delivery',
      'Custom Animations',
      'Basic Analytics Setup'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 2499,
    originalPrice: 22491,
    discount: 90,
    pages: 10,
    highlighted: true,
    features: [
      'Up to 10 Pages',
      'Premium Responsive Design',
      'Advanced SEO with Schema',
      'Full AI Integration Suite',
      'Advanced Contact System',
      'E-commerce Ready',
      'Unlimited Revisions',
      '21 Days Delivery',
      '3D Animations & Effects',
      'Advanced Analytics',
      'Custom API Integration',
      'Priority Support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 3999,
    originalPrice: 35991,
    discount: 90,
    pages: 20,
    features: [
      'Up to 20 Pages',
      'Enterprise-Grade Design',
      'Full SEO & Marketing Suite',
      'Complete AI Ecosystem',
      'CRM Integration',
      'Full E-commerce Platform',
      'Unlimited Revisions',
      '30 Days Delivery',
      'Advanced 3D Graphics',
      'Custom Analytics Dashboard',
      'Multiple API Integrations',
      'Dedicated Support Team',
      'Performance Optimization',
      'Security Audit',
      'Cloud Deployment',
      'Maintenance Package'
    ]
  }
];
