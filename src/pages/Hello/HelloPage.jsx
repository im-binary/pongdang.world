import React from "react";
import { css } from "@emotion/react";

export default function HelloPage() {
  return (
    <div css={contentContainer} className='content-container'>
      <h1>
        안녕하세요 👋 <br /> 퐁당의 블로그 입니당 👻
      </h1>

      <section>
        <h3>🤔 저는 이런 고민을 합니당</h3>
        <ul>
          <li>좋은 사용자 경험은 무엇일까?</li>
          <li>읽기 좋은 코드란 무엇일까?</li>
          <li>변경이 쉽고 확장에 용이한 코드는 무엇일까?</li>
        </ul>
      </section>

      <section>
        <h3>🧑‍💻 아래 기술들을 찍먹해보았어요</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, React Redux, Emotion</li>
          <li>AWS S3, CloudFront</li>
          <li>JavaScript를 이용한 알고리즘 문제 해결 / 자료구조</li>
        </ul>
      </section>

      <section>
        <h3>😍 저는 이런 걸 좋아해요</h3>
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
  );
}

const contentContainer = css`
  text-align: center;
  margin: 20px;
  line-height: 2;
  min-height: 100vh;
  word-break: keep-all;
  ul {
    text-align: start;
    padding-left: 12px;
    max-width: 400px;
    margin: 10px auto;
  }

  li {
    list-style: disc;
  }

  h3 {
    margin-bottom: 12px;
    display: inline-block;
    position: relative;

    @media (min-width: 347px) {
      ::after {
        content: "";
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 10px;
        width: 100%;
        background-color: black;
        opacity: 0.3;
      }
    }
  }

  section {
    margin: 34px 0;
  }

  a {
    text-decoration: underline;
  }

  h1 {
    border-bottom: 4px solid;
    display: inline;

    @media (max-width: 536px) {
      font-size: 20px;
    }
  }
`;
