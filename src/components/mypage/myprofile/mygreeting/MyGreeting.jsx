import React from "react";
import { useRoot } from "../../../../context/root.context";
import SharedTextArea from "../../../../shared/textArea/SharedTextArea";
import * as St from "./mygreeting.style";

function MyGreeting({ isEditing, editedMyInfo, handleChangeEditText }) {
  const { userInfo } = useRoot();
  const { uid, greeting } = userInfo;

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
        <St.MyGreeting>{greeting}</St.MyGreeting>
      )}
    </St.MyGreetingContainer>
  );
}

export default MyGreeting;
