import React, { useRef, useState, Suspense } from "react";
import {
  Main_Wrap,
  SNS_Wrap,
  SNS_Tag,
  SNS_Img,
  Canvas_Wrap,
  Color_Btn_Wrap,
  Color_Change_Btn,
  Page_Wrap,
  Page_Position,
  Title,
  Mindlab_contents_wrap,
  Mindlab_contents_title,
  Mindlab_contents_content,
  Main_Footer,
  Main_Footer_Title,
  Main_Footer_content,
} from "./styledCP_Web";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Mindlab from "./conponents/Mindlab";

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.y -= 0.01));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
//       <meshStandardMaterial
//         color={hovered ? "hotpink" : "black"}
//         opacity={0.8}
//       />
//     </mesh>
//   );
// }

const Circle = ({ color }) => {
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
        <Sphere visible args={[1.2, 200, 400]}>
          <MeshDistortMaterial
            color={color}
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

const Main = () => {
  const [color, setColor] = useState("#0045FF");
  function Color_Change(e) {
    switch (e) {
      case 1:
        setColor("#0045FF");
        break;
      case "two":
        setColor("#40FFFF");
        break;
      case 3:
        setColor("#BFFF00");
        break;
      case 4:
        setColor("#8C73FF");
        break;
      case 5:
        setColor("#FF4059");
        break;

      default:
        break;
    }
  }
  return (
    <Main_Wrap>
      <Color_Btn_Wrap>
        <Color_Change_Btn
          color="#0045FF"
          onTouchEnd={() => {
            Color_Change(1);
          }}
        ></Color_Change_Btn>
        <Color_Change_Btn
          color="#40FFFF"
          onTouchEnd={() => {
            Color_Change("two");
          }}
        ></Color_Change_Btn>
        <Color_Change_Btn
          color="#BFFF00"
          onTouchEnd={() => {
            Color_Change(3);
          }}
        ></Color_Change_Btn>
        <Color_Change_Btn
          color="#8C73FF"
          onTouchEnd={() => {
            Color_Change(4);
          }}
        ></Color_Change_Btn>
        <Color_Change_Btn
          color="#FF4059"
          onTouchEnd={() => {
            Color_Change(5);
          }}
        ></Color_Change_Btn>
      </Color_Btn_Wrap>
      {/* <SNS_Wrap>
        <SNS_Tag>
          <SNS_Img src="./images/Instagram_Icon.png" />
        </SNS_Tag>
        <SNS_Tag>
          <SNS_Img src="./images/Facebook_Icon.png" />
        </SNS_Tag>
        <SNS_Tag>
          <SNS_Img src="./images/Navercafe_Icon.png" />
        </SNS_Tag>
      </SNS_Wrap> */}
      <Page_Wrap>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(calc(-50%))",
            top: "20vh",
          }}
        >
          <img src="./images/main/1_logo.png" />
        </div>
        <Canvas_Wrap>
          <Canvas>
            {/* <ambientLight />
        <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} /> */}
            <ambientLight intensity={0.3} />
            <pointLight intensity={0.75} position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <Circle color={color} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Canvas_Wrap>
      </Page_Wrap>
      <Page_Wrap>
        <Page_Position>
          <Title style={{ marginRight: "40vw" }}>MINDLAB</Title>
          <Mindlab_contents_wrap style={{ backgroundColor: "#DDF3FF" }}>
            <Mindlab_contents_title>단계적 교육</Mindlab_contents_title>
            <Mindlab_contents_content>
              기술활용도가 높은 교구
            </Mindlab_contents_content>
            <img
              src="./images/main/mindlab_content_1.png"
              style={{ width: "80vw" }}
            />
          </Mindlab_contents_wrap>
          <Mindlab_contents_wrap style={{ backgroundColor: "#FECCD6" }}>
            <Mindlab_contents_title>이해력 증진</Mindlab_contents_title>
            <Mindlab_contents_content>교과융합교육</Mindlab_contents_content>
            <img
              src="./images/main/mindlab_content_2.png"
              style={{ width: "80vw" }}
            />
          </Mindlab_contents_wrap>
        </Page_Position>
      </Page_Wrap>
      <Page_Wrap>
        <Page_Position>
          <Mindlab_contents_wrap style={{ backgroundColor: "#EED792" }}>
            <Mindlab_contents_title>문제해결능력</Mindlab_contents_title>
            <Mindlab_contents_content>
              인내심과 핵심도출
            </Mindlab_contents_content>
            <img
              src="./images/main/mindlab_content_3.png"
              style={{ width: "80vw" }}
            />
          </Mindlab_contents_wrap>
          <Mindlab_contents_wrap>
            <div
              style={{
                backgroundImage: "url(./images/main/mindlab_content_4.png)",
                backgroundSize: "cover",
                width: "80vw",
                height: "80vw",
                borderRadius: "20px",
                paddingTop: 0,
              }}
            >
              <Mindlab_contents_title>컴퓨팅 사고력</Mindlab_contents_title>
              <Mindlab_contents_content>
                논리적 사고능력
              </Mindlab_contents_content>
              {/* <img
                src="./images/main/mindlab_content_4.png"
                style={{
                  width: "80vw",
                  position: "absolute",
                  top: "92vw",
                }}
              /> */}
            </div>
          </Mindlab_contents_wrap>
        </Page_Position>
      </Page_Wrap>
      <Page_Wrap>
        <Page_Position>
          <Title style={{ marginRight: "60vw" }}>교구</Title>
          <img src="./images/main/parish_1.png" style={{ width: "80vw" }} />
        </Page_Position>
        <Main_Footer>
          <Main_Footer_Title>Contact</Main_Footer_Title>
          <Main_Footer_content>
            <img src="./images/Mail_Icon_Black.png" style={{ width: "8vw" }} />
          </Main_Footer_content>
        </Main_Footer>
      </Page_Wrap>
    </Main_Wrap>
  );
};

export default Main;
