import React from "react";
import { css } from "@emotion/react";
import { mainTitleColor, boldTitleFont } from "../../style/theme";
import { Link } from "react-router-dom";

export default function Logo({ text, to = "/" }) {
  return (
    <Link to={to}>
      <h1 css={titleStyle}>{text}</h1>
    </Link>
  );
}

const titleStyle = css`
  @media (min-width: 500px) {
    padding: 20px 0;
    font-size: 50px;
    text-align: start;
    /* border: 1px solid olive; */
    ${mainTitleColor}
    ${boldTitleFont}
  }

  @media (max-width: 569px) {
    font-size: 35px;
    ${mainTitleColor}
    ${boldTitleFont}
  }

  @media (max-width: 449px) {
    font-size: 25px;
    ${mainTitleColor}
    ${boldTitleFont}
  }
`;
