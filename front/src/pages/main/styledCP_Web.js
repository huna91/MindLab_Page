import styled from "styled-components";

const Main_Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const SNS_Wrap = styled.div`
  position: fixed;
  /* border: 1px solid red; */
  left: 50px;
  top: 530px;
  width: 80px;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

const SNS_Tag = styled.a`
  border-radius: 8px;
  width: 35px;
  height: 35px;
  margin-top: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const SNS_Img = styled.img`
  border-radius: 8px;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

export { Main_Wrap, SNS_Wrap, SNS_Tag, SNS_Img };
