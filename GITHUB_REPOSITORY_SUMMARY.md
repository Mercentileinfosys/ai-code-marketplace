# AI Code Marketplace - GitHub Repository Summary

## Project Overview

AI-Code-Marketplace is an enterprise-level web development platform featuring AI integration, 3D animations, and a futuristic design. The project is built with modern web technologies including React, TypeScript, Three.js, and Tailwind CSS.

## Repository Structure

The repository contains a complete React application with the following structure:

```
├── src/                  # Source code
│   ├── components/       # UI components
│   ├── pages/            # Page components
│   ├── assets/           # Static assets
│   ├── config/           # Configuration files
│   ├── data/             # Data files
│   ├── hooks/            # Custom React hooks
│   ├── services/         # Service integrations
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── public/               # Public assets
├── dist/                 # Build output
└── configuration files   # Various config files
```

## Key Features

- **3D Visualizations**: Three.js integration for immersive 3D elements
- **Modern UI**: Glassmorphism design with Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **TypeScript**: Type-safe code throughout the application
- **EmailJS Integration**: Contact form functionality
- **Multiple Pages**: Home, About, Services, Pricing, Contact

## Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS

## Setup Instructions

Detailed setup instructions are available in the following files:

- **GitHub Setup**: See `GITHUB_SETUP_GUIDE.md`
- **EmailJS Setup**: See `EMAILJS_SETUP_GUIDE.md`
- **Vercel Deployment**: See `VERCEL_DEPLOYMENT_GUIDE.md`

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

The project requires several environment variables for full functionality:

```
# EmailJS Configuration (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id

# Optional: OpenAI API for enhanced chatbot
VITE_OPENAI_API_KEY=your_openai_key
```

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

All rights reserved. This codebase is proprietary and confidential.

---

This repository summary provides an overview of the AI Code Marketplace project structure, features, and setup instructions for GitHub collaboration.