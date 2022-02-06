import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Day1 from "../htmlitems/Day1";
import Day2 from "../htmlitems/Day2";

export default function Html() {
  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>HTML</h1>
      <nav>
        <Ul>
          <li>
            <StyledNavLink to='day1'>게시글 1</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='day2'>게시글 2</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='day3'>게시글 3</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='day3'>게시글 3</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='day3'>게시글 3</StyledNavLink>
          </li>
        </Ul>
      </nav>

      <Routes>
        <Route path='day1' element={<Day1 />} />
        <Route path='day2' element={<Day2 />} />
      </Routes>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Ul = styled.ul`
  height: 200px;
  overflow: scroll;
`;

const StyledNavLink = styled(NavLink)`
  background-color: white;
  border: 2px solid #f0f1f2;
  border-radius: 6px;
  margin: 10px 0;
  display: block;
  padding: 20px 0;
`;
