import { styled } from "styled-components";
export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80rem;
  margin: 0 auto;
`;

export const InsertInput = styled.input`
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-color: var(--backgroundColor1);
  border: 0.2rem solid gray;
  color: var(--textColor);
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.3s ease-in;
  &:focus {
    border-color: var(--primaryColor);
  }
`;

export const InsertTextArea = styled.textarea`
  padding: 2rem;
  box-sizing: border-box;
  height: auto;
  min-height: 20rem;
  background-color: var(--backgroundColor1);
  border: 0.2rem solid gray;
  color: var(--textColor);
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.3s ease-in;
  &:focus {
    border-color: var(--primaryColor);
  }
`;
