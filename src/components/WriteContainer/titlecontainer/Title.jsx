// TitleContainer.jsx

import React from "react";
import { Title } from "./Title.style";

function TitleContainer(props) {
  const title = props.setTitle[0];
  const setTitle = props.setTitle[1];
  console.log(props);
  const TitleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Title>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        name="title"
        onChange={TitleChange}
      />
    </Title>
  );
}

export default TitleContainer;
