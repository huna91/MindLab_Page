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
  Forum_Content_First,
  Forum_Content_Futer,
  Forum_Content_Mail,
  Forum_Content_Text,
} from "./styledCP_MB";
import Circle from "./components/Circle";

const Forum = (color) => {
  function Color_Change() {}
  return (
    <>
      <Canvas_Wrap>
        {/* <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.75} position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Circle />
          </Suspense>
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas> */}
      </Canvas_Wrap>
      <Forum_Wrap>
        <Forum_Content_Page>
          <Forum_Content_First src="./images/001.png" />
          {/* <Forum_Content_First src="./images/002.png" /> */}
          {/* <Forum_Content_First src="./images/003.png" /> */}
          <Forum_Content_Title></Forum_Content_Title>
        </Forum_Content_Page>
        <Forum_Content_Futer>
          <Forum_Content_Text>Contact</Forum_Content_Text>
          <Forum_Content_Mail src="./images/Mail_Icon_Black.png" />
          <Forum_Content_Text>mindlab@google</Forum_Content_Text>
        </Forum_Content_Futer>
      </Forum_Wrap>
    </>
  );
};

export default Forum;

/*
비전
모든 사람이 즐거운 디지털교육

목표
인간이 주체적으로 기술을 다룰 수 있게 만드는 단계별 교구·교육 제공

미션
	디지털소외계층을 없애고, 무한한 상상력을 기술을 통해 구현할 수 있게 하는 것


4차산업의 교육이 단순히 교과의 한가지가 아니라, 배우는 즐거움, 나아가 삶에서 찾을 수 있는 호기심, 상상력을 구현할 수 있게 된다면 어떨까요?
	
	마인드랩은 누구나 마음에 품고있는 ‘우리만의 상상력 실험실’을 위한 진짜 4차산업교육과 교구를 단계적으로 제공합니다.

** 단계적 교육·교구

단순히 경험에서 멈추지 않는 교육·교구
기술을 능동적,주체적으로 활용할 수 있는 교육·교구

	ex) 코딩교육의 방식
블록코딩 → 메이커 교육: 임베디드(아두이노 등) →텍스트코딩(파이썬/C++등)
 
	ex) 현장의 교육방식(비교)
체험교육(프로그램 조합) AI프로그램 + 메이커 + 텍스트코딩

	** 차이점 : 중심기술에 대한 이해 여부
		      실생활에 녹아든 기술에 대한 이해도가 높아짐


*/
