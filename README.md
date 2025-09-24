# AI-Code-Marketplace - Premium Web Development Platform

🚀 **Enterprise-level web development platform with AI integration, 3D animations, and futuristic design**

## 🌟 Overview

AI-Code-Marketplace is a $500K+ enterprise-level website featuring cutting-edge technology, stunning 3D visuals, and intelligent AI integration. Built with React, TypeScript, Three.js, and Tailwind CSS.

**Company Email**: aicodemarketplace2@gmail.com  
**Admin Email**: ugameropbolte@gmail.com  
**Special Offer**: 90% OFF on all plans (Limited Time)

## ✨ Key Features

### 🎨 Visual Excellence
- **3D Hero Section** with floating geometric elements using Three.js
- **Glassmorphism UI** with modern glass effects
- **Animated Gradients** and particle systems
- **Dark Theme** with neon accents
- **Smooth Animations** powered by Framer Motion

### 💼 Business Features
- **4 Pricing Plans** with 90% discount:
  - Basic: $899 (1 page)
  - Standard: $1,499 (5 pages)
  - Premium: $2,499 (10 pages)
  - Enterprise: $3,999 (20 pages)
- **AI ChatBot** with preset responses and API integration
- **Contact Form** with automatic ticket generation
- **Email System** sending to ugameropbolte@gmail.com

### 🔧 Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Three.js** for 3D graphics
- **Mobile Responsive** design
- **SEO Optimized** with 100+ keywords
- **Fast Performance** with optimized build

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
# Optional: OpenAI API for enhanced chatbot
VITE_OPENAI_API_KEY=your_openai_key

# EmailJS Configuration (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
```

### 3. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5173

### 4. Build for Production
```bash
npm run build
```

## 📧 EmailJS Setup

1. **Sign up** at [EmailJS.com](https://www.emailjs.com/)

2. **Create Email Service** (Gmail/Outlook)

3. **Create Templates**:

   **Admin Template** (to ugameropbolte@gmail.com):
   - Subject: `New Contact - {{ticket_id}}`
   - Variables: `from_name`, `from_email`, `company`, `service`, `budget`, `message`, `ticket_id`

   **User Confirmation Template**:
   - Subject: `Ticket {{ticket_id}} - AI-Code-Marketplace`
   - Variables: `to_name`, `ticket_id`, `service`, `message`

4. **Add credentials** to .env file

## 🤖 AI ChatBot Features

### Preset Responses (Works without API)
- Greetings & Introduction
- Service Information
- Pricing Details
- Contact Information
- Support Queries
- Technology Stack
- Timeline Information

### AI-Powered Mode (Optional)
- Add OpenAI API key to enable
- Dynamic, contextual responses
- Advanced query handling

## 📁 Project Structure

```
ai-code-marketplace/
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── three/       # 3D components (Hero3D)
│   │   ├── chat/        # AI ChatBot
│   │   └── ui/          # UI components
│   ├── pages/
│   │   ├── HomePage.tsx     # 3D hero, features
│   │   ├── ServicesPage.tsx # Service showcase
│   │   ├── PricingPage.tsx  # Pricing plans
│   │   ├── ContactPage.tsx  # Contact form
│   │   └── AboutPage.tsx    # Company info
│   ├── data/
│   │   ├── pricing.ts   # Pricing plans data
│   │   └── services.ts  # Services data
│   ├── config/
│   │   └── seo.ts       # SEO configuration
│   └── types/           # TypeScript types
├── public/
├── .env.example         # Environment template
└── package.json
```

## 🎯 Pages & Features

### Home Page
- 3D animated hero section
- Floating geometric shapes
- Feature cards with animations
- Statistics display
- Call-to-action sections

### Services Page
- 6 core services displayed
- Interactive service cards
- Technology stack showcase
- Development process visualization

### Pricing Page
- 4 pricing tiers with animations
- 90% discount badges
- Feature comparison
- Money-back guarantee

### Contact Page
- Advanced contact form
- Ticket generation system
- FAQ section
- Contact information display

### About Page
- Company story
- Core values
- Team information
- Global reach section

## 🔐 Security & Performance

- Environment variables for sensitive data
- Form validation and sanitization
- Optimized bundle size
- Lazy loading for routes
- Image optimization
- SEO meta tags on all pages

## 🚢 Deployment

### Vercel
```bash
npx vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder to server
3. Configure server for SPA routing

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🎨 Design System

### Colors
- Primary: Purple to Pink gradient
- Accent: Cyan (#00ffff)
- Background: Gray-950
- Glass: White with opacity

### Typography
- Headings: Space Grotesk
- Body: Inter

### Components
- Glass morphism cards
- Gradient buttons
- Animated hover effects
- Neon glows

## 📈 SEO Features

- **Primary Keyword**: AI Web Development Services
- **100+ Secondary Keywords** integrated
- Meta tags on all pages
- Schema.org structured data
- Sitemap ready
- Fast loading times

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Three.js** - 3D Graphics
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Hook Form** - Forms
- **EmailJS** - Email Service
- **Axios** - HTTP Client
- **Lucide React** - Icons

## 📝 License

© 2024 AI-Code-Marketplace. All rights reserved.

---

**Built with ❤️ by AI-Code-Marketplace Team**

For support: aicodemarketplace2@gmail.com
