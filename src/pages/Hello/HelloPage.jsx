import React from "react";
import { css } from "@emotion/react";

export default function HelloPage() {
  return (
    <div css={contentContainer}>
      <h1>안녕하세요👋 퐁당의 블로그 입니다.</h1>
      <p></p>
    </div>
  );
}

const contentContainer = css`
  width: 100%;
  border: 4px solid #d0d0d0;
  margin: 10px 0;
  padding: 20px;
  @media (max-width: 501px) {
    border: 3px solid #d0d0d0;
  }

  h1 {
    @media (max-width: 501px) {
      font-size: 22px;
    }
  }
`;
