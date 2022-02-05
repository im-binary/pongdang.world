import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Day1 from "../htmlitems/Day1";
import Day2 from "../htmlitems/Day2";

export default function Html() {
  return (
    <>
      <h1 style={{ display: "none" }}>HTML</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='day1'>게시글 1</NavLink>
          </li>
          <li>
            <NavLink to='day2'>게시글 2</NavLink>
          </li>
          <li>
            <NavLink to='day3'>게시글 3</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='day1' element={<Day1 />} />
        <Route path='day2' element={<Day2 />} />
      </Routes>
    </>
  );
}
