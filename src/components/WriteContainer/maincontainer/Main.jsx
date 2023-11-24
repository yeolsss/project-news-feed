// MainContainer.jsx
import React from "react";
import * as St from "./Main.style";

function MainContainer(props) {
  const content = props.setContent[0];
  const setContent = props.setContent[1];

  const ContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <St.TextArea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={ContentChange}
      />
    </>
  );
}

export default MainContainer;
