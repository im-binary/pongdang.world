import React from "react";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import {
  mainTitleColor,
  boldTitleFont,
  mainMenuBackgroundClick,
  mainMenuBackgroundHover,
  mainMenuBackground,
} from "../style/theme";

export default function Header() {
  return (
    <div css={pcWrapper}>
      <h1 css={pcTitle}>P O N G D A N G</h1>
      <nav>
        <ul css={pcMenuContainer}>
          <li>
            <NavLink css={pcMenu} to='/study'>
              기록
            </NavLink>
          </li>
          <li>
            <NavLink css={pcMenu} to='/'>
              HELLO
            </NavLink>
          </li>
          <li>
            <NavLink css={pcMenu} to='/contact'>
              작품관
            </NavLink>
          </li>
        </ul>
      </nav>

      <h1 css={mobileTitle}>P O N G D A N G</h1>
    </div>
  );
}

const pcWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const pcTitle = css`
  @media (min-width: 500px) {
    padding: 20px 0;
    font-size: 50px;
    text-align: start;
    /* border: 1px solid olive; */
    ${mainTitleColor}
    ${boldTitleFont}
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const mobileTitle = css`
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: block;
    padding: 20px 0;
    text-align: end;
    ${mainTitleColor}
    ${boldTitleFont}
  }
`;

const pcMenuContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  ${boldTitleFont}
`;

const pcMenu = css`
  padding: 20px 30px;
  display: inline-block;
  line-height: 100%;
  ${mainMenuBackground}
  &.active {
    ${mainMenuBackgroundClick}
    :hover {
      color: white;
    }
  }
  :hover {
    ${mainMenuBackgroundHover}
  }
`;
