import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../../common/firebase";
import profileImg from "./assets/profileImg.jpg";
import * as St from "./detailContent.style";

function DetailContent() {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "news_feed"));
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        console.log(data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <St.Container>
        <St.HeaderBox>
          <St.HeaderImg src={profileImg} alt="" />
          <St.Name>hyewon</St.Name>
        </St.HeaderBox>
        <St.ContentBox>
          <St.Date>날짜</St.Date>

          <St.Title>제목</St.Title>
          <St.Content>내용</St.Content>
          <St.Tag>#해외</St.Tag>

          <St.ButtonBox>
            <St.SelectButton>수정</St.SelectButton>
            <St.SelectButton>삭제</St.SelectButton>
          </St.ButtonBox>
        </St.ContentBox>
      </St.Container>
    </>
  );
}

export default DetailContent;
