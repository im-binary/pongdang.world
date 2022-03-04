import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/category";
import { css } from "@emotion/react";
import { getPost } from "../../remotes/post";

const mdStyle = css`
  h1,
  h2,
  h3 {
    margin: 20px 0;
  }

  p {
    line-height: 1.8;
    margin: 10px 0;
  }

  pre {
    padding: 20px 30px;
    background-color: #cdcdcd;
    border-radius: 20px;
    margin: 10px 0;
    overflow: scroll;
  }

  img {
    width: 100%;
  }

  li {
    list-style: inside;
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
  margin: 10px 0 0 10px;
  padding: 10px 30px;
  text-align: start;
  width: 100%;
`;

const mobileWrapper = css`
  @media (min-width: 700px) {
    display: none;
  }
  text-align: start;
  padding: 16px 20px;
`;
