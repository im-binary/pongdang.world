import React from "react";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground, boldTitleFont } from "../style/theme";

export default function Menu() {
  return (
    <>
      {/* pc */}
      <div css={pcWrapper}>
        <nav>
          <ul css={pcMenuContainer}>
            <li>
              <NavLink css={pcMenu} to='/study'>
                공부기록
              </NavLink>
            </li>
            <li>
              <NavLink css={pcMenu} to='/'>
                Hello
              </NavLink>
            </li>
            <li>
              <NavLink css={pcMenu} to='/contact'>
                기록의 퐁당
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile */}

      <div css={mobileWrapper}>
        <nav>
          <ul css={mobileMenuContainer}>
            <li>
              <NavLink css={mobileMenu} to='/study'>
                공부기록
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='/'>
                Hello
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='/contact'>
                기록의 퐁당
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const pcWrapper = css`
  /* pc버전 menu가 500부터 안 보임 */
  @media (max-width: 500px) {
    display: none;
  }
  ${boldTitleFont}
  font-size: 24px;
  margin-bottom: 30px;
  border-bottom: 2px solid #0000cc;
`;

const pcMenuContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const pcMenu = css`
  padding: 20px 30px;
  display: inline-block;
  line-height: 100%;
  ${mainMenuBackground}
  &.active {
    ${mainMenuBackgroundClick}
  }
`;

const mobileWrapper = css`
  /* mobile 버전 menu가 500부터 안 보임 */
  @media (min-width: 501px) {
    display: none;
  }
  ${boldTitleFont}
  font-size: 20px;
  margin-bottom: 10px;
`;

const mobileMenuContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const mobileMenu = css`
  border: 1px solid gainsboro;
  /* padding: 10px 15px; */
  display: inline-block;
  padding: 15px 20px;
  line-height: 100%;
  ${mainMenuBackground}
  &.active {
    ${mainMenuBackgroundClick}
  }
`;
