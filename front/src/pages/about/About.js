import React from "react";
import {
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
  About_Members_Right,
  About_Member_Name,
  About_Member_Title,
  About_Member_Info,
  About_Member_Icon,
  About_Member_Contact,
} from "./styledCP_Web";

const About = () => {
  return (
    <About_Wrap>
      <About_Top>
        <About_Left>
          <About_Title>마인드랩</About_Title>
        </About_Left>
        <About_Right>
          <About_Content>마인드랩의 미션은...</About_Content>
        </About_Right>
      </About_Top>
      <About_Bottom>
        <About_Members_Title>Members</About_Members_Title>
        <About_Members_Wrap>
          <About_Members_Left>
            <About_Member_Name>박가현</About_Member_Name>
            <About_Member_Title>대표이사</About_Member_Title>
          </About_Members_Left>
          <About_Members_Right>
            <About_Member_Info>
              <About_Member_Icon src="./images/Mail_Icon.png" />
              <About_Member_Contact>
                maindlab@googlegroups.com
              </About_Member_Contact>
            </About_Member_Info>
            <About_Member_Info>
              <About_Member_Icon src="./images/Mobile_Icon.png" />
              <About_Member_Contact>010-0000-0000</About_Member_Contact>
            </About_Member_Info>
          </About_Members_Right>
        </About_Members_Wrap>
      </About_Bottom>
    </About_Wrap>
  );
};

export default About;
