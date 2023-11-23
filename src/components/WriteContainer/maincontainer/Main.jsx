// MainContainer.jsx
import React from "react";
import { Main, Maincontent } from "./Main.style";

function MainContainer(props) {
  const content = props.setContent[0];
  const setContent = props.setContent[1];

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
      <Maincontent></Maincontent>
    </Main>
  );
}

export default MainContainer;
