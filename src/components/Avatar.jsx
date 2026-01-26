// src/components/Avatar.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Model({ accent }) {
  const ref = useRef();
  const gltf = useGLTF("/Avatar.glb"); // GLB in public

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005; // langzaam draaien
  });

  return <primitive ref={ref} object={gltf.scene} scale={1.8} />; // iets kleiner zodat het past
}

export default function Avatar({ accent }) {
  return (
    <Canvas
      style={{ width: 400, height: 400 }}
      camera={{ position: [0, 1, 7], fov: 45 }} // veel verder weg = sterk uitgezoomd
    >
      {/* Lichten */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 7]} intensity={1} color={accent} />
      <pointLight position={[0, 2, 7]} intensity={0.5} color={accent} />

      <Suspense fallback={null}>
        <Model accent={accent} />
      </Suspense>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={5}
        maxDistance={10} // zoom limieten aangepast
      />
    </Canvas>
  );
}
