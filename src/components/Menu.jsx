import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
        About
      </NavLink>
      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
        Contact
      </NavLink>
    </nav>
  );
}
