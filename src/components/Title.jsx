import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { mainTitleColor, boldTitleFont } from "../style/theme";

export default function Title() {
  return (
    <div>
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
      <h1 css={mobileTitle}>PONGDANG</h1>
    </div>
  );
}

const H1 = styled.h1`
  @media (min-width: 500px) {
    padding: 20px 0;
    font-size: 50px;
    text-align: end;
    /* border: 1px solid olive; */
    ${mainTitleColor}
    ${boldTitleFont}
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const mobileTitle = css`
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: block;
    padding: 20px 0;
    text-align: end;
    ${mainTitleColor}
    ${boldTitleFont}
  }
`;
