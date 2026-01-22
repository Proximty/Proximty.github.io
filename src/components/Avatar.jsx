import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

export default function Avatar3D({ modelUrl }) {
  return (
    <div className="w-80 h-80 mx-auto">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        {/* Scene lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <Stage environment="city" intensity={0.6}>
          <primitive object={modelUrl} />
        </Stage>

        {/* Interactieve controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
