import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = ''
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      
      return controls.stop;
    }
  }, [inView, value, duration, motionValue]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 blur-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
          }}
        />
        
        {/* Main counter */}
        <span className="relative text-5xl font-bold">
          <span className="holographic bg-clip-text text-transparent">
            {prefix}{displayValue.toLocaleString()}{suffix}
          </span>
        </span>

        {/* Animated particles */}
        {inView && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * Math.PI / 4) * 50],
                  y: [0, Math.sin(i * Math.PI / 4) * 50],
                  opacity: [1, 0],
                  scale: [0, 2],
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedCounter;
