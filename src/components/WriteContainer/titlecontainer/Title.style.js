import { styled } from "styled-components";
export const Title = styled.div`
  width: 90rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.backgroundColor3};
  color: ${({ theme }) => theme.textColor};
  border-radius: 1.2rem;
  input {
    width: 100%;
    height: 100vh;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.backgroundColor3}; // 테두리 스타일
    border-radius: 0.5rem;
    text-align: center;
    display: flex;
    font-size: 2rem;
  }
`;
