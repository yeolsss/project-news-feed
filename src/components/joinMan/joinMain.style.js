import { styled } from "styled-components";
export const JoinMainSection = styled.main`
  margin-top: 8rem;
`;

export const JoinMainInputGroup = styled.section`
  display: flex;
  flex-direction: column;
`;

export const JoinInput = styled.input`
  outline: none;
  border: 0.3rem solid
    ${({ $error }) => ($error ? "#e84118" : "rgba(0, 0, 0, 0)")};
  margin-bottom: 3rem;
  height: 5rem;
  font-family: "Noto Sans KR", "d2coding", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0 1rem;
  border-radius: 0.5rem;
  transition: border-color 0.3s ease-in;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1.8rem;
  }
`;

export const JoinInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const JoinInfoDiv = styled.section`
  display: flex;
  > input {
    width: 2rem;
    height: 2rem;
  }

  > span {
    font-size: 1.6rem;
    margin-left: 1rem;
    margin-top: 0.6rem;
  }
`;

export const JoinButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const JoinButton = styled.button`
  border: none;
  height: 10rem;
  background-color: var(--accentColor);
  font-size: 2.4rem;
  color: var(--textColor);
  width: 100%;
  margin-top: 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
