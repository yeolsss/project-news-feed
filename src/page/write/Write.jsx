// Write.jsx
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../common/firebase";
import { getDate } from "../../common/util";
import MainContainer from "../../components/WriteContainer/maincontainer/Main";
import TitleContainer from "../../components/WriteContainer/titlecontainer/Title";
import AddHashtag from "../../components/addhashtag/AddHashtag";
import Registeration from "../../components/registeration/Registeration";
import { useRoot } from "../../context/root.context";
import { WriteContainer } from "./write.style";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");
  const { userInfo } = useRoot();
  const { uid, name, nickname, email, imgStorage } = userInfo;

  const navigate = useNavigate();

  const handleOnChangeTag = (e) => {
    const { value } = e.target;
    setTag(value);
  };

  // 등록
  const handleRegister = async () => {
    try {
      const fireStoreTags = await getDocs(collection(db, "tags"));
      const tempTagsArr = [];
      fireStoreTags.forEach((doc) => {
        tempTagsArr.push(doc.data().tag_name);
      });

      // tag 있는지 확인
      tag.split(",").forEach(async (tag) => {
        if (!tempTagsArr.join("").includes(tag.trim())) {
          // 없으면 tags firestore에 추가해11
          await addDoc(collection(db, "tags"), { tag_name: tag });
          return;
        }
      });
      addDoc(collection(db, "news_feed"), {
        title: title,
        content: content.replaceAll("\n", "<br>"),
        created_at: getDate(),
        image_path: "", // 이미지 경로
        tag_name_list: [...tag.split(",")], // 태그 어떤거 할거?
        uid: uid, //  id 적으삼
        updated_at: "",
      }).then((response) => {
        setTitle("");
        setContent("");
        setImage(null);
        setTag([]);
        alert("글이 등록되었습니다.");
        navigate(`/detail/${response.id}`);
      });
    } catch (error) {
      console.error("Error 발생", error);
    }
  };

  return (
    <>
      <WriteContainer>
        <TitleContainer setTitle={[title, setTitle]} />
        <MainContainer setContent={[content, setContent]} />
        <AddHashtag tag={tag} handleOnChangeTag={handleOnChangeTag} />
        <Registeration handleRegister={handleRegister} />
      </WriteContainer>
    </>
  );
}

export default Write;
