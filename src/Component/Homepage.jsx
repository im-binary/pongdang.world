import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from "./Start";
import Contact from "./Contact";
import About from "./About";
import "../style/link.css";

export default function Homepage() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink className={({ isActive }) => "link" + (isActive ? " click" : "")} to='/'>
            Home
          </NavLink>
          <NavLink className='link' to='about'>
            About
          </NavLink>
          <NavLink className={({ isActive }) => "link" + (isActive ? " click" : "")} to='contact'>
            Contact
          </NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
