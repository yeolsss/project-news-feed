import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home/Home";
import Detail from "../page/detail/Detail";
import Join from "../page/join/Join";
import MyPage from "../page/myPage/MyPage";
import Write from "../page/write/Write";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
      <Route path="/join" element={<Join />} />
    </Routes>
  </BrowserRouter>
);
