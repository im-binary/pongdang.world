import React from "react";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { contentContainer } from "../../style/theme";
import ListTypeButton from "../../components/Button/ListTypeButton";

const DOMAIN = `https://www.pongdang.today`;
const BASE_PATH = `vanilla-blog`;
const URL = `${DOMAIN}/${BASE_PATH}`;

export default function WorkPage(state) {
  const isLongList = useSelector(({ listType }) => listType === "A");

  const workList = [
    { name: "우리집 고양이", url: `${URL}/pongwork/07/20.html` },
    { name: "토끼", url: `${URL}/pongwork/07/22.html` },
    { name: "토끼를 넣은 Profile", url: `${URL}/pongwork/07/24.html` },
    { name: "inline-block 사용해보기", url: `${URL}/pongwork/07/29.html` },
    { name: "float 사용해보기", url: `${URL}/pongwork/07/31.html` },
    { name: "flex 사용해보기", url: `${URL}/pongwork/08/05.html` },
    { name: "position 사용해보기", url: `${URL}/pongwork/08/08.html` },
    {
      name: "자바스크립트 Math.random() 사용해보기",
      url: `${URL}/pongwork/08/12.html`,
    },
    { name: "자바스크립트 방향키 이벤트", url: `${URL}/pongwork/08/15.html` },
    {
      name: "자바스크립트 방향키와 버튼 이벤트",
      url: `${URL}/cc/html/cc07.html`,
    },
    {
      name: "자바스크립트의 Math, String, Date 객체 활용",
      url: `${URL}/pongwork/21/12/25.html`,
    },
    { name: "토끼 계산기", url: `${URL}/pongwork/22/05/11.html` },
  ];
  return (
    <>
      <ListTypeButton />
      {isLongList ? (
        <nav css={wrapperA}>
          <ul className='work-list'>
            {workList.map((work, i) => (
              <li key={`work-${i + 1}`}>
                <a href={`${work.url}`}>{`${work.name}`}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav css={wrapperB}>
          <ul className='work-list'>
            {workList.map((work, i) => (
              <li key={`work-${i + 1}`}>
                <a href={`${work.url}`}>{`${work.name}`}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

const wrapperA = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${contentContainer};

  li {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    border-radius: 16px;
  }
  a {
    padding: 20px 0;
    display: inline-block;
    width: 100%;
  }
`;

const wrapperB = css`
  min-height: 100vh;
  margin-top: 20px;
  ${contentContainer};
  word-break: keep-all;
  text-align: center;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 799px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 499px) {
      grid-template-columns: 1fr;
    }
  }

  li {
    height: 150px;
    border-radius: 16px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;
