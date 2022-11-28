import styled from "styled-components";

const Canvas_Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Color_Btn_Wrap = styled.div`
  position: absolute;
  left: 50%;
`;

const Color_Change_Btn = styled.a`
  color: black;
  margin: 5px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid red;
  background-color: ${(props) => props.color};
`;

const Forum_Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export { Canvas_Wrap, Color_Btn_Wrap, Color_Change_Btn, Forum_Wrap };