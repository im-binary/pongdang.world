import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

export default function Hi() {
  const sceneInfo = [
    {
      // 0
      type: "sticky",
      // 브라우저 높이의 5배로 srollHeight 설정
      heightNum: 5,

      values: {
        messageA_Opacity: [0, 1],
      },

      // objs: {
      //   messageA: document.querySelector(".messageA"),
      // },
    },
    {
      // 1
      type: "nomal",
    },
  ];

  // * ? 참고 : https://stackoverflow.com/questions/45644457/action-on-window-resize-in-react
  // 화면 높이에 따라 스크롤 높이 재조정
  function useWindowSizeChange() {
    const [height, setHeight] = useState(window.innerHeight);

    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    useEffect(() => {
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    });
    return {
      height,
    };
  }

  // 현재 활성화된 화면
  let currentScene = 0;
  const [{ heightNum }] = sceneInfo;
  const { height } = useWindowSizeChange();
  const totalScene = heightNum * height + 50;
  let yOffset = 0;
  const values = sceneInfo[currentScene].values;

  function scrollLoop() {
    if (yOffset < totalScene) {
      currentScene = 0;
    } else if (yOffset > totalScene) {
      currentScene = 1;
    }
  }

  function calcValues() {
    // 스크롤된 범위 비율
    let scrollRatio = yOffset / totalScene;
    let rv = scrollRatio * (values.messageA_Opacity[1] - values.messageA_Opacity[0]) + values.messageA_Opacity[0];
    return rv;
  }

  // className 동적으로 생성
  const [show, setShow] = useState(true);
  useEffect(() => {
    const createClassName = () => {
      if (currentScene === 1) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", createClassName);

    return () => {
      window.removeEventListener("scroll", createClassName);
    };
  }, [currentScene]);

  function playAnimation() {
    // eslint-disable-next-line default-case
    switch (currentScene) {
      case 0:
        let messageOpacity = calcValues();
        // sceneInfo[0].objs.messageA.style.opacity = messageA_Opacity_in;
        console.log(messageOpacity);

        // yOffset이 0 부터 totalScene 까지
        break;
      case 1:
        break;
    }
  }

  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    playAnimation();
    scrollLoop();
  });

  return (
    <>
      <section css={scrollSection} style={{ height: `${heightNum}` * `${height}` }}>
        <h1>안녕하세요 👋</h1>
        <div className={show ? "active" : "none"}>
          <div>
            <p>퐁당의 블로그 입니당 👻</p>
          </div>
          <div>
            <p>
              뒤에 나오는 건<br />
              저희 집 고양이 입니다
            </p>
          </div>
          <div>
            <p>
              이름은 사진이고
              <br />
              아주 귀엽습니다
            </p>
          </div>
          <div>
            <p>🐱 ❤️</p>
          </div>
        </div>
      </section>

      <section css={nomalSection}>
        <h3>🤔 이런 고민을 하는 개발자가 되고 싶어요</h3>
        <ul>
          <li>좋은 사용자 경험은 무엇일까?</li>
          <li>읽기 좋은 코드란 무엇일까?</li>
          <li>변경이 쉽고 확장에 용이한 코드는 무엇일까?</li>
        </ul>
      </section>

      <section>
        <h3>🧑‍💻 아래 기술들을 열심히 배우고 있어요</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, React Redux, Emotion</li>
          <li>AWS S3, CloudFront</li>
          <li>JavaScript를 이용한 알고리즘 문제 해결 / 자료구조</li>
        </ul>
      </section>

      <section>
        <h3>😍 전 이런 걸 좋아해요</h3>
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
    </>
  );
}

const scrollSection = css`
  padding: 50vh 0;
  border: 3px solid black;

  h1 {
    font-size: 30px;
  }

  .active {
    display: block;
  }

  .none {
    display: none;
  }

  div div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    position: fixed;
    /* top: 0; */
    left: 0;
    width: 100%;
    /* background-color: gray; */
    border: 1px solid;
    bottom: 0;
  }

  /* div:nth-child(2) {
  } */
`;

const nomalSection = css`
  height: 1000px;
`;
