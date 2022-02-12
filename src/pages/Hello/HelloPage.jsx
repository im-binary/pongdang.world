import React from "react";
import { css } from "@emotion/react";

export default function HelloPage() {
  return (
    <div css={contentContainer}>
      <h1>👋 안녕하세요. 퐁당 입니다!</h1>
    </div>
  );
}

const contentContainer = css`
  width: 100%;
  border: 4px solid #f0f1f2;
  margin: 10px 0;
  padding: 20px;
`;
