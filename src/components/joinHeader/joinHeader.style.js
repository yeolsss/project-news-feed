import { styled } from "styled-components";
export const JoinHeaderSection = styled.header`
  width: 49rem;
  height: 18.5rem;
  background-color: #4f4f4f;
  border-radius: 16px;
  font-family: "d2coding";
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  margin: 0 auto;
  > h1 {
    line-height: 27.2px; /* 113.333% */
    letter-spacing: 0.24px;
  }
  > h1:last-child {
    text-align: right;
  }
`;

export const HeaderConst = styled.span`
  opacity: 0.9;
  color: #54ff38;
  font-family: D2Coding;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.2px;
  letter-spacing: 0.24px;
`;

export const HeaderEqual = styled.span`
  opacity: 0.9;
  color: #e18aff;
  font-family: D2Coding;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.2px;
  letter-spacing: 0.24px;
`;

export const HeaderString = styled.span`
  opacity: 0.9;
  color: #6ce5ff;
  font-family: D2Coding;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.2px;
  letter-spacing: 0.24px;
`;
