import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB', position: { top: '10%', left: '45%' } },
  { name: 'TypeScript', color: '#3178C6', position: { top: '20%', left: '70%' } },
  { name: 'Three.js', color: '#000000', position: { top: '35%', left: '80%' } },
  { name: 'Tailwind', color: '#06B6D4', position: { top: '55%', left: '75%' } },
  { name: 'Node.js', color: '#339933', position: { top: '70%', left: '60%' } },
  { name: 'Python', color: '#3776AB', position: { top: '75%', left: '35%' } },
  { name: 'AI/ML', color: '#FF6F00', position: { top: '60%', left: '15%' } },
  { name: 'Next.js', color: '#000000', position: { top: '40%', left: '10%' } },
  { name: 'Vue', color: '#4FC08D', position: { top: '20%', left: '20%' } },
];

const TechSphere: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central glowing sphere */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #8b5cf6, #ec4899, #06b6d4)',
          boxShadow: '0 0 100px rgba(139, 92, 246, 0.5), 0 0 200px rgba(236, 72, 153, 0.3)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Orbiting tech badges */}
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          style={tech.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
              style={{
                boxShadow: `0 0 20px ${tech.color}40`,
              }}
            >
              <span
                className="font-semibold text-sm"
                style={{ color: tech.color === '#000000' ? '#ffffff' : tech.color }}
              >
                {tech.name}
              </span>
            </div>
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `radial-gradient(circle, ${tech.color}40, transparent)`,
                filter: 'blur(10px)',
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Orbiting particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TechSphere;
