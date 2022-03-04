import React from "react";
import { css } from "@emotion/react";
import BreadCrumbs from "./BreadCrumbs";

export default function MainContainer({ children }) {
  return (
    <div
      css={css`
        padding-top: 105px;
      `}
    >
      {/* TODO: example) <BreadCrumbs linkList={linkList} /> */}
      <BreadCrumbs />
      {children}
    </div>
  );
}
