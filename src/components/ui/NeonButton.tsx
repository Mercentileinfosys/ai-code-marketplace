import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false
}) => {
  const variants = {
    primary: {
      bg: 'from-purple-600 to-pink-600',
      shadow: 'shadow-purple-500/50',
      hover: 'hover:shadow-purple-500/70',
      glow: 'rgba(168, 85, 247, 0.5)'
    },
    secondary: {
      bg: 'from-cyan-600 to-blue-600',
      shadow: 'shadow-cyan-500/50',
      hover: 'hover:shadow-cyan-500/70',
      glow: 'rgba(6, 182, 212, 0.5)'
    },
    danger: {
      bg: 'from-red-600 to-orange-600',
      shadow: 'shadow-red-500/50',
      hover: 'hover:shadow-red-500/70',
      glow: 'rgba(239, 68, 68, 0.5)'
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group overflow-hidden rounded-full font-semibold
        ${fullWidth ? 'w-full' : ''}
        ${currentSize}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${currentVariant.bg}`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{
          boxShadow: `0 0 30px ${currentVariant.glow}`,
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      </motion.div>

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${currentVariant.glow}, transparent, ${currentVariant.glow})`,
          padding: '2px',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-gray-950" />
      </motion.div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-white">
        {children}
      </span>

      {/* Particle effects on hover */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
};

export default NeonButton;
