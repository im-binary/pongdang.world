import React from "react";
import { css } from "@emotion/react";

export default function HelloPage() {
  return (
    <div
      css={css`
        ${contentContainer}
        border: 4px solid #8dafff;
        text-align: start;
        word-break: keep-all;
        @media (max-width: 501px) {
          border: 3px solid #8dafff;
        }
      `}
    >
      <h1>안녕하세요 👋 퐁당의 블로그 입니당 👻</h1>

      <div
        css={css`
          ${contentContainer}
          margin: 20px auto;
          ul {
            list-style-type: georgian;
            padding-left: 12px;
          }
          li {
            list-style: inside;
          }
          h3 {
            margin-bottom: 12px;
          }
          section {
            margin: 12px 0;
          }
          a {
            text-decoration: underline;
          }
        `}
      >
        <section>
          <h3> 🤔 이런 고민을 하는 개발자가 되고 싶어요</h3>
          <ul>
            <li>좋은 사용자 경험은 무엇일까?</li>
            <li>읽기 좋은 코드란 무엇일까?</li>
            <li>변경이 쉽고 확장에 용이한 코드는 무엇일까?</li>
          </ul>
        </section>
        <section>
          <h3> 🧑‍💻 아래 기술들을 열심히 배우고 있어요</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, React Redux, Emotion</li>
            <li>AWS S3, CloudFront</li>
            <li>JavaScript를 이용한 알고리즘 문제 해결 / 자료구조</li>
          </ul>
        </section>

        <section>
          <h3> 😍 전 이런 걸 좋아해요</h3>
          <ul>
            <li>😻 고양이를 좋아합니다.</li>
            <li>📚 책 읽는 걸 좋아합니다.</li>
            <li>💙 귀여운 것들을 좋아합니다.</li>
          </ul>
        </section>

        <section>
          <h3>Blogs</h3>
          <ul>
            <li>
              <a href='https://blog.pongdang.today'>👉 blog.pongdang.today</a>
            </li>
            <li>
              <a href='https://velog.io/@pongdang'>👉 velog.io/@pongdang</a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Contacts</h3>
          <ul>
            <li>👉 pongpong0121@kakao.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

const contentContainer = css`
  width: 100%;
  margin: 10px 0;
  padding: 20px;

  h1 {
    border-bottom: 4px solid;
    display: inline;

    @media (max-width: 536px) {
      font-size: 20px;
    }
  }
`;
