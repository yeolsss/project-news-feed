import { CiDark, CiLight } from "react-icons/ci";
import { FaHouseUser, FaUserNinja } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useRoot } from "../../context/root.context";
import { openLoginModal } from "../../redux/slice/loginModal.slice";
import { themeSelector, toggleTheme } from "../../redux/slice/theme.slice";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as St from "./header.style";

function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector(themeSelector);
  const [isDropDown, setIsDropDown] = useState(false);
  // 요놈 가져다 쓰면 로그인 됐는지 알 수 있다.
  const { isLogin, logout, userInfo } = useRoot();

  const navigate = useNavigate();

  const handleOnClickThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleOnClickLogin = (type) => {
    if (type === "login") {
      dispatch(openLoginModal());
    } else {
      navigate("/join");
    }
  };

  const handelOnClickDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleOnClickLogout = () => {
    logout();
  };
  return (
    <St.LayoutHeader>
      <St.HeaderWrapper>
        <Link to="/">
          <h1>
            <St.LayoutHeaderConst>const</St.LayoutHeaderConst> itNews{" "}
            <St.LayoutHeaderEqual>=</St.LayoutHeaderEqual>{" "}
            document.getElementById(
            <St.LayoutHeaderString>"itNews"</St.LayoutHeaderString>);
          </h1>
        </Link>
      </St.HeaderWrapper>
      <St.HeaderButtonWrapper>
        <St.HeaderButton onClick={handleOnClickThemeToggle}>
          {theme ? <CiLight /> : <CiDark />}
        </St.HeaderButton>
        {!isLogin ? (
          <>
            <St.HeaderLoginButton onClick={() => handleOnClickLogin("login")}>
              Login
            </St.HeaderLoginButton>
            <St.HeaderLoginButton onClick={() => handleOnClickLogin("signUp")}>
              signUp
            </St.HeaderLoginButton>
          </>
        ) : (
          <>
            <St.HeaderButton onClick={handelOnClickDropDown}>
              <FaUserNinja />
            </St.HeaderButton>
            <St.DropDownMenu $isDropDown={isDropDown}>
              <li>
                <Link to="/my-page">마이페이지</Link>
                <FaHouseUser />
              </li>
              <li>
                <St.LogoutButton onClick={handleOnClickLogout}>
                  Logout
                </St.LogoutButton>
                <RiLogoutBoxRFill />
              </li>
            </St.DropDownMenu>
          </>
        )}
      </St.HeaderButtonWrapper>
    </St.LayoutHeader>
  );
}

export default Header;
