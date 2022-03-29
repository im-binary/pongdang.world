import React from "react";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

export default function StudyPage() {
  return (
    <>
      {/* pc */}
      <div css={pcWrapper}>
        <Outlet />
      </div>

      {/* mobile */}
      <div css={mobileWrapper}>
        <Outlet />
      </div>
    </>
  );
}

// pc 버전

const pcWrapper = css`
  @media (max-width: 699px) {
    display: none;
  }
`;

const mobileWrapper = css`
  @media (min-width: 700px) {
    display: none;
  }
`;
