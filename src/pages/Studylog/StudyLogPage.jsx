import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground, boldTitleFont } from "../../style/theme";

export default function StudyLogPage() {
  return (
    <div css={wrapperDiv}>
      <h1 style={{ display: "none" }}>공부기록</h1>
      <nav css={navContainer}>
        <ul css={menuContainer}>
          <li>
            <NavLink css={navLinkStyle} to='html'>
              HTML
            </NavLink>
          </li>
          <li>
            <NavLink css={navLinkStyle} to='js'>
              JS
            </NavLink>
          </li>
          <li>
            <NavLink css={navLinkStyle} to='react'>
              React
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

const navContainer = css`
  display: flex;
  flex-direction: row;
  @media (max-width: 699px) {
    display: none;
  }
`;

const wrapperDiv = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const menuContainer = css`
  width: 200px;
  /* border: 1px solid tomato; */
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const navLinkStyle = css`
  display: block;
  padding: 10px 0;
  margin: 10px 0;
  ${mainMenuBackground}

  &.active {
    ${mainMenuBackgroundClick}
  }
  ${boldTitleFont}
  @media (max-width: 699px) {
    display: none;
  }
`;
