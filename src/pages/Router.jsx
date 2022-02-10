import React from "react";
import { Routes, Route } from "react-router-dom";

import Start from "./Start/StartPage";
import Contact from "./Contact/ContactPage";
import About from "./About/AboutPage";
import Html from "./About/HtmlPage";
import Js from "./About/JsPage";
import Rreact from "./About/ReactPage";
import Post from "./About/PostPage";
import AboutIndex from "./About/AboutIndexPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<Start />} />
      <Route path='/about' element={<About />}>
        <Route index element={<AboutIndex />} />
        <Route path='html' element={<Html />} />
        <Route path='html/:id' element={<Post />} />
        <Route path='js' element={<Js />} />
        <Route path='react' element={<Rreact />} />
      </Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
