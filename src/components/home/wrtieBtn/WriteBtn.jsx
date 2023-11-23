import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./writeBtn.style";
function WriteBtn() {
  const navigate = useNavigate();
  return (
    <St.WriteContainer>
      <St.Notice>⭐거창하지 않아도 괜찮아요</St.Notice>
      <St.Notice>⭐뉴스 링크 & 코멘트 OK</St.Notice>
      <St.Notice>⭐뉴스 전문 스크랩 OK</St.Notice>
      <St.Button
        onClick={() => {
          navigate("/write");
        }}
      >
        기사쓰기
      </St.Button>
    </St.WriteContainer>
  );
}

export default WriteBtn;
