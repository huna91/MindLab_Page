import React, { useRef, useState, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {
  Canvas_Wrap,
  Color_Btn_Wrap,
  Color_Change_Btn,
  Forum_Wrap,
} from "./styledCP_MB";
import Circle from "./components/Circle";

const Forum = (color) => {
  return (
    <>
      <Canvas_Wrap>
        <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.75} position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Circle />
          </Suspense>
        </Canvas>
      </Canvas_Wrap>
      <Forum_Wrap>dd</Forum_Wrap>
    </>
  );
};

export default Forum;
