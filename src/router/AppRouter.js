import NotFoundPage from "components/NotFoundPage";
import PageOne from "pages/Page-1";
import PageTwo from "pages/Page-2";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pager from "router/Pager";

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/1" element={<PageOne />} />
        <Route exact path="/2" element={<PageTwo />} />
        <Route exact path="/" element={<Navigate to="/1" replace />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Pager />
    </BrowserRouter>
  );
}

export default AppRouter;
