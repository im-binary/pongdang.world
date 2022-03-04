import { css } from "@emotion/react";
import { boldTitleFont } from "../../style/theme";
import Dropdown from "./Dropdown";

export default function DropdownList({ menuList }) {
  return (
    <nav css={container}>
      <ul>
        {menuList.map((menu) => (
          <Dropdown key={`${menu.name}-${menu.path}`} menu={menu} />
        ))}
      </ul>
    </nav>
  );
}

const container = css`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    ${boldTitleFont}
  }
`;
