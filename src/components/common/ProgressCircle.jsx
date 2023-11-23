import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ProgressWrapper = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProgressInner = styled.div`
  width: 23rem;
  height: 23rem;
  border-radius: 50%;
  background-color: var(--backgroundColor1);
  position: absolute;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ProgressCircle = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-image: linear-gradient(
      to top,
      transparent 50%,
      var(--accentColor) 50%
    ),
    linear-gradient(to bottom, var(--accentColor) 50%, transparent 50%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: border-box;
  border: 5px solid transparent;
  animation: ${spin} 1.5s linear infinite;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px var(--primaryColor);
`;

export const ProgressText = styled.div`
  position: absolute;
  font-size: 3.2rem;
  color: var(--textColor);
  font-weight: bold;
`;
