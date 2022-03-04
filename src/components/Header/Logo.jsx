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

  @media (max-width: 500px) {
    display: block;
    padding: 20px 0;
    text-align: end;
    ${mainTitleColor}
    ${boldTitleFont}
  }
`;
