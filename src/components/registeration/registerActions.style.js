import { styled } from "styled-components";
export const RegisterAction = styled.button`
  width: 12rem;
  height: 4rem;
  background-color: var(--accentColor);
  opacity: 0.8;
  color: var(--textColor);
  font-size: 2.4rem;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  margin: 2rem 0;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 1;
  }
`;
