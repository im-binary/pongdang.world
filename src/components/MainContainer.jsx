import React from "react";
import { css } from "@emotion/react";

export default function MainContainer({ children }) {
  return (
    <div
      css={css`
        padding-top: 105px;
      `}
    >
      {children}
    </div>
  );
}
