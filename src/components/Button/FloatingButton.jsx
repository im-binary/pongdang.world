import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

export default function FloatingButton() {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const updateButtonVisible = () => {
      if (window.scrollY > 130) {
        setButton(true);
      } else {
        setButton(false);
      }
    };
    window.addEventListener("scroll", updateButtonVisible);

    return () => {
      window.removeEventListener("scroll", updateButtonVisible);
    };
  }, []);

  const handleTopClick = () => {
    console.log("클릭");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button css={button ? visible : unvisible} onClick={handleTopClick}>
      <i className='fa-solid fa-circle-chevron-up'></i>
    </button>
  );
}

const unvisible = css`
  display: none;
`;

const visible = css`
  opacity: 0.8;
  border: none;
  background-color: unset;
  color: inherit;
  display: block;
  position: fixed;
  bottom: 106px;
  right: 28px;
  font-size: 44px;
`;
