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
    <div css={WrapperDiv}>
      <h1 css={postTitle}>{id}</h1>
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </div>
  );
}

const WrapperDiv = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 4px solid #f0f1f2;
  margin: 10px 0 0 10px;
  padding: 30px 30px;
  text-align: start;
  width: 100%;
`;

const postTitle = css`
  margin: 0 0 30px;
`;
