import React, { useState } from "react";
import {
  Header_Wrap,
  Header_Home_Tag,
  Header_Home_Img,
  Header_Navi_Bar,
  Header_Naviul,
  Header_Navili,
  Header_Nav_tag,
  Color_Btn_Wrap,
  Color_Change_Btn,
} from "./styledCP_Web";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("#7aaaff");
  const Color_Chage = () => {
    console.log("터치");
  };
  return (
    <div className="header">
      <Header_Wrap>
        <Header_Home_Tag href="/">
          <Header_Home_Img src="./images/Mindlab_Logo.png" />
        </Header_Home_Tag>

        <Header_Navi_Bar>
          <Header_Naviul>
            {/* <Header_Navili>
              <Header_Nav_tag href="/about">ABOUT</Header_Nav_tag>
            </Header_Navili>
            <Header_Navili>
              <Header_Nav_tag href="/partner">PARTNER</Header_Nav_tag>
            </Header_Navili>
            <Header_Navili>
              <Header_Nav_tag href="/shop">SHOP</Header_Nav_tag>
            </Header_Navili>
            <Header_Navili>
              <Header_Nav_tag href="/contact">CONTACT</Header_Nav_tag>
            </Header_Navili> */}
          </Header_Naviul>
        </Header_Navi_Bar>
      </Header_Wrap>
    </div>
  );
};

export default Header;
