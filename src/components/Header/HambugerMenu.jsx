import { css } from "@emotion/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  mainTitleColor,
  boldTitleFont,
  subMenuBgColor,
  subTextColorHover,
  mainMenuBackgroundHover,
} from "../../style/theme";

export default function HambugerMenu() {
  const [burgermeun, setBurgermeun] = useState(true);

  const handleMenuClick = () => {
    setBurgermeun(!burgermeun);
  };
  return (
    <nav css={navContainer}>
      <img
        onClick={handleMenuClick}
        src='https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM='
        alt='햄버거 메뉴 버튼'
      />
      <ul css={burgermeun ? hidden : ""}>
        <p>기록</p>
        <li>
          <NavLink to='/study/frontend'>프론트엔드</NavLink>
        </li>
        <li>
          <NavLink to='/study/coding-test'>코테 수련하기</NavLink>
        </li>
        <p>작품관</p>
        <li>
          <NavLink to='/contact'>작품관</NavLink>
        </li>
      </ul>
    </nav>
  );
}

const navContainer = css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: end;
    ${boldTitleFont};
    ${subMenuBgColor};
    border-radius: 20px;

    img {
      width: 50px;
      vertical-align: middle;
    }

    ul {
      margin: 20px 0;
      text-align: center;
      width: 200px;
    }

    p {
      padding: 4px 10px;
      text-align: start;
      border-top: 1px solid black;
      ${mainTitleColor};
    }

    li {
      width: 100%;
      border-top: 1px solid;
      :last-child {
        border-bottom: 1px solid;
      }

      &:hover {
        ${subTextColorHover};
      }
      .active {
        ${subTextColorHover};
        ${mainMenuBackgroundHover};
      }
    }

    li > a {
      padding: 20px;
      display: block;
    }
  }
`;

const hidden = css`
  display: none;
`;
