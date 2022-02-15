import React from "react";
import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground, boldTitleFont } from "../../style/theme";

export default function StudyLogPage() {
  return (
    <>
      {/* pc */}

      <div css={pcWrapper}>
        <h1 style={{ display: "none" }}>공부기록</h1>
        <nav>
          <ul css={pcMenuContainer}>
            <li>
              <NavLink css={pcMenu} to='html'>
                HTML
              </NavLink>
            </li>
            <li>
              <NavLink css={pcMenu} to='js'>
                JS
              </NavLink>
            </li>
            <li>
              <NavLink css={pcMenu} to='react'>
                React
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>

      {/* mobile */}

      <div css={mobileWrapper}>
        <h1 style={{ display: "none" }}>공부기록</h1>
        <nav>
          <ul css={mobileMenuContainer}>
            <li>
              <NavLink css={mobileMenu} to='html'>
                HTML
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='js'>
                JS
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                React
              </NavLink>
            </li>
            <li>
              <NavLink css={mobileMenu} to='react'>
                XXXX
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

// pc 버전

const pcWrapper = css`
  @media (max-width: 500px) {
    display: none;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const pcMenuContainer = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  /* border: 1px solid tomato; */
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const pcMenu = css`
  display: block;
  padding: 10px 0;
  margin: 10px 0;
  ${mainMenuBackground}

  &.active {
    ${mainMenuBackgroundClick}
  }
  ${boldTitleFont}
`;

// mobile 버전

const mobileWrapper = css`
  @media (min-width: 501px) {
    display: none;
  }
  background-color: gray;
  border: 3px solid green;
`;

const mobileMenuContainer = css`
  background-color: orange;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  overflow: scroll;
`;

const mobileMenu = css`
  background-color: lemonchiffon;
`;
