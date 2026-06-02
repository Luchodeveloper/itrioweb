import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

function Core() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#0ea5e9"
        transparent
        opacity={0.3}
        roughness={0}
        metalness={0.3}
        emissive="#1e3a8a"
        emissiveIntensity={1.2}
      />
    </mesh>
  );
}

function SphereNodes() {
  const ref = useRef();

  const { positions, lines } = useMemo(() => {
    const pts = [];
    const connections = [];
    const count = 140;

    // puntos en esfera
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const r = 1.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pts.push(new THREE.Vector3(x, y, z));
    }

    // conexiones
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dist = pts[i].distanceTo(pts[j]);

        if (dist < 0.5) {
          connections.push([pts[i], pts[j]]);
        }
      }
    }

    return {
      positions: new Float32Array(pts.flatMap(p => [p.x, p.y, p.z])),
      lines: connections
    };
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0015;
  });

  return (
    <group ref={ref}>
      {/* puntos */}
      <Points positions={positions} stride={3}>
        <PointMaterial
          size={0.05}
          color="#22d3ee"
          transparent
          opacity={0.8}
        />
      </Points>

      {/* líneas */}
      {lines.map((l, i) => (
        <Line
          key={i}
          points={l}
          color="#22d3ee"
          transparent
          opacity={0.4}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function TechSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      {/* luces */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} />

      <Core />
      <SphereNodes />

      {/* opcional para debug */}
      {/* <OrbitControls /> */}


      
    </Canvas>
  );
}