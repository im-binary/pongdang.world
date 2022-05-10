import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HelloPage from "../pages/Hello/HelloPage";

// Study 페이지
import StudyPage from "../pages/Study";
import StudyListPage from "../pages/Study/ListPage";
import StudyPostPage from "../pages/Study/PostPage";

// Work 페이지
import WorkPage from "../pages/Work/index";

// Test 페이지
import TestPage from "../pages/Test/index";
import Hi from "../pages/Test/Hi";
import ScrollText from "../pages/Test/ScrollText";
import HelloPageV2 from "../pages/Hello/HelloPageV2";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HelloPage />} />
      <Route path='/hello-v2' element={<HelloPageV2 />} />
      <Route path='/study' element={<StudyPage />}>
        <Route index element={<Navigate replace to='/study/frontend' />} />
        {/* 리스트 페이지 */}
        <Route path='frontend' element={<StudyListPage />} />
        <Route path='coding-test' element={<StudyListPage />} />
        {/* 상세 페이지 */}
        <Route path='frontend/:id' element={<StudyPostPage />} />
        <Route path='coding-test/:id' element={<StudyPostPage />} />
      </Route>
      <Route path='/work' element={<WorkPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/test/hi' element={<Hi />} />
      <Route path='/test/scrolltext' element={<ScrollText />} />
    </Routes>
  );
}
