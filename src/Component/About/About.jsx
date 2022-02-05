import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Html from "./Html";

export default function About() {
  return (
    <>
      <h1 style={{ display: "none" }}>About</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='html'>HTML</NavLink>
          </li>
          <li>
            <NavLink to='js'>JS</NavLink>
          </li>
          <li>
            <NavLink to='react'>React</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/html/*' element={<Html />} />
      </Routes>
    </>
  );
}
