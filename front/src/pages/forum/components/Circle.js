import React from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Circle = (props) => {
  return (
    <group>
      <mesh scale={(1, 1, 1)}>
        <Sphere visible args={[1.2, 200, 400]}>
          <MeshDistortMaterial
            color="#7aaaff"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

export default Circle;
