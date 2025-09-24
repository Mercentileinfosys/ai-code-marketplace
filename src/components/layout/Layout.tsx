import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from '../chat/ChatBot';
import AnimatedBackground from '../ui/AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
};

export default Layout;
