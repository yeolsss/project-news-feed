import React from "react";
import { useRoot } from "../../../../context/root.context";
import * as St from "./mygreeting.style";

function MyGreeting({ isEditing, editedMyInfo, handleChangeEditText }) {
  const { userInfo } = useRoot();
  const { uid, greeting } = userInfo;

  return (
    <St.MyGreetingContainer>
      <div>인사말</div>
      <St.MyGreetingDividingLine />
      {isEditing ? (
        <St.GreetingEditingTextarea
          type="text"
          maxLength={100}
          onChange={handleChangeEditText}
        >
          {greeting}
        </St.GreetingEditingTextarea>
      ) : (
        <St.MyGreeting>{greeting}</St.MyGreeting>
      )}
    </St.MyGreetingContainer>
  );
}

export default MyGreeting;
