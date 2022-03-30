import React from "react";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { contentContainer } from "../../style/theme";
import ListTypeButton from "../../components/Button/ListTypeButton";

export default function WorkPage(state) {
  const isLongList = useSelector(({ listType }) => listType === "A");

  const workList = [
    { name: "우리집 고양이", url: "https://blog.pongdang.today/pongwork/07/20" },
    { name: "토끼", url: "https://blog.pongdang.today/pongwork/07/22" },
    { name: "토끼를 넣은 Profile", url: "https://blog.pongdang.today/pongwork/07/24" },
    { name: "inline-block 사용해보기", url: "https://blog.pongdang.today/pongwork/07/29" },
    { name: "float 사용해보기", url: "https://blog.pongdang.today/pongwork/07/31" },
    { name: "flex 사용해보기", url: "https://blog.pongdang.today/pongwork/08/05" },
    { name: "position 사용해보기", url: "https://blog.pongdang.today/pongwork/08/08" },
    { name: "자바스크립트 Math.random() 사용해보기", url: "https://blog.pongdang.today/pongwork/08/12" },
    { name: "자바스크립트 방향키 이벤트", url: "https://blog.pongdang.today/pongwork/08/15" },
    { name: "자바스크립트 방향키와 버튼 이벤트", url: "https://blog.pongdang.today/cc/html/cc07" },
    { name: "자바스크립트의 Math, String, Date 객체 활용", url: "https://blog.pongdang.today/pongwork/21/12/25" },
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
  display: flex;
  flex-direction: column;
  ${contentContainer};
  li {
    border-radius: 16px;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    display: block;
    padding: 20px 0;
  }
`;

const wrapperB = css`
  margin-top: 20px;
  ${contentContainer};
  word-break: keep-all;

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
