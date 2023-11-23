import { styled } from "styled-components";
export const MyInfoContainer = styled.section`
  font-weight: bolder;
  min-width: 15rem;
  width: 25%;
  height: 90%;
  font-size: 2rem;
  padding: 2rem;
`;

export const MyName = styled.div`
  width: 100%;
  height: 20%;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  line-height: 170%;
`;

export const MyProfileImg = styled.div`
  border: 0.1rem solid blue;
  height: 11rem;
  aspect-ratio: 1/1;
  margin: auto;
  margin-bottom: 0.5rem;
`;

export const MyNickName = styled.div`
  width: 100%;
  height: 15.5%;
  text-align: center;
  line-height: 170%;
`;

export const MyNameEditingInput = styled.textarea`
  width: 96%;
  height: 15.5%;
  margin-bottom: 0.5rem;
  background-color: var(--backgroundColor1);
  color: var(--textColor);
  border-radius: 0.5rem;
  resize: none;
`;