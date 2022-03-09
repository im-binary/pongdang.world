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
      <div css={menu} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {open ? (
        <div css={Wrapper} onClick={handleMenuClick}>
          <nav css={navContainer}>
            <ul>
              <p>pongdang</p>
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
  @media (max-width: 814px) {
    display: inline-block;
    transition: all 0.4;
    position: relative;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    z-index: 100;
    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #000;
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
  }
`;

const navContainer = css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    position: absolute;
    top: 80px;
    right: 20px;
    ${boldTitleFont};
    ${subMenuBgColor};
    border-radius: 20px;
    overflow: hidden;

    ul {
      text-align: center;
      width: 200px;
    }

    p {
      padding: 6px 16px;
      text-align: start;
      border-bottom: 1px solid black;
      ${mainTitleColor};
      :first-child {
        text-align: center;
      }
    }

    li {
      width: 100%;
      border-bottom: 1px solid;
      :last-child {
        border-bottom: none;
      }

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
    }
  }
`;
