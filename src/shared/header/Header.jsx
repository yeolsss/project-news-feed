import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slice/theme.slice";

function Header() {
  const dispatch = useDispatch();

  const handleOnClickThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <header>
      <h1>const itNews = document.getElementById('itNews');</h1>
      <button onClick={handleOnClickThemeToggle}>toggle</button>
    </header>
  );
}

export default Header;
