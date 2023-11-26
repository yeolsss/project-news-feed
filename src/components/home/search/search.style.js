import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: var(--backgroundColor2);
  border-color: transparent;
  height: 3rem;
  width: 20rem;
  outline: none;
  font-size: 1.6rem;
  color: var(--textColor);
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;
export const SearchBtn = styled.button`
  background-color: var(--backgroundColor2);
  color: var(--textColor);
  height: 3rem;
  width: 3rem;
  border: transparent;
  cursor: pointer;
`;
export const SearchBox = styled.div`
  margin: 1rem 1rem 1rem 2rem;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border: 0.3rem solid var(--backgroundColor2);
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--backgroundColor2);
`;
