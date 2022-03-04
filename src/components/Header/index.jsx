import React from "react";
import { css } from "@emotion/react";
import Logo from "./Logo";
import menuList from "./menu-list.json";
import DropdownList from "./DropdownList";
import { useScrollTop } from "../../hooks/scroll";

export default function Header() {
  const top = useScrollTop();

  return (
    <div css={container({ blur: top !== 0 })}>
      <Logo text='P O N G D A N G' />
      <DropdownList menuList={menuList} />
    </div>
  );
}

const container = ({ blur }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 100%;
  background-color: ${blur ? `rgb(200 200 200 / 31%);` : "rgb(255 255 255 / 100%);"};
  backdrop-filter: ${blur ? `blur(10px)` : "unset"};
  transition: background-color 300ms;
  padding: 0 calc((100% - 1200px + 30px) / 2);
`;
