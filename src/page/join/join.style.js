import { styled } from "styled-components";
export const JoinContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  padding-bottom: 5rem;
  box-sizing: border-box;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const JoinSection = styled.section`
  max-width: 49rem;
  margin: auto;
`;
