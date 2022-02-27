import React from "react";
import { Routes, Route } from "react-router-dom";

import HelloPage from "../pages/Hello/HelloPage";
import StudyLogPage from "../pages/StudyLog/StudyLogPage";
import DailyPage from "../pages/Daily/DailyPage";
import ListPage from "../pages/StudyLog/ListPage";
import PostPage from "../pages/StudyLog/PostPage";
import StudyLogIndexPage from "../pages/StudyLog/StudyLogIndexPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HelloPage />} />
      <Route path='/study-log' element={<StudyLogPage />}>
        <Route index element={<StudyLogIndexPage />} />
        {/* 리스트 페이지 */}
        <Route path='html' element={<ListPage />} />
        <Route path='js' element={<ListPage />} />
        <Route path='react' element={<ListPage />} />
        {/* 상세 페이지 */}
        <Route path='html/:id' element={<PostPage />} />
      </Route>
      <Route path='/contact' element={<DailyPage />} />
    </Routes>
  );
}
