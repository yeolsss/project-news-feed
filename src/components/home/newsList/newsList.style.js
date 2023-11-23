import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
