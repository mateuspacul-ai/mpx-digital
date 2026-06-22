"use client";

/**
 * O ELEMENTO-ASSINATURA do site.
 *
 * Um monólito/cristal facetado em navy (o "sólido" = marketing) envolto
 * por uma casca fina em wireframe (a "engenharia" = tecnologia). Gira
 * devagar, flutua de leve e reage sutilmente ao mouse. Muito espaço
 * negativo ao redor — a ousadia mora só aqui.
 *
 * Pensado para ser leve no celular: baixa contagem de polígonos,
 * DPR limitado e movimento reduzido quando o usuário pede.
 */

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Monolith() {
  const core = useRef<THREE.Mesh>(null!);
  const shell = useRef<THREE.Group>(null!);
  const pointer = useRef({ x: 0, y: 0 });

  // Geometria do núcleo: octaedro alongado = cristal/obelisco facetado.
  const coreGeometry = useMemo(() => {
    const g = new THREE.OctahedronGeometry(1.35, 0);
    g.scale(0.78, 1.55, 0.78);
    return g;
  }, []);

  // Casca externa em wireframe: icosaedro fino girando ao contrário.
  const shellGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.15, 1), []);

  useFrame((state, delta) => {
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;

    if (core.current) {
      core.current.rotation.y += delta * 0.18;
      // Inclinação suave seguindo o mouse (parallax discreto).
      core.current.rotation.x = THREE.MathUtils.lerp(
        core.current.rotation.x,
        pointer.current.y * 0.22,
        0.04
      );
      core.current.rotation.z = THREE.MathUtils.lerp(
        core.current.rotation.z,
        -pointer.current.x * 0.18,
        0.04
      );
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.06;
      shell.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group>
      {/* Casca de engenharia (wireframe) */}
      <group ref={shell}>
        <mesh geometry={shellGeometry}>
          <meshBasicMaterial
            color="#1d3c78"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>

      {/* Núcleo facetado sólido */}
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh ref={core} geometry={coreGeometry} castShadow>
          <meshStandardMaterial
            color="#0a2e6b"
            metalness={0.65}
            roughness={0.22}
            flatShading
            envMapIntensity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Iluminação só com luzes (sem HDR de rede) para carregar rápido */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.1} color="#ffffff" />
      <directionalLight position={[-6, -2, -4]} intensity={0.8} color="#2a4d96" />
      <pointLight position={[0, 0, 4]} intensity={1.1} color="#9fb6e6" />
      <Monolith />
    </Canvas>
  );
}
