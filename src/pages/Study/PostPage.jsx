import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/category";
import { css } from "@emotion/react";
import { getPost } from "../../remotes/post";
import FloatingButton from "../../components/Button/FloatingButton";

const mdStyle = css`
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  padding: 100px 20px 10px;
  line-height: 1.7;
  position: relative;

  h1 {
    animation: slideUp 0.75s 0.5s cubic-bezier(0.17, 0.88, 0.32, 1.27) both, fadeIn 0.25s 0.5s ease-in both;
    position: absolute;
    text-align: start;
    /* text-shadow: 3px 3px 7px; */
    top: 0;
    left: 20px;
    width: 100%;
  }

  h1:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100px;
    border-bottom: 3px solid #4141f5;
    margin: 20px auto;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(20px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  h2,
  h3:empty {
    position: relative;
    margin: 10px 0;
  }

  h3 code {
    display: unset;
    border-bottom: none;
  }

  img {
    width: 100%;
  }

  ol ul {
    margin-left: 20px;
  }

  ul ol {
    margin-left: 20px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    list-style-position: inside;
  }

  li p {
    display: inline-block;
  }

  code {
    color: black;
    background-color: #e6e6e6;
    box-shadow: 2px 2px 2px #7e7e7ea1;
    border-radius: 4px;
    padding: 2px 6px;
  }

  p code {
    font-size: 12px;
  }

  pre {
    overflow: scroll;
    border-radius: 6px;
    margin: 10px 0;
    padding: 10px 20px;
  }

  pre code {
    border: none;
    background-color: unset;
    box-shadow: unset;
    color: unset;
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
        <div className='md-container' css={mdStyle} dangerouslySetInnerHTML={{ __html: contents }}></div>
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
