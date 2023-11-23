import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--backgroundColor2);
  width: 80rem;
  padding: 1rem;
  border-radius: 1.5rem;
`;
export const HeaderBox = styled.div`
  border-bottom: 0.2rem solid gray;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1rem;
  padding-bottom: 1rem;
`;
export const HeaderImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const ContentBox = styled.div`
  background-color: var(--backgroundColor1);
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1.5rem;
`;
export const Name = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

export const Date = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

export const Tag = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  background-color: var(--primaryColor);
  width: fit-content;
  padding: 0.6rem;
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;
export const Content = styled.p`
  font-size: 1.6rem;
  height: auto;
  min-height: 35rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  word-break: break-all;
`;
export const SelectButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--accentColor);
  color: white;
  border: 0;
  border-radius: 1rem;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 1;
  }
`;
export const TagItem = styled.p``;
export const ButtonBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;

export const TagWrapper = styled.section`
  display: flex;
  column-gap: 1rem;
`;

// update
export const UpdateInput = styled.input`
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

export const UpdateTextArea = styled.textarea`
  padding: 2rem;
  box-sizing: border-box;
  height: auto;
  min-height: 20rem;
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
