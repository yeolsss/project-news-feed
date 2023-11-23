import React from "react";
import * as St from "./selectBtn.style";
function SelectBtn() {
  return (
    <St.Container>
      <St.SelectButton>#국내</St.SelectButton>
      <St.SelectButton>#해외</St.SelectButton>
      <St.SelectButton>#프론트엔드</St.SelectButton>
      <St.SelectButton>#백엔드</St.SelectButton>
      <St.SelectButton>#인공지능</St.SelectButton>
      <St.SelectButton>#제품</St.SelectButton>
    </St.Container>
  );
}

export default SelectBtn;
