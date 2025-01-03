import React from "react";
import { OrbitControls, Environment } from "@react-three/drei";


const ReactScene: React.FC = () => {
  return (
    <>
      {/* Add a sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Add an environment */}
      <Environment preset="city" />

      {/* Add controls */}
      <OrbitControls />
    </>
  );
};

export default ReactScene;
