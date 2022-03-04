import React from "react";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

export default function StudyPage() {
  return (
    <>
      {/* pc */}
      <div css={pcWrapper}>
        <h1 style={{ display: "none" }}>기록</h1>
        <Outlet />
      </div>

      {/* mobile */}
      <div css={mobileWrapper}>
        <h1 style={{ display: "none" }}>기록</h1>
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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const mobileWrapper = css`
  @media (min-width: 700px) {
    display: none;
  }
`;
