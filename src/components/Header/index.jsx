import React from "react";
import { css } from "@emotion/react";
import Logo from "./Logo";
import menuList from "./menu-list.json";
import DropdownList from "./DropdownList";

export default function Header() {
  return (
    <div css={container}>
      <Logo text='P O N G D A N G' />
      <DropdownList menuList={menuList} />
    </div>
  );
}

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
