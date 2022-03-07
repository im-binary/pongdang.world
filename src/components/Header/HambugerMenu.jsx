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

const HambugerBtn = ({ open, handleMenuClick }) => {
  return (
    <button css={hambugerBtn(open)}>
      <img
        onClick={handleMenuClick}
        src='https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM='
        alt='햄버거 메뉴 버튼'
      />
    </button>
  );
};

export default function HambugerMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <div css={Wrapper} onClick={() => setOpen(false)}>
          <nav css={navContainer}>
            <HambugerBtn handleMenuClick={handleMenuClick} open={open} />
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
                <NavLink to='/contact'>작품관</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <HambugerBtn handleMenuClick={handleMenuClick} open={open} />
      )}
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

const hambugerBtn = (open) => css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    ${open
      ? css`
          width: 100%;
          text-align: end;
        `
      : css``}
    img {
      width: 50px;
      vertical-align: middle;
    }
  }
`;

const navContainer = css`
  display: none;
  @media (max-width: 814px) {
    display: block;
    position: absolute;
    top: 27px;
    right: 20px;
    text-align: end;
    ${boldTitleFont};
    ${subMenuBgColor};
    border-radius: 20px;

    ul {
      margin: 0 0 20px;
      text-align: center;
      width: 200px;
    }

    p {
      padding: 4px 10px;
      text-align: start;
      border-bottom: 1px solid black;
      ${mainTitleColor};
    }

    li {
      width: 100%;
      border-bottom: 1px solid;

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
