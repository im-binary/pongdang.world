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
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div css={menu} className='buger-menu-container' onClick={handleMenuClick}>
        <span className={open ? "menu-active" : ""}></span>
        <span className={open ? "menu-active" : ""}></span>
        <span className={open ? "menu-active" : ""}></span>
      </div>
      {open ? (
        <div css={Wrapper} onClick={handleMenuClick}>
          <nav css={navContainer}>
            <ul>
              <p>기록</p>
              <li>
                <NavLink to='/study/frontend'>프론트엔드</NavLink>
              </li>
              <li>
                <NavLink to='/study/coding-test'>코테 수련하기</NavLink>
              </li>
              <p>작품관</p>
              <li>
                <NavLink to='/work'>작품관</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : // 컴포넌트가 렌더링하는 것을 막기
      null}
    </>
  );
}

const Wrapper = css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const menu = css`
  display: none;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @media (max-width: 814px) {
    display: inline-block;
    position: relative;
    top: -4px;
    left: 0;
    width: 28px;
    height: 28px;
    z-index: 100;
    cursor: pointer;

    span {
      transition: transform 0.5s;
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      :nth-of-type(1) {
        top: 0;
      }
      :nth-of-type(2) {
        top: 12px;
      }
      :nth-of-type(3) {
        bottom: 0;
      }
    }

    .menu-active {
      transition: transform 0.5s;
      :nth-of-type(1) {
        -webkit-transform: translateY (12px) rotate (-45deg);
        transform: translateY(12px) rotate(-45deg);
      }
      :nth-of-type(2) {
        animation: fadeout 0.4s;
        opacity: 0;
      }
      :nth-of-type(3) {
        -webkit-transform: translateY(-12px) rotate(45deg);
        transform: translateY(-12px) rotate(45deg);
      }
    }
  }
`;

const navContainer = css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    position: absolute;
    top: 28px;
    right: 12px;
    ${boldTitleFont};
    ${subMenuBgColor};
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 569px) {
      top: 20px;
    }

    @media (max-width: 449px) {
      top: 10px;
    }

    ul {
      text-align: center;
      width: 200px;
    }

    p {
      padding: 6px 16px;
      text-align: start;
      border-top: 1px solid black;
      ${mainTitleColor};
      :first-of-type {
        margin-top: 44px;
      }
    }

    li {
      width: 100%;
      border-top: 1px solid black;

      :hover {
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
      color: black;
    }
  }
`;
