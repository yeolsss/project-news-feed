import React from "react";
import { styled } from "styled-components";

/**
 * value: input에 들어가는 값
 * onChange: input에 값이 바뀔때 실행되는 함수
 * placeholder: input에 들어가는 값이 없을때 보여지는 값
 * type: input의 타입
 * ref: input의 ref
 * inputType: 어떤 input인지 구분하기 위한 값
 */
function ShardInput({
  children: {
    type,
    value,
    onChange: handleOnChange,
    placeholder,
    ref,
    inputType,
  },
}) {
  return (
    <StInput
      type={type}
      value={value}
      onChange={(e) => handleOnChange(e, inputType)}
      placeholder={placeholder}
      ref={ref}
    />
  );
}
const StInput = styled.input`
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-color: var(--backgroundColor1);
  border: 0.2rem solid gray;
  color: var(--textColor);
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.3s ease-in;
  &:focus {
    border-color: var(--primaryColor);
  }
`;
export default ShardInput;
