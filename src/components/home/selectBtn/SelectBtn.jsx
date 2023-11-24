import React from "react";
import * as St from "./selectBtn.style";

function SelectBtn({ tag, setTag }) {
  const onActiveTag = (event) => {
    if (event.target === event.currentTarget) return;
    setTag(event.target.textContent);
  };
  return (
    <St.BtnContainer onClick={onActiveTag}>
      <St.SelectBtn $activeTag={tag}>#전체</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#국내</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#해외</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#프론트엔드</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#백엔드</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#인공지능</St.SelectBtn>
      <St.SelectBtn $activeTag={tag}>#제품</St.SelectBtn>
    </St.BtnContainer>
  );
}

export default SelectBtn;
