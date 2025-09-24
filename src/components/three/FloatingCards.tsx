import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

interface CardProps {
  position: [number, number, number];
  color: string;
  text: string;
  delay?: number;
}

const FloatingCard: React.FC<CardProps> = ({ position, color, text, delay = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <RoundedBox
          ref={meshRef}
          args={[3, 2, 0.3]}
          radius={0.1}
          smoothness={4}
        >
          <meshPhysicalMaterial
            color={color}
            metalness={0.5}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </RoundedBox>
        <Center position={[0, 0, 0.2]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.05}
            curveSegments={12}
          >
            {text}
            <meshStandardMaterial color="white" />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
};

const FloatingCards: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        <FloatingCard position={[-4, 2, 0]} color="#8b5cf6" text="AI" delay={0} />
        <FloatingCard position={[4, 2, 0]} color="#ec4899" text="Web" delay={1} />
        <FloatingCard position={[-4, -2, 0]} color="#06b6d4" text="3D" delay={2} />
        <FloatingCard position={[4, -2, 0]} color="#10b981" text="Apps" delay={3} />
        
        <fog attach="fog" args={['#030014', 8, 20]} />
      </Canvas>
    </div>
  );
};

export default FloatingCards;
