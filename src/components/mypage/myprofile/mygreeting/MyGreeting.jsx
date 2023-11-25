import React from "react";
import SharedTextArea from "../../../../shared/textArea/SharedTextArea";
import * as St from "./mygreeting.style";

function MyGreeting({ isEditing, editedMyInfo, handleChangeEditText }) {
  return (
    <St.MyGreetingContainer>
      <div>인사말</div>
      <St.MyGreetingDividingLine />
      {isEditing ? (
        <SharedTextArea>
          {{
            type: "text",
            value: editedMyInfo.greeting,
            onChange: handleChangeEditText,
            placeholder: "인사말을 입력해주세요",
            inputType: "greeting",
            style: {
              height: "10rem",
              width: "100%",
            },
          }}
        </SharedTextArea>
      ) : (
        <St.MyGreeting>
          {editedMyInfo.greeting || "인사말이 없습니다."}
        </St.MyGreeting>
      )}
    </St.MyGreetingContainer>
  );
}

export default MyGreeting;
