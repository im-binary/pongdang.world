import React from "react";
import { css } from "@emotion/react";
import { subTextColorHover } from "../../style/theme";

export default function WorkPage() {
  return (
    <div css={wrapper}>
      <nav css={navLinkStyle}>
        <ul className='work-list'>
          <li>
            <a href='https://blog.pongdang.today/pongwork/07/20'>우리집 고양이</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/07/22'>토끼</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/07/24'>토끼를 넣은 Profile</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/07/29'>inline-block 사용해보기</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/07/31'>float 사용해보기</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/08/05'>flex 사용해보기</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/08/08'>position 사용해보기</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/08/12'>자바스크립트 Math.random() 사용해보기</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/08/15'>자바스크립트 방향키 이벤트</a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/cc/html/cc07'>자바스크립트 방향키와 버튼 이벤트 </a>
          </li>
          <li>
            <a href='https://blog.pongdang.today/pongwork/21/12/25'>자바스크립트의 Math, String, Date 객체 활용</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 20px 20px;
`;

const navLinkStyle = css`
  li {
    /* background-color: white; */
    /* border: 3px solid #d0d0d0; */
    border-radius: 16px;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    display: block;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    &:hover {
      ${subTextColorHover};
    }
  }

  a {
    display: inline-block;
    width: 100%;
    padding: 20px 0;
  }
`;
