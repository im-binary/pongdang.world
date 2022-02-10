import React from "react";
import { Routes, Route } from "react-router-dom";

import StartPage from "../pages/Start/StartPage";
import ContactPage from "../pages/Contact/ContactPage";
import AboutPage from "../pages/About/AboutPage";
import HtmlPage from "../pages/About/HtmlPage";
import JsPage from "../pages/About/JsPage";
import ReactPage from "../pages/About/ReactPage";
import PostPage from "../pages/About/PostPage";
import AboutIndexPage from "../pages/About/AboutIndexPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<StartPage />} />
      <Route path='/about' element={<AboutPage />}>
        <Route index element={<AboutIndexPage />} />
        <Route path='html' element={<HtmlPage />} />
        <Route path='html/:id' element={<PostPage />} />
        <Route path='js' element={<JsPage />} />
        <Route path='react' element={<ReactPage />} />
      </Route>
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}
