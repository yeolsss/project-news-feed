import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
