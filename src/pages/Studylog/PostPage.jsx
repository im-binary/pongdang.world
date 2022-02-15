import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";

export default function PostPage() {
  let [contents, setContents] = useState("");
  let { id } = useParams();
  // 게시물을 불러오는 방법
  // 1. API(fetch, ajax, axios)를 써서 서버 혹은 cdn에서 불러온다.
  // 2. 상수값으로 불러오자
  useEffect(() => {
    (() => import("../../constants/post/html/" + id + ".js"))().then(({ default: contents }) => setContents(contents));
  }, [id]);

  return (
    <>
      <div css={pcWrapper}>
        <h1 css={pcPostTitle}>{id}</h1>
        <div dangerouslySetInnerHTML={{ __html: contents }}></div>
      </div>
      <div css={mobileWrapper}>
        <h1 css={mobilePostTitle}>{id}</h1>
        <div dangerouslySetInnerHTML={{ __html: contents }}></div>
      </div>
    </>
  );
}

const pcWrapper = css`
  @media (max-width: 699px) {
    display: none;
  }
  width: 100%;
  border: 4px solid #d0d0d0;
  margin: 10px 0 0 10px;
  padding: 30px 30px;
  text-align: start;
  width: 100%;
`;

const pcPostTitle = css`
  margin: 0 0 30px;
`;

const mobileWrapper = css`
  @media (min-width: 700px) {
    display: none;
  }
  border: 3px solid #d0d0d0;
  text-align: start;
  padding: 16px 20px;
`;

const mobilePostTitle = css`
  margin-bottom: 14px;
`;
