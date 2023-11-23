import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: var(--backgroundColor2);
  border-color: transparent;
  height: 3rem;
  width: 20rem;
  outline: none;
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
  margin: 1rem 1rem 1rem 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border: 0.3rem solid var(--backgroundColor2);
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--backgroundColor2);
`;

export const Topper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
