import React from "react";
import { css } from "@emotion/react";
import Logo from "./Logo";
import menuList from "../../constants/menu-list.json";
import DropdownList from "./DropdownList";
import { useScrollTop } from "../../hooks/scroll";
import HambugerMenu from "./HambugerMenu";

export default function Header() {
  const top = useScrollTop();

  return (
    <div css={container({ blur: top !== 0 })}>
      <Logo text='P O N G D A N G' />
      <DropdownList menuList={menuList} />
      <HambugerMenu />
    </div>
  );
}

const container = ({ blur }) => css`
  max-width: 1200px;
  height: 108px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  /* background-color: ${blur ? `"rgb(200 200 200 / 31%)";` : "rgb(255 255 255 / 100%);"}; */
  backdrop-filter: ${blur ? `blur(10px)` : "unset"};
  transition: background-color 300ms;
  padding: 0 20px;
`;
