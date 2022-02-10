import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { contentContainer } from "../../style/theme";
import { NavLink } from "react-router-dom";
import titleList from "../../constants/post/html/title-list";
import Search from "../../components/Search";

export default function HtmlPage() {
  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>HTML</h1>
      <Search />
      <nav>
        <ul>
          {titleList.map((title, i) => (
            <li key={`post-${i + 1}`}>
              <NavLink css={navLinkStyle} to={`${i + 1}`}>
                {title}
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

const navLinkStyle = css`
  background-color: white;
  border: 3px solid #d0d0d0;
  margin: 20px 0;
  display: block;
  padding: 20px 0;
`;

// const StyledNavLink = styled(NavLink)`
//   background-color: white;
//   border: 2px solid #f0f1f2;
//   border-radius: 6px;
//   margin: 10px 0;
//   display: block;
//   padding: 20px 0;
// `;
