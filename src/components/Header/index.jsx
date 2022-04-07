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
      <nav css={navContainer}>
        <Logo text='P O N G D A N G' />
        <DropdownList menuList={menuList} />
        <HambugerMenu />
      </nav>
    </div>
  );
}

const container = ({ blur }) => css`
  height: 108px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  backdrop-filter: ${blur ? `blur(10px)` : "unset"};
  transition: background-color 300ms;

  @media (max-width: 569px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
  }

  @media (max-width: 449px) {
    height: 72px;
  }
`;

const navContainer = css`
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 569px) {
    margin: 0;
    width: 100%;
  }
`;
