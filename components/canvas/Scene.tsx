"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2, 1, -3]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, -1, -2]} rotation={[0.2, 0.8, 0]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#7c3aed" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[0, -2, -4]} rotation={[0.5, 0.1, 0.3]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#06b6d4" wireframe opacity={0.2} transparent />
        </mesh>
      </Float>
    </>
  );
}

export function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={isMobile ? 1 : [1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {!isMobile && <FloatingShapes />}
        <ParticleField />
      </Canvas>
    </div>
  );
}
