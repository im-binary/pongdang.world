import React from "react";
import { css } from "@emotion/react";
import { contentContainer } from "../../style/theme";
import { usePostTitleList } from "../../hooks/post-title-list";
import { NavLink } from "react-router-dom";

export default function ListTypeA() {
  const postList = usePostTitleList();

  return (
    <nav css={wrapper}>
      <ul className='content-list'>
        {postList.map((post, i) => (
          <li key={`post-${i + 1}`}>
            <NavLink to={`${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  ${contentContainer};

  a {
    border-radius: 16px;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    display: block;
    padding: 20px 10px;
  }
`;
