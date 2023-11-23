import { styled } from "styled-components";

export const Main = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor3};
  color: ${({ theme }) => theme.textColor};
  border-radius: 1.2rem;

  textarea {
    width: 86rem;
    height: 40rem; /* 높이 고정, 필요에 따라 조절 */

    border: 1px solid ${({ theme }) => theme.backgroundColor3};
    border-radius: 1rem;
    display: flex;
    text-align: center;
    margin-bottom: 5rem;
    resize: none; /* 창 크기 조절 비활성화 */
    font-size: 3rem;
    overflow-y: auto; /* 세로 스크롤이 필요한 경우만 표시 */
  }

  input {
    width: 90rem;
    height: 40px; /* 높이 고정, 필요에 따라 조절 */
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.backgroundColor3};
    border-radius: 1rem;
    display: flex;
    text-align: center;
    margin-bottom: 5rem;
    font-size: 3rem;
  }
`;
export const Maincontent = styled.div`
  width: 90rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
