import { styled } from "styled-components";
import { InsertTextArea } from "../../../page/write/write.style";

export const TextArea = styled(InsertTextArea)`
  margin: 1rem 0;
  width: 100%;
  height: 40rem; /* 높이 고정, 필요에 따라 조절 */

  border: 1px solid ${({ theme }) => theme.backgroundColor3};
  border-radius: 1rem;
  display: flex;
  resize: none; /* 창 크기 조절 비활성화 */
  font-size: 1.6rem;
  overflow-y: auto; /* 세로 스크롤이 필요한 경우만 표시 */
`;
