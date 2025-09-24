import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'AI-Powered Web Development',
    description: 'Custom websites built with cutting-edge AI integration for enhanced user experiences and automation.',
    icon: 'code',
    features: [
      'React & Next.js Development',
      'AI ChatBot Integration',
      'Real-time Data Processing',
      'Progressive Web Apps',
      'API Development & Integration'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'Three.js']
  },
  {
    id: 'ui-ux-design',
    title: 'Futuristic UI/UX Design',
    description: 'Stunning, user-centric designs with 3D elements and immersive interactions that captivate your audience.',
    icon: 'palette',
    features: [
      '3D Visual Effects',
      'Glassmorphism Design',
      'Interactive Prototypes',
      'Mobile-First Approach',
      'User Research & Testing'
    ],
    technologies: ['Figma', 'Three.js', 'Framer Motion', 'Tailwind CSS']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI capabilities into your applications for intelligent automation and insights.',
    icon: 'brain',
    features: [
      'Custom AI Chatbots',
      'Natural Language Processing',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Machine Learning Models'
    ],
    technologies: ['OpenAI', 'TensorFlow', 'Python', 'LangChain', 'Vector DBs']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with AI-driven recommendations and personalized shopping experiences.',
    icon: 'shopping-cart',
    features: [
      'Custom Shopping Carts',
      'Payment Gateway Integration',
      'Inventory Management',
      'AI Product Recommendations',
      'Analytics Dashboard'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'React', 'Node.js']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with native performance and AI-enhanced features.',
    icon: 'smartphone',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Development',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Expo']
  },
  {
    id: 'consulting',
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance to leverage AI and modern technologies for business growth and innovation.',
    icon: 'lightbulb',
    features: [
      'Technology Assessment',
      'AI Strategy Development',
      'Process Automation',
      'Team Training',
      'Performance Optimization'
    ],
    technologies: ['Cloud Architecture', 'DevOps', 'AI/ML', 'Agile']
  }
];
