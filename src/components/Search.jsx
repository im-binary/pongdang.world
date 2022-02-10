import React from "react";
import { css } from "@emotion/react";

export default function Search() {
  return (
    <div>
      <input type='text' css={inputStyle} placeholder='검색어를 입력해주세요' />
    </div>
  );
}

const inputStyle = css`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 3px solid #1908a8;
`;
