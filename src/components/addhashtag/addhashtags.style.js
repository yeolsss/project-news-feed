import { styled } from "styled-components";
import { InsertInput } from "../../page/write/write.style";
export const Hashtags = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Input = styled(InsertInput)`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.backgroundColor3}; // 테두리 스타일
  border-radius: 0.5rem;
  display: flex;
  font-size: 2rem;
  box-sizing: border-box;
`;
