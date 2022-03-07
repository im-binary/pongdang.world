import { css } from "@emotion/react";
import React from "react";
import {
  mainMenuBackgroundClick,
  mainMenuBackgroundHover,
  mainMenuBackground,
  subMenuBgColor,
  subTextColorHover,
} from "../../style/theme";
import { NavLink } from "react-router-dom";

// TODO: 이쁘게 리팩토링하기
export default function Dropdown({ menu }) {
  const { name, path, subMenuList } = menu;

  return (
    <nav css={dropdownStyle}>
      <NavLink to={path} css={pcMenu}>
        {name}
      </NavLink>
      <nav className='dropdown-content'>
        {subMenuList &&
          subMenuList.map((subMenu) => (
            <NavLink key={`${subMenu.name}-${subMenu.path}`} to={`/${path}/${subMenu.path}`}>
              {subMenu.name}
            </NavLink>
          ))}
      </nav>
    </nav>
  );
}

const dropdownStyle = css`
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    ${subMenuBgColor};
    width: 100%;
    z-index: 1;

    a {
      display: block;
      padding: 10px 0;

      &:hover {
        ${subTextColorHover}
      }
    }

    .active {
      ${subTextColorHover}
      text-decoration: underline;
    }
  }

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`;

const pcMenu = css`
  font-size: 24px;
  padding: 20px 45px;
  display: inline-block;
  line-height: 100%;
  ${mainMenuBackground}

  &.active {
    ${mainMenuBackgroundClick}

    &:hover {
      color: white;
    }
  }

  &:hover {
    ${mainMenuBackgroundHover}
  }

  @media (max-width: 814px) {
    display: none;
  }
`;
