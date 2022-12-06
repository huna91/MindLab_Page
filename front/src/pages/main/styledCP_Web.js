import styled from "styled-components";

const Main_Wrap = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const SNS_Wrap = styled.div`
  position: fixed;
  /* border: 1px solid red; */
  left: 5vw;
  top: 75vh;
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

const Canvas_Wrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 80vw;
  height: 80vw;
  position: absolute;
  top: 42vh;
  left: 50%;
  transform: translate(calc(-50%));
`;

const Color_Btn_Wrap = styled.div`
  position: absolute;
  display: flex;
  /* border: 1px solid red; */
  left: 51.282vw;
  top: 8vw;
  z-index: 3;
`;

const Color_Change_Btn = styled.button`
  color: black;
  cursor: pointer;
  margin: 5px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.color};
`;

const Page_Wrap = styled.div`
  width: 100%;
  height: 844px;
`;

const Page_Position = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-right: ${(props) => props.style};
`;

const Mindlab_contents_wrap = styled.div`
  border-radius: 20px;
  width: 80vw;
  height: 80vw;
  margin-bottom: 18vw;
  background-color: ${(props) => props.color};
  /* position: absolute; */
  /* left: 50%; */
  /* transform: translate(calc(-50%)); */
`;

const Mindlab_contents_title = styled.h1`
  font-size: 25px;
  margin-left: 15px;
  margin-top: 0;
  padding-top: 15px;
`;

const Mindlab_contents_content = styled.h2`
  font-size: 15px;
  margin-left: 15px;
  margin-bottom: 0;
`;

const Main_Footer = styled.div`
  width: 100vw;
  height: 30vw;
  margin-top: 20vw;
  position: relative;
`;

const Main_Footer_Title = styled.h1`
  font-size: 25px;
  margin-left: 10vw;
`;

const Main_Footer_content = styled.h2`
  font-size: 15px;
  margin-top: 0;
  display: inline;
  position: absolute;
  left: 25vw;
  top: 18vw;
`;

export {
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
};
