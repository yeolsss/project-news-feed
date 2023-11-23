import React from "react";
import * as St from "./mygreeting.style";

function MyGreeting({ isEditing, editedMyInfo, handleChangeEditText }) {
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
          {editedMyInfo.greeting}
        </St.GreetingEditingTextarea>
      ) : (
        <St.MyGreeting>{editedMyInfo.greeting}</St.MyGreeting>
      )}
    </St.MyGreetingContainer>
  );
}

export default MyGreeting;
