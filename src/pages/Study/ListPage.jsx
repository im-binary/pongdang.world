import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { contentContainer } from "../../style/theme";
import { NavLink } from "react-router-dom";
import { usePostTitleList } from "../../hooks/post-title-list";

export default function ListPage() {
  const postList = usePostTitleList();

  return (
    <WrapperDiv>
      <nav>
        <ul>
          {postList.map((post, i) => (
            <li key={`post-${i + 1}`}>
              <NavLink css={navLinkStyle} to={`${post.id}`}>
                {post.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${contentContainer};
`;

const listPageTitle = css`
  color: #8dafff;
`;

const navLinkStyle = css`
  background-color: white;
  border: 3px solid #d0d0d0;
  margin: 20px 0;
  display: block;
  padding: 20px 0;
`;
