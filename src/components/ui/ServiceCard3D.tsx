import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCard3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  title,
  description,
  icon,
  features,
  gradient,
  delay = 0,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-full cursor-pointer"
      onClick={onClick}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradient} opacity-75 blur-lg`}
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 1 : 0.75,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div
        className="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transform: 'translateZ(50px)',
        }}
      >
        {/* Animated particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* Icon with 3D effect */}
        <motion.div
          className="mb-6"
          animate={{
            rotateZ: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} p-4 shadow-2xl`}>
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6">
          {description}
        </p>

        {/* Features list with staggered animation */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  delay: index * 0.2,
                }}
              />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA with hover effect */}
        <motion.div
          className="flex items-center gap-2 text-cyan-400 font-semibold group"
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <motion.div
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Holographic overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '200% 200%'] : '0% 0%',
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard3D;
