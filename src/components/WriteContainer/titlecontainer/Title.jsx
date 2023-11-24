// TitleContainer.jsx

import React from "react";
import * as St from "./Title.style";

function TitleContainer(props) {
  const title = props.setTitle[0];
  const setTitle = props.setTitle[1];
  const TitleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <>
      <St.Input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        name="title"
        onChange={TitleChange}
      />
    </>
  );
}

export default TitleContainer;
