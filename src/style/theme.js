import { css } from "@emotion/react";

export const mainTitleColor = css`
  // blue
  color: #0000cc;
`;

export const mainMenuBackground = css`
  // blue
  background-color: #1908a8;
  color: white;
`;

export const mainMenuBackgroundClick = css`
  // skyblue
  background-color: #8dafff;
`;

export const mainMenuBackgroundHover = css`
  // skyblue
  color: #8dafff;
`;

export const contentContainer = css`
  width: 100%;
  padding: 0 20px 20px;
`;

export const boldTitleFont = css`
  font-family: "Black Han Sans", sans-serif;
`;

export const subTextColor = css`
  color: #e0e0e0;
`;

export const subTextColorHover = css`
  background-color: #e0e0e0;
`;

export const subMenuBgColor = css`
  background-color: #c8c8c8d9;
`;

// TODO: 다크테마 구현해서 블로그에 기록 남기기

export const lightTheme = {
  bgColor: "#fefefe",
  mainTextColor: "#000",
  boxBgColor: "#efefef",
  boxHoverColor: "#e0e0e0",
  btnBorder: "1px solid #eaeaea",
};

export const darkTheme = {
  bgColor: "#323232",
  mainTextColor: "#ececec",
  boxBgColor: "#434343",
  boxHoverColor: "#565656",
  btnBorder: "1px solid #2c2d33",
};

export const theme = {
  lightTheme,
  darkTheme,
};
