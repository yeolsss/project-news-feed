// Write.jsx
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

import { db } from "../../common/firebase";
import MainContainer from "../../components/WriteContainer/maincontainer/Main";
import TitleContainer from "../../components/WriteContainer/titlecontainer/Title";
import AddHashtag from "../../components/addhashtag/AddHashtag";
import Registeration from "../../components/registeration/Registeration";
import UploadPhoto from "../../components/uploadphoto/UploadPhoto";

import { WriteContainer } from "./write.style";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleRegister = async () => {
    try {
      const docRef = await addDoc(collection(db, "content"), {
        title,
        content,
        created_at: serverTimestamp(),
        image_path: "", // 이미지 경로
        tag_name_list: [], // 태그 어떤거 할거?
        uid: "", //  id 적으삼
        updated_at: serverTimestamp(),
      });
      console.log("등록된 ID: ", docRef.id);
    } catch (error) {
      console.error("Error 발생", error);
    }
  };

  return (
    <>
      <WriteContainer>
        <TitleContainer setTitle={setTitle} />
        <MainContainer setContent={setContent} />
        <UploadPhoto />
        <AddHashtag />
        <Registeration />
      </WriteContainer>
    </>
  );
}

export default Write;
