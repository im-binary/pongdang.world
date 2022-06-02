import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

export default function NotFound() {
  return (
    <section css={wrapper}>
      <h2>⚠️ 404 NotFound</h2>
      <p>페이지를 찾을 수 없어요 😢</p>
      <ul>
        <li>
          <NavLink to={"/"}>🚪 메인 화면으로 돌아가기</NavLink>
        </li>
      </ul>
    </section>
  );
}

const wrapper = css`
  margin: 20px 0;
  min-height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h2 {
    color: #8dafff;
    font-size: 25px;
  }
  p {
    margin: 30px 0;
    font-weight: bold;
  }

  li a {
    text-decoration: underline;
    :hover {
      color: #4141f5;
    }
  }
`;
