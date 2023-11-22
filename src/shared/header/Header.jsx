import { CiDark, CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector, toggleTheme } from "../../redux/slice/theme.slice";
import * as St from "./header.style";

function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector(themeSelector);

  const handleOnClickThemeToggle = () => {
    dispatch(toggleTheme());
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
        <St.ThemeButton onClick={handleOnClickThemeToggle}>
          {theme ? <CiLight /> : <CiDark />}
        </St.ThemeButton>
        <St.HeaderLoginButton>Login</St.HeaderLoginButton>
      </St.HeaderButtonWrapper>
    </St.LayoutHeader>
  );
}

export default Header;
