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
  z-index: 3;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Forum_Content_Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Forum_Content_Title = styled.strong`
  margin: none;
  font-size: 2em;
`;
const Forum_Content_Subtitle = styled.div``;

const Forum_Content_First = styled.img`
  margin-top: 100px;
  padding: 10px;
  width: 93%;
  height: auto;
  display: block;
`;

const Forum_Content_Futer = styled.div``;
const Forum_Content_Mail = styled.img`
  width: 30px;
  height: 30px;
`;

const Forum_Content_Text = styled.h2`
  font-size: 20px;
`;

export {
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
};
