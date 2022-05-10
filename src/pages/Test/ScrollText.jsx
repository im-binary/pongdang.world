import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useScrollY } from "./useScrollY";
import { useSelector } from "react-redux";

export default function ScrollText({ text }) {
  const scrollY = useScrollY();
  const appRef = useSelector(({ appRef }) => appRef);

  const [textIndex, setTextIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    if (appRef.current == null) {
      return;
    }

    const appHeight = appRef.current.clientHeight - window.innerHeight - 100 - 74;
    const textHeightUnit = appHeight / text.length;

    for (let i = 0; i < text.length; i++) {
      if (scrollY < textHeightUnit * (i + 1)) {
        setTextOpacity((scrollY % textHeightUnit) / textHeightUnit);

        setTextIndex(i);

        break;
      }
    }
  }, [appRef, scrollY, text.length]);

  return (
    <div css={wrapper}>
      <span
        css={css`
          position: fixed;
          top: 50%;
          left: 50%;
          opacity: ${textOpacity};
        `}
      >
        {text[textIndex]}
      </span>
    </div>
  );
}

const wrapper = css`
  height: 10000px;
`;
