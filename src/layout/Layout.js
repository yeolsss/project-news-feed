import React from "react";
import { Outlet } from "react-router-dom";
import LoginModal from "../components/loginModal/LoginModal";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <LoginModal />
    </>
  );
}

export default Layout;
