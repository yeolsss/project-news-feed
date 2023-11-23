import styled from "styled-components";

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
export const Container = styled.li`
  border-radius: 1.5rem;
  background-color: var(--backgroundColor2);
  width: 60rem;
  min-width: 60rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
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
