import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from "./Start";
import Contact from "./Contact";
import About from "./About/About";
import Html from "./About/Html";
import "../style/link.css";
import Js from "./About/Js";
import Rreact from "./About/Rreact";
import Post from "./About/Post";

export default function Homepage() {
  return (
    <>
      <BrowserRouter>
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
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/about' element={<About />}>
            <Route path='html' element={<Html />} />
            <Route path='html/:id' element={<Post />} />
            <Route path='js' element={<Js />} />
            <Route path='react' element={<Rreact />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
