import { styled } from "styled-components";
export const MyInfoContainer = styled.section`
  font-weight: bolder;
  min-width: 15rem;
  width: 25%;
  height: 90%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MyName = styled.div`
  width: 100%;
  height: 20%;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  line-height: 170%;
`;

export const MyProfileImg = styled.div`
  height: 11rem;
  aspect-ratio: 1/1;
  margin: auto;
  margin-bottom: 0.5rem;
  border-radius: 50%;

  & img {
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 50%;
  }
`;

export const EditingMyProfileImg = styled.label`
  height: 11rem;
  aspect-ratio: 1/1;
  margin: auto;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const EditedMyProfileImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 50%;
`;

export const MyNickName = styled.div`
  width: 100%;
  height: 15.5%;
  text-align: center;
  line-height: 170%;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;
