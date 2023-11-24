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
export const NewsContainer = styled.li`
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
  font-size: 1.6rem;
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
export const SearchInput = styled.input`
  background-color: var(--backgroundColor2);
  border-color: transparent;
  height: 3rem;
  width: 20rem;
  outline: none;
`;
export const SearchBtn = styled.button`
  background-color: var(--backgroundColor2);
  color: var(--textColor);
  height: 3rem;
  width: 3rem;
  border: transparent;
  cursor: pointer;
`;
export const SearchBox = styled.div`
  margin: 1rem 1rem 1rem 2rem;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border: 0.3rem solid var(--backgroundColor2);
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--backgroundColor2);
`;
