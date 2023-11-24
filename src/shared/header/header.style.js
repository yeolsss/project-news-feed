import { styled } from "styled-components";
import {
  HeaderConst,
  HeaderEqual,
  HeaderString,
} from "../../components/joinHeader/joinHeader.style";

export const LayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 0;
  margin-bottom: 8rem;
`;
export const HeaderWrapper = styled.div`
  background-color: #4f4f4f;
  border-radius: 2.5rem;
  font-family: "d2coding";
  font-size: 2.4rem;
  padding: 1rem 2rem;
  > a > h1 {
    font-size: 1.8rem;
    line-height: 27.2px; /* 113.333% */
    letter-spacing: 0.24px;
    color: #ffffff;
  }
`;

export const LayoutHeaderConst = styled(HeaderConst)`
  font-size: 1.8rem;
`;

export const LayoutHeaderEqual = styled(HeaderEqual)`
  font-size: 1.8rem;
`;

export const LayoutHeaderString = styled(HeaderString)`
  font-size: 1.8rem;
`;

export const HeaderButton = styled.button`
  border: none;
  background-color: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-size: 4rem;
  color: var(--colorText);
  cursor: pointer;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: var(--);
  align-items: center;
  > :first-child {
    margin-right: 1rem;
  }
`;

export const HeaderLoginButton = styled.button`
  border: none;
  background-color: var(--accentColor);
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  height: 3rem;
  border-radius: 0.5rem;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
  margin-right: 1rem;
  &:hover {
    opacity: 1;
  }
`;

export const DropDownMenu = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  background-color: var(--backgroundColor2);
  width: 20rem;
  height: auto;
  display: ${({ $isDropDown }) => ($isDropDown ? "flex" : "none")};
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  > li {
    display: flex;
    height: 5rem;
    align-items: center;
    font-size: 2.4rem;
    font-family: "d2coding";
    padding: 0 2rem;
    box-sizing: border-box;
    font-weight: 700;
    transition: background-color 0.3s ease-in;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: var(--backgroundColor1);
    }
    > svg {
      width: 3rem;
      height: 3rem;
      position: absolute;
      right: 2rem;
      pointer-events: none;
    }
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: unset;
  color: var(--textColor);
  font-size: 2.4rem;
  font-weight: 700;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;
