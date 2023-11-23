import styled, { css } from "styled-components";

export const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;
export const Name = styled.p`
  font-size: 1.5rem;
  width: 51rem;
  font-weight: 600;
`;
export const NewsContainer = styled.li`
  border-radius: 1.5rem;
  background-color: var(--backgroundColor2);
  width: 60rem;
  min-width: 60rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
  min-height: 10rem;
`;
export const Time = styled.p`
  margin-top: 0.5rem;
  color: gray;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;
export const Content = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  line-height: 140%;
`;

export const NewsArea = styled.div`
  background-color: var(--backgroundColor1);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 50rem;
`;

export const StProfileArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SeeMore = styled.span`
  font-size: 1rem;
  color: gray;
`;

export const NoneText = styled.p`
  font-size: 1rem;
`;
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
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  margin: 0 auto;
  border: 0;
`;
export const Notice = styled.p`
  margin: 1rem 0;
`;
export const WriteBtn = styled.button`
  width: 15rem;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--primaryColor);
  color: white;
  font-size: 1.5rem;
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
`;
