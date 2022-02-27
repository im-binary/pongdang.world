import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HelloPage from "../pages/Hello/HelloPage";
import DailyPage from "../pages/Daily/DailyPage";
// Study 페이지
import StudyPage from "../pages/Study";
import StudyInfoPage from "../pages/Study/InfoPage";
import StudyListPage from "../pages/Study/ListPage";
import StudyPostPage from "../pages/Study/PostPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HelloPage />} />
      <Route path='/study' element={<StudyPage />}>
        <Route index element={<Navigate replace to='/study/info' />} />
        <Route path='info' element={<StudyInfoPage />} />
        {/* 리스트 페이지 */}
        <Route path='html' element={<StudyListPage />} />
        <Route path='js' element={<StudyListPage />} />
        <Route path='react' element={<StudyListPage />} />
        {/* 상세 페이지 */}
        <Route path='html/:id' element={<StudyPostPage />} />
        <Route path='js/:id' element={<StudyPostPage />} />
        <Route path='react/:id' element={<StudyPostPage />} />
      </Route>
      <Route path='/contact' element={<DailyPage />} />
    </Routes>
  );
}
