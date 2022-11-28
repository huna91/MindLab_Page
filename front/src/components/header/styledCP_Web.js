import styled from "styled-components";

const Header_Wrap = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
`;

const Header_Home_Tag = styled.a`
  position: absolute;
  // web용
  /* left: 50px; */
  // Mb용
  left: 20px;
`;

const Header_Home_Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;
const Header_Navi_Bar = styled.div`
  width: 500px;
  height: 80px;
  position: absolute;
  left: 1000px;
`;

const Header_Naviul = styled.ul`
  width: 500px;
  list-style: none;
  display: flex;
`;

const Header_Navili = styled.li`
  margin-left: 50px;
  margin-top: 20px;
  text-align: center;
`;

const Header_Nav_tag = styled.a`
  color: white;
  text-decoration-line: none;
  cursor: pointer;
  :hover {
    text-decoration: underline white solid 2px;
    text-underline-position: under;
  }
`;

const Color_Btn_Wrap = styled.div`
  position: absolute;
  display: flex;
  left: 200px;
  top: 25px;
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

export {
  Header_Wrap,
  Header_Home_Tag,
  Header_Home_Img,
  Header_Navi_Bar,
  Header_Naviul,
  Header_Navili,
  Header_Nav_tag,
  Color_Btn_Wrap,
  Color_Change_Btn,
};
