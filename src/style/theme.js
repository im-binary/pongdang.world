import { css } from "@emotion/react";

// TODO: 다크테마 구현해서 블로그에 기록 남기기

export const mainTitleColor = css`
  color: #0000cc;
`;

export const mainMenuBackground = css`
  background-color: #1908a8;
  color: white;
`;

export const mainMenuBackgroundClick = css`
  background-color: #8dafff;
`;

export const mainMenuBackgroundHover = css`
  color: #8dafff;
`;

export const contentContainer = css`
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0 0 10px;
  padding: 20px;
  @media (max-width: 699px) {
    margin: 0;
    background-color: white;
  }
`;

export const boldTitleFont = css`
  font-family: "Black Han Sans", sans-serif;
`;
