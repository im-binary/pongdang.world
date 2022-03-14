import React from "react";
import { css } from "@emotion/react";
import BreadCrumbs from "./BreadCrumbs";

export default function MainContainer({ children }) {
  return (
    <div
      css={css`
        padding-top: 105px;
        @media (max-width: 569px) {
          padding-top: 88px;
        }

        @media (max-width: 449px) {
          padding-top: 70px;
        }
      `}
    >
      {/* TODO: example) <BreadCrumbs linkList={linkList} /> */}
      <BreadCrumbs />
      {children}
    </div>
  );
}
