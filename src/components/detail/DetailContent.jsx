import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { db } from "../../common/firebase";
import { getDate } from "../../common/util";
import { useRoot } from "../../context/root.context";
import profileImg from "./assets/profileImg.jpg";
import * as St from "./detailContent.style";

function DetailContent() {
  const { userInfo } = useRoot();
  const { id: newsId } = useParams();
  const navigate = useNavigate();
  const { uid, name } = userInfo;
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
  const [updateNewsData, setUpdateNewsData] = useState(newsObj);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTag, setUpdateTag] = useState("");

  const handleOnClick = async (type) => {
    if (type === "update") {
      setIsUpdate(true);
      setUpdateTag(newsData.tag_name_list.join(","));
      setUpdateNewsData({ ...newsData });
    } else if (type === "delete") {
      deleteDoc(doc(db, "news_feed", newsId)).then((response) => {
        alert("삭제되었습니다.");
        navigate("/");
      });
    } else if (type === "cancel") {
      setIsUpdate(false);
    } else if (type === "complete") {
      // 업데이트
      const fireStoreTags = await getDocs(collection(db, "tags"));
      const tempTagsArr = [];
      fireStoreTags.forEach((doc) => {
        tempTagsArr.push(doc.data().tag_name);
      });

      // tag 있는지 확인
      updateTag.split(",").forEach(async (tag) => {
        if (!tempTagsArr.join("").includes(tag.trim())) {
          // 없으면 tags firestore에 추가해
          await addDoc(collection(db, "tags"), { tag_name: tag });
          return;
        }
      });

      updateDoc(doc(db, "news_feed", newsId), {
        ...updateNewsData,
        updated_at: getDate(),
      }).then(() => {
        setIsUpdate(false);
        setNewsData({ ...updateNewsData });
        alert("수정되었습니다.");
      });
    }
  };

  const handleOnChange = (e, type) => {
    const { value } = e.target;
    setUpdateNewsData({ ...updateNewsData, [type]: value });
  };

  const handleOnChangeTag = (e) => {
    const { value } = e.target;
    setUpdateTag(value);
    const tagList = value.split(",");
    setUpdateNewsData({ ...updateNewsData, tag_name_list: tagList });
  };

  useEffect(() => {
    try {
      (async () => {
        const newsDoc = await getDoc(doc(db, "news_feed", newsId));

        if (newsDoc.exists()) {
          const newsData = newsDoc.data();
          const uid = newsData.uid;

          const userDoc = await getDoc(doc(db, "user_info", uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setNewsData({ ...newsData, ...userData });
          } else {
            console.log("유저정보가 없습니다.");
          }
        } else {
          console.log("No such document!");
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <St.Container>
        <St.HeaderBox>
          <St.HeaderImg
            src={newsData.image_path ? newsData.image_path : profileImg}
            alt="프로필사진"
          />
          <St.Name>
            {newsData.nickname} ({newsData.name})
          </St.Name>
        </St.HeaderBox>
        <St.ContentBox>
          <St.Date>등록날짜 {newsData.created_at}</St.Date>
          {newsData.updated_at && (
            <St.Date>수정날짜 {newsData.updated_at}</St.Date>
          )}
          {isUpdate ? (
            <>
              <St.UpdateInput
                type="text"
                value={updateNewsData.title}
                onChange={(e) => handleOnChange(e, "title")}
              />
              <St.UpdateTextArea
                value={updateNewsData.content}
                onChange={(e) => handleOnChange(e, "content")}
              ></St.UpdateTextArea>
              {newsData.tag_name_list.length && (
                <St.UpdateInput
                  value={updateTag}
                  onChange={handleOnChangeTag}
                />
              )}
            </>
          ) : (
            <>
              <St.Title> {newsData.title}</St.Title>
              <St.Content>
                {newsData.content.replaceAll("<br>", "\n")}
              </St.Content>
              <St.TagWrapper>
                {newsData.tag_name_list.length &&
                  newsData.tag_name_list.map((tag, index) => (
                    <St.Tag key={tag + index}>
                      <St.TagItem>{tag}</St.TagItem>
                    </St.Tag>
                  ))}
              </St.TagWrapper>
            </>
          )}

          {uid === newsData.uid && (
            <St.ButtonBox>
              {isUpdate ? (
                <>
                  <St.SelectButton onClick={() => handleOnClick("cancel")}>
                    취소
                  </St.SelectButton>
                  <St.SelectButton onClick={() => handleOnClick("complete")}>
                    완료
                  </St.SelectButton>
                </>
              ) : (
                <St.SelectButton onClick={() => handleOnClick("update")}>
                  수정
                </St.SelectButton>
              )}

              <St.SelectButton onClick={() => handleOnClick("delete")}>
                삭제
              </St.SelectButton>
            </St.ButtonBox>
          )}
        </St.ContentBox>
      </St.Container>
    </>
  );
}

export default DetailContent;
