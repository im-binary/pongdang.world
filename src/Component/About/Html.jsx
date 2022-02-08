import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import titleList from "../../constants/html/title-list";

export default function Html() {
  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>HTML</h1>
      <nav>
        <ul>
          {titleList.map((title, i) => (
            <li key={`post-${i + 1}`}>
              <NavLink className={({ isActive }) => "post-link" + (isActive ? " click" : "")} to={`${i + 1}`}>
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
  width: 100%;
`;

// const Ul = styled.ul`
//   height: 200px;
//   overflow: scroll;
// `;

// const StyledNavLink = styled(NavLink)`
//   background-color: white;
//   border: 2px solid #f0f1f2;
//   border-radius: 6px;
//   margin: 10px 0;
//   display: block;
//   padding: 20px 0;
// `;
