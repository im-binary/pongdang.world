import React from "react";
import { css } from "@emotion/react";
import { contentContainer } from "../../style/theme";
import { subTextColorHover } from "../../style/theme";
import { usePostTitleList } from "../../hooks/post-title-list";
import { NavLink } from "react-router-dom";

export default function ListTypeA() {
  const postList = usePostTitleList();

  return (
    <nav css={wraaper}>
      <ul className='content-list'>
        {postList.map((post, i) => (
          <li key={`post-${i + 1}`}>
            <NavLink css={navLinkStyle} to={`${post.id}`}>
              {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const wraaper = css`
  display: flex;
  flex-direction: column;
  ${contentContainer};
`;

const navLinkStyle = css`
  /* background-color: white; */
  /* border: 3px solid #d0d0d0; */
  border-radius: 16px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
  display: block;
  padding: 20px 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
  &:hover {
    ${subTextColorHover};
  }
`;
