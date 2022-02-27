import React from "react";
import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground, boldTitleFont } from "../../style/theme";

export default function StudyLogPage() {
  const menuList = [
    { path: "js", name: "JS" },
    { path: "html", name: "HTML" },
    { path: "react", name: "React" },
  ];

  return (
    <>
      {/* pc */}

      <div css={pcWrapper}>
        <h1 style={{ display: "none" }}>공부기록</h1>
        <nav>
          <ul css={pcMenuContainer}>
            {menuList.map((menu) => (
              <li key={menu.path}>
                <NavLink css={pcMenu} to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>

      {/* mobile */}

      <div css={mobileWrapper}>
        <h1 style={{ display: "none" }}>공부기록</h1>
        <nav>
          <ul css={mobileMenuContainer}>
            {menuList.map((menu) => (
              <li key={menu.path}>
                <NavLink css={mobileMenu} to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

// pc 버전

const pcWrapper = css`
  @media (max-width: 699px) {
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
  @media (min-width: 700px) {
    display: none;
  }
`;

const mobileMenuContainer = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 12px;
  overflow: scroll;
  margin-bottom: 10px;
  border: 3px solid #d0d0d0;
  border-radius: 10px;
  padding: 10px 6px;
`;

const mobileMenu = css`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 18px;
  ${mainMenuBackground} &.active {
    ${mainMenuBackgroundClick}
  }
  ${boldTitleFont}
`;
