import { styled } from "styled-components";

export const LoadingModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: ${({ $isLoading }) => ($isLoading ? "flex" : "none")};
  > div {
    margin: auto;
  }
`;
