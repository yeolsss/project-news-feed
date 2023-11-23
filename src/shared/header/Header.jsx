import { CiDark, CiLight } from "react-icons/ci";
import { FaHouseUser, FaUserNinja } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useRoot } from "../../context/root.context";
import { openLoginModal } from "../../redux/slice/loginModal.slice";
import { themeSelector, toggleTheme } from "../../redux/slice/theme.slice";

import { useState } from "react";
import * as St from "./header.style";

function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector(themeSelector);
  const [isDropDown, setIsDropDown] = useState(false);
  // 요놈 가져다 쓰면 로그인 됐는지 알 수 있다.
  const { isLogin, logout, userInfo } = useRoot();
  console.log(userInfo);

  const handleOnClickThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleOnClickLogin = () => {
    dispatch(openLoginModal());
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
        <h1>
          <St.LayoutHeaderConst>const</St.LayoutHeaderConst> itNews{" "}
          <St.LayoutHeaderEqual>=</St.LayoutHeaderEqual>{" "}
          document.getElementById(
          <St.LayoutHeaderString>"itNews"</St.LayoutHeaderString>);
        </h1>
      </St.HeaderWrapper>
      <St.HeaderButtonWrapper>
        <St.HeaderButton onClick={handleOnClickThemeToggle}>
          {theme ? <CiLight /> : <CiDark />}
        </St.HeaderButton>
        {!isLogin ? (
          <St.HeaderLoginButton onClick={handleOnClickLogin}>
            Login
          </St.HeaderLoginButton>
        ) : (
          <>
            <St.HeaderButton onClick={handelOnClickDropDown}>
              <FaUserNinja />
            </St.HeaderButton>
            <St.DropDownMenu $isDropDown={isDropDown}>
              <li>
                마이페이지
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
