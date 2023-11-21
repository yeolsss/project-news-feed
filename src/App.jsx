import styled from "styled-components";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <StContainer>
        <Router />
      </StContainer>
    </BrowserRouter>
  );
}

const StContainer = styled.div`
  box-shadow: inset 0 0 20px red;
  max-width: 100rem;
  margin: 0 auto;
`;
export default App;
