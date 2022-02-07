import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Day1 from "../htmlitems/Day1";
import Day2 from "../htmlitems/Day2";

export default function Html() {
  const [height, setHeight] = useState("100%");
  const [overflow, setOverflow] = useState("");

  function handlePostClick() {
    setHeight("200px");
    setOverflow("scroll");
  }

  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>HTML</h1>
      <nav>
        <ul style={{ height: `${height}`, overflow: `${overflow}` }}>
          <li>
            <NavLink
              onClick={() => handlePostClick()}
              className={({ isActive }) => "post-link" + (isActive ? " click" : "")}
              to='day1'
            >
              게시글 1
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handlePostClick()}
              className={({ isActive }) => "post-link" + (isActive ? " click" : "")}
              to='day2'
            >
              게시글 2
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handlePostClick()}
              className={({ isActive }) => "post-link" + (isActive ? " click" : "")}
              to='day3'
            >
              게시글 3
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handlePostClick()}
              className={({ isActive }) => "post-link" + (isActive ? " click" : "")}
              to='day4'
            >
              게시글 4
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => handlePostClick()}
              className={({ isActive }) => "post-link" + (isActive ? " click" : "")}
              to='day5'
            >
              게시글 5
            </NavLink>
          </li>
        </ul>
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
