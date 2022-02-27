import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/category";
import { css } from "@emotion/react";
import { getPost } from "../../remotes/post";

export default function PostPage() {
  const [contents, setContents] = useState("");
  const { id } = useParams();
  const category = useCategory();

  useEffect(() => {
    getPost(category, id).then((e) => setContents(e.data));
  }, [category, id]);

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
