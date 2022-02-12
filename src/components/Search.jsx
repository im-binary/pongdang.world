import React from "react";
import { css } from "@emotion/react";
import { boldTitleFont } from "../style/theme";

export default function Search() {
  return (
    <div>
      <input type='text' css={inputStyle} placeholder='검색어를 입력해주세요' />
    </div>
  );
}

const inputStyle = css`
  width: 100%;
  height: 46px;
  padding: 0 10px;
  border: 3px solid #1908a8;
  ${boldTitleFont}
  letter-spacing: 2px;
  font-size: 20px;
`;
