import React, { useRef, useState } from "react";
import * as St from "./myInfo.style";

function MyInfo({ isEditing, editedMyInfo, handleChangeEditText }) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

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
        <form style={{ display: "flex" }}>
          <St.EditingMyProfileImg htmlFor="profileImg">
            <St.EditedMyProfileImg
              src={imgFile ? imgFile : `😉`}
              alt="profile-img"
            />
          </St.EditingMyProfileImg>
          <St.ProfileImgInput
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          />
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
