import React from "react";
import { Routes, Route } from "react-router-dom";

import HelloPage from "../pages/Hello/HelloPage";
import StudyLogPage from "../pages/Studylog/StudyLogPage";
import DailyPage from "../pages/Daily/DailyPage";
import HtmlPage from "../pages/Studylog/HtmlPage";
import JsPage from "../pages/Studylog/JsPage";
import ReactPage from "../pages/Studylog/ReactPage";
import PostPage from "../pages/Studylog/PostPage";
import StudyLogIndexPage from "../pages/Studylog/StudyLogIndexPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HelloPage />} />
      <Route path='/studylog' element={<StudyLogPage />}>
        <Route index element={<StudyLogIndexPage />} />
        <Route path='html' element={<HtmlPage />} />
        <Route path='html/:id' element={<PostPage />} />
        <Route path='js' element={<JsPage />} />
        <Route path='react' element={<ReactPage />} />
      </Route>
      <Route path='/contact' element={<DailyPage />} />
    </Routes>
  );
}
