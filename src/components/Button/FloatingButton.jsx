import React from "react";
import { css } from "@emotion/react";

export default function FloatingButton() {
  const handleUpClick = () => {
    console.log("클릭");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div css={buttonStyle} onClick={handleUpClick}>
      <i className='fa-solid fa-circle-chevron-up'></i>
    </div>
  );
}

const buttonStyle = css`
  position: fixed;
  bottom: 106px;
  right: 28px;
  font-size: 44px;
`;
