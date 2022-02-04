import React from "react";
import { NavLink, Outlet } from "react-router-dom";

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
      <Outlet />
    </>
  );
}
