import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./writeBtn.style";

function WriteBtn() {
  const navigate = useNavigate();
  return (
    <St.WriteContainer>
      <St.WriteBtn
        onClick={() => {
          navigate("/write");
        }}
      >
        기사쓰기
      </St.WriteBtn>
    </St.WriteContainer>
  );
}

export default WriteBtn;
