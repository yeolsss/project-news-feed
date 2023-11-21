import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import Layout from "../layout/Layout";
import Join from "../page/join/Join";
import MyPage from "../page/myPage/MyPage";
import Write from "../page/write/Write";
import Detail from "../page/detail/Detail";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/myPage/:memberId" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
