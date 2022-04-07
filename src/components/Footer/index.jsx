import React from "react";
import { css } from "@emotion/react";

export default function Footer() {
  return (
    <footer css={footer}>
      <hr />
      <p>
        Copyright © 2022
        <span>
          <a href='https://github.com/pongdang'> pongdang. </a>
        </span>
        All rights reserved.
      </p>
    </footer>
  );
}

const footer = css`
  p {
    padding: 30px 0;
    font-size: 12px;
    font-weight: bold;
    text-align: end;
  }
`;
