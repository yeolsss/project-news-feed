import React from "react";
import { styled } from "styled-components";

function SharedTextArea({
  children: {
    type,
    value,
    onChange,
    placeholder,
    ref = null,
    inputType,
    style,
  },
}) {
  return (
    <StTextArea
      type={type}
      value={value}
      onChange={(e) => onChange(e, inputType)}
      placeholder={placeholder}
      ref={ref}
      style={style}
    >
      {value}
    </StTextArea>
  );
}

const StTextArea = styled.textarea`
  padding: 2rem;
  box-sizing: border-box;
  height: ${({ style }) => style.height || "auto"};
  background-color: var(--backgroundColor1);
  border: 0.2rem solid gray;
  color: var(--textColor);
  border-radius: 0.5rem;
  outline: none;
  font-size: 1.6rem;
  transition: border-color 0.3s ease-in;
  resize: none;
  &:focus {
    border-color: var(--primaryColor);
  }
`;
export default SharedTextArea;
