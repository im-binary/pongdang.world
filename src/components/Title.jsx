import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { mainTitleColor, boldTitleFont } from "../style/theme";

export default function Title() {
  return (
    <H1>
      {"PONGDANG".split("").map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          css={css`
            padding-left: 20px;
          `}
        >
          {letter}
        </span>
      ))}
    </H1>
  );
}

const H1 = styled.h1`
  padding: 20px 0;
  font-size: 50px;
  text-align: end;
  /* border: 1px solid olive; */
  ${mainTitleColor}
  ${boldTitleFont}
`;
