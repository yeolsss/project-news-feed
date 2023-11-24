import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import LoadingModal from "./components/loadingModal/LoadingModal";

import { themeSelector } from "./redux/slice/theme.slice";
import { Router } from "./shared/Router";
import { GlobalFonts } from "./shared/styles/GlobalFonts";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import { darkTheme, lightTheme } from "./shared/theme";

function App() {
  const { theme } = useSelector(themeSelector);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalFonts />
      <GlobalStyles />
      <StContainer>
        <Router />
      </StContainer>
      <LoadingModal />
    </ThemeProvider>
  );
}

const StContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  background-color: var(--backgroundColor3);
  transition: background-color 0.3s ease-in-out;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default App;
