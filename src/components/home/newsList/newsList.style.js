import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100rem;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
