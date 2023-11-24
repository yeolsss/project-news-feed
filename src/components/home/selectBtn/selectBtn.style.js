import styled, { css } from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0 auto;
`;
export const SelectBtn = styled.button`
  ${(props) => {
    if (props.$activeTag === props.children) {
      return css`
        background-color: var(--accentColor);
      `;
    }
    return css`
      background-color: var(--primaryColor);
    `;
  }}
  width: 15rem;
  padding: 1rem;
  margin-bottom: 1rem;

  color: white;
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
`;
