import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Detail from "../page/detail/Detail";
import Home from "../page/home/Home";
import Join from "../page/join/Join";
import MyPage from "../page/myPage/MyPage";
import Write from "../page/write/Write";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
