import React from "react";
import { css } from "@emotion/react";
import { contentContainer } from "../../style/theme";
import { subTextColorHover } from "../../style/theme";
import { usePostTitleList } from "../../hooks/post-title-list";
import { NavLink } from "react-router-dom";

export default function ListTypeB() {
  const postList = usePostTitleList();

  return (
    <nav css={wraaper}>
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

const wraaper = css`
  margin-top: 20px;
  ${contentContainer};
  word-break: keep-all;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 799px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 499px) {
      grid-template-columns: 1fr;
    }
  }

  li {
    height: 150px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    &:hover {
      ${subTextColorHover};
    }
  }
`;
