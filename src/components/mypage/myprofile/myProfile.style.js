import { styled } from "styled-components";

export const MyProfileContainer = styled.div`
  background-color: var(--backgroundColor2);
  border: 0.1rem solid white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  margin: 1rem;
  height: 25rem;
  gap: 1rem;
`;

export const MyGreetingAndButtonBox = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

export const MyInfoModifyButton = styled.button`
  width: 15rem;
  height: 4rem;
  margin-left: auto;
  background-color: var(--accentColor);
  border-radius: 0.5rem;
  border: none;
  color: white;
  transition: 0.2s;
  font-size: 1.6rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ModifyIsDoneButton = styled.button`
  width: 7rem;
  height: 3.2rem;
  margin-left: 1rem;
  background-color: var(--accentColor);
  border-radius: 0.5rem;
  border: none;
  color: white;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
