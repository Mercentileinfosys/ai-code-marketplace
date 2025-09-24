import React from 'react';
import { motion } from 'framer-motion';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  delay?: number;
}

const GradientCard: React.FC<GradientCardProps> = ({ 
  children, 
  className = '', 
  gradient = 'from-purple-600 via-pink-600 to-blue-600',
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* Animated gradient background */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse transition-all duration-300`} />
      
      {/* Glass card */}
      <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} animate-gradient`} />
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default GradientCard;
