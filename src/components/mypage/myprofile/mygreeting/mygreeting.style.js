import { styled } from "styled-components";
export const MyGreetingContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bolder;
  padding: 2rem;
`;

export const MyGreeting = styled.div`
  width: 100%;
  height: 60%;
  font-weight: normal;
`;

export const MyGreetingDividingLine = styled.hr`
  width: 100%;
  border-color: var(--backgroundColor3);
`;

export const GreetingEditingTextarea = styled.textarea`
  width: 99%;
  height: 55%;
  background-color: var(--backgroundColor1);
  color: var(--textColor);
  border-radius: 0.5rem;
  resize: none;
`;
