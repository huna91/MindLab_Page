import styled from "styled-components";

const About_Wrap = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

// 페이지 위부분
const About_Top = styled.div`
  display: flex;
`;

const About_Left = styled.span`
  width: 50%;
  height: 100vh;
  display: inline;
  border: 1px solid red;
  box-sizing: border-box;
  position: relative;
`;

const About_Right = styled.span`
  width: 50%;
  border: 1px solid yellow;
  box-sizing: border-box;
  position: relative;
`;

const About_Title = styled.h1`
  border: 1px solid pink;
  margin: 0;
  color: white;
  text-align: center;
  position: absolute;
  top: 300px;
  left: 200px;
`;

const About_Content = styled.h2`
  color: white;
  position: absolute;
  top: 300px;
  left: 200px;
`;

// 소개
const About_Bottom = styled.div`
  border: 1px solid green;
`;

const About_Members_Title = styled.h1`
  color: white;
  margin-left: 50px;
`;

const About_Members_Wrap = styled.div`
  margin-left: 50px;
  color: white;
  border-top: 2px solid white;
`;

const About_Members_Left = styled.span`
  border: 1px solid pink;
  width: 50%;
`;

const About_Member_Name = styled.h1``;

const About_Member_Title = styled.h2``;

const About_Members_Right = styled.span`
  width: 50%;
  border: 1px solid white;
`;

const About_Member_Info = styled.div``;

const About_Member_Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const About_Member_Contact = styled.h2`
  display: inline;
`;

export {
  About_Wrap,
  About_Top,
  About_Left,
  About_Right,
  About_Title,
  About_Content,
  About_Bottom,
  About_Members_Title,
  About_Members_Wrap,
  About_Members_Left,
  About_Member_Name,
  About_Member_Title,
  About_Members_Right,
  About_Member_Info,
  About_Member_Icon,
  About_Member_Contact,
};
