import React from "react";
import * as St from "./myInfo.style";

function MyInfo({ isEditing, editedMyInfo, handleChangeEditText }) {
  return (
    <St.MyInfoContainer>
      {isEditing ? (
        <St.MyNameEditingInput
          type="text"
          minLength={2}
          maxLength={10}
          onChange={handleChangeEditText}
        >
          {editedMyInfo.name}
        </St.MyNameEditingInput>
      ) : (
        <St.MyName>{editedMyInfo.name}</St.MyName>
      )}
      {isEditing ? (
        <form>
          <St.MyProfileImg>😉</St.MyProfileImg>
        </form>
      ) : (
        <St.MyProfileImg>😉</St.MyProfileImg>
      )}

      {isEditing ? (
        <St.MyNameEditingInput
          type="text"
          minLength={2}
          maxLength={10}
          onChange={handleChangeEditText}
        >
          {editedMyInfo.nickname}
        </St.MyNameEditingInput>
      ) : (
        <St.MyNickName>{editedMyInfo.nickname}</St.MyNickName>
      )}
    </St.MyInfoContainer>
  );
}

export default MyInfo;
