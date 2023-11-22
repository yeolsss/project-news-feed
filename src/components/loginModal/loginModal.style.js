import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { JoinButton } from "../joinMan/joinMain.style";
export const LoginModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: ${({ $isModalOpen }) => {
    console.log($isModalOpen);
    return $isModalOpen ? "flex" : "none";
  }};
  /* display: flex; */
`;

export const LoginWrapper = styled.main`
  width: 50vw;
  height: 70vh;
  min-height: 90rem;
  min-width: 51rem;
  background-color: var(--backgroundColor3);
  margin: auto;
  border-radius: 1rem;
  display: flex;
  position: relative;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    margin: auto;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  > input:first-child {
    margin-bottom: 2rem;
  }
`;

export const JoinLink = styled(Link)`
  color: var(--textColor1);
  font-size: 1.6rem;
`;

export const SnsButton = styled(JoinButton)`
  background-color: var(--backgroundColor2);
  font-weight: 700;
  color: var(--textColor1);
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 10;
  cursor: pointer;
  > div {
    width: 100%;
    height: 100%;
    &::after,
    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      will-change: transform, margin-top;
      transition-property: transform, margin-top;
      transition-duration: 300ms;
      transition-timing-function: ease-out;
      content: "";
      width: 2rem;
      height: 0.3rem;
      z-index: 10;
      background-color: var(--textColor);
    }
    &::after {
      transform: translate(-50%, -50%) rotateZ(-45deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotateZ(45deg);
    }
    &:hover {
      &::after {
        transform: translate(-50%, -50%) rotateZ(45deg);
      }
      &::before {
        transform: translate(-50%, -50%) rotateZ(-45deg);
      }
    }
  }
`;
