import React, { useRef, useState, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {
  Canvas_Wrap,
  Color_Btn_Wrap,
  Color_Change_Btn,
  Forum_Wrap,
  Forum_Content_Page,
  Forum_Content_Title,
  Forum_Content_Subtitle,
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
      <Forum_Wrap>
        <Forum_Content_Page>
          <Forum_Content_Title>2022 문제해결 솔루션랩</Forum_Content_Title>
          <Forum_Content_Title>우수사례 공유회</Forum_Content_Title>
          <Forum_Content_Subtitle>
            개정 교육과정과 4차산업 교육
          </Forum_Content_Subtitle>
        </Forum_Content_Page>
      </Forum_Wrap>
    </>
  );
};

export default Forum;
