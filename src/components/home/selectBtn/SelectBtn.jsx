import React from "react";
import { useRoot } from "../../../context/root.context";
import * as St from "./selectBtn.style";
function SelectBtn({ tag, setTag }) {
  const { tags } = useRoot();

  const onActiveTag = (event) => {
    if (event.target === event.currentTarget) return;
    setTag(event.target.textContent);
  };
  return (
    <St.BtnContainer onClick={onActiveTag}>
      <St.SelectBtn $activeTag={tag}>#전체</St.SelectBtn>
      {tags.map((t) => {
        return <St.SelectBtn $activeTag={tag}>{t.tag_name}</St.SelectBtn>;
      })}
    </St.BtnContainer>
  );
}

export default SelectBtn;
