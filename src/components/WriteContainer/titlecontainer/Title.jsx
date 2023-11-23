// TitleContainer.jsx

import React, { useState } from "react";
import { Title } from "./Title.style";

function TitleContainer() {
  const [title, setTitle] = useState("");
  const TitleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Title>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={TitleChange}
      />
    </Title>
  );
}

export default TitleContainer;
