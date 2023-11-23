// MainContainer.jsx
import React, { useState } from "react";
import AddHashtag from "../../addhashtag/AddHashtag";
import Registeration from "../../registeration/Registeration";
import UploadPhoto from "../uploadphoto/UploadPhoto";
import { Main, Maincontent } from "./Main.style";

function MainContainer() {
  const [content, setContent] = useState("");

  const ContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Main>
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={ContentChange}
      />
      <Maincontent>
        <UploadPhoto />
        <AddHashtag />
        <Registeration />
      </Maincontent>
    </Main>
  );
}

export default MainContainer;
