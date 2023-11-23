import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../common/firebase";
import { useRoot } from "../../context/root.context";
import profileImg from "./assets/profileImg.jpg";
import * as St from "./detailContent.style";

function DetailContent() {
  const { userInfo } = useRoot();
  const { uid, name, nickname, email } = userInfo;
  const newsObj = {
    title: "",
    content: "",
    tag_name_list: [],
    image_path: "",
    created_at: "",
    updated_at: "",
    uid: "",
  };
  const [newsData, setNewsData] = useState(newsObj);
  useEffect(() => {
    getDoc(doc(db, "news_feed", "npELLfSPH2eY2wDJwvRh")).then((doc) => {
      if (doc.exists()) {
        setNewsData({ ...doc.data() });
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <>
      <St.Container>
        <St.HeaderBox>
          <St.HeaderImg src={profileImg} alt="" />
          <St.Name>
            {nickname} ({name})
          </St.Name>
        </St.HeaderBox>
        <St.ContentBox>
          <St.Date>날짜 {newsData.created_at}</St.Date>

          <St.Title>{newsData.title}</St.Title>
          <St.Content>{newsData.content}</St.Content>
          <St.Tag>
            {newsData.tag_name_list.length &&
              newsData.tag_name_list.map((tag, index) => (
                <St.TagItem key={tag + index}>{tag}</St.TagItem>
              ))}
          </St.Tag>

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
