import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginModal from "../components/loginModal/LoginModal";
import { selectLoginModal } from "../redux/slice/loginModal.slice";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
import { LoginProvider } from "../context/login.context";

function Layout() {
  const isLoginModal = useSelector(selectLoginModal);

  return (
    <LoginProvider>
      <Header />
      <Outlet />
      <Footer />
      {isLoginModal && <LoginModal />}
    </LoginProvider>
  );
}

export default Layout;
