import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Animated geometric shape component
const AnimatedShape: React.FC<{ 
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'torus' | 'octahedron';
  scale?: number;
}> = ({ position, color, shape, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return (
          <Sphere args={[1, 32, 32]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        );
      case 'box':
        return (
          <Box args={[1, 1, 1]} scale={scale}>
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Box>
        );
      case 'torus':
        return (
          <Torus args={[1, 0.4, 16, 100]} scale={scale}>
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Torus>
        );
      case 'octahedron':
        return (
          <Octahedron args={[1, 0]} scale={scale}>
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Octahedron>
        );
    }
  }, [shape, color, scale]);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh ref={meshRef} position={position}>
        {ShapeComponent}
      </mesh>
    </Float>
  );
};

// Particle field background
const ParticleField: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#00ffff" />
        
        {/* Floating geometric shapes */}
        <AnimatedShape position={[-3, 2, 0]} color="#00ffff" shape="sphere" scale={0.8} />
        <AnimatedShape position={[3, -1, -2]} color="#ff00ff" shape="box" scale={0.7} />
        <AnimatedShape position={[-2, -2, 1]} color="#ffff00" shape="torus" scale={0.6} />
        <AnimatedShape position={[2, 1, -1]} color="#00ff00" shape="octahedron" scale={0.9} />
        
        {/* Central hero element */}
        <Float
          speed={4}
          rotationIntensity={1.5}
          floatIntensity={2}
        >
          <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#8b5cf6"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0}
              metalness={0.9}
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
        
        {/* Particle field */}
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        
        <fog attach="fog" args={['#030014', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
