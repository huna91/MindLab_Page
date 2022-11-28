import React, { useRef, useState, Suspense } from "react";
import { Main_Wrap, SNS_Wrap, SNS_Tag, SNS_Img } from "./styledCP_Web";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y -= 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "black"}
        opacity={0.8}
      />
    </mesh>
  );
}

const Circle = () => {
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
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

const Main = () => {
  return (
    <Main_Wrap>
      <Canvas>
        {/* <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} /> */}
        <ambientLight intensity={0.3} />
        <pointLight intensity={0.75} position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Circle />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <SNS_Wrap>
        <SNS_Tag>
          <SNS_Img src="./images/Instagram_Icon.png" />
        </SNS_Tag>
        <SNS_Tag>
          <SNS_Img src="./images/Facebook_Icon.png" />
        </SNS_Tag>
        <SNS_Tag>
          <SNS_Img src="./images/Navercafe_Icon.png" />
        </SNS_Tag>
      </SNS_Wrap>
    </Main_Wrap>
  );
};

export default Main;
