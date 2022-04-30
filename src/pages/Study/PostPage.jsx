import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/category";
import { css } from "@emotion/react";
import { getPost } from "../../remotes/post";
import FloatingButton from "../../components/Button/FloatingButton";

const mdStyle = css`
  h1 {
    background-color: #a0a0a05f;
    border-radius: 10px;
    padding-bottom: 10px;
    padding: 10px 0;
    font-size: 26px;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 20px 0;
  }

  p {
    line-height: 1.8;
    margin: 10px 0;
  }

  code {
    display: inline-block;
    padding: 0px 12px;
    margin: 2px 0;
    background-color: #9b9b9b;
    color: black;
    border-radius: 20px;
  }

  pre {
    padding: 20px 30px;
    background-color: #9b9b9b;
    color: black;
    border-radius: 20px;
    margin: 10px 0;
    overflow: scroll;
  }

  pre code {
    padding: unset;
    margin: unset;
  }

  img {
    width: 100%;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin-left: 20px;
  }

  a {
    color: red;
    font-weight: bold;
  }
`;

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
        {/* <h1 css={pcPostTitle}>{id}</h1> */}
        <div css={mdStyle} dangerouslySetInnerHTML={{ __html: contents }}></div>
        <FloatingButton />
      </div>
      <div css={mobileWrapper}>
        {/* <h1 css={mobilePostTitle}>{id}</h1> */}
        <div css={mdStyle} dangerouslySetInnerHTML={{ __html: contents }}></div>
      </div>
    </>
  );
}

const pcWrapper = css`
  @media (max-width: 699px) {
    display: none;
  }
  width: 100%;
  padding: 10px 30px;
  text-align: start;
  h1 {
    text-align: center;
  }
`;

const mobileWrapper = css`
  @media (min-width: 700px) {
    display: none;
  }
  width: 100%;
  text-align: start;
  padding: 16px 20px;
  h1 {
    text-align: center;
  }
`;
