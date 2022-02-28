import { css } from "@emotion/react";
import React from "react";
import { mainTitleColor, boldTitleFont } from "../style/theme";

export default function Title() {
  return (
    <div>
      <h1 css={pcTitle}>
        {"PONGDANG".split("").map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            css={css`
              padding-right: 20px;
            `}
          >
            {letter}
          </span>
        ))}
      </h1>
      <h1 css={mobileTitle}>P O N G D A N G</h1>
    </div>
  );
}

const pcTitle = css`
  @media (min-width: 500px) {
    padding: 20px 0;
    font-size: 50px;
    text-align: start;
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
