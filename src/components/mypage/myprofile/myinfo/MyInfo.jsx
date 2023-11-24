import React, { useRef, useState } from "react";
import { useRoot } from "../../../../context/root.context";
import * as St from "./myInfo.style";

function MyInfo({ isEditing, editedMyInfo, handleChangeEditText }) {
  const { userInfo } = useRoot();
  const { uid, name, nickname, imgStorage } = userInfo;

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
  console.log(imgStorage);
  return (
    <St.MyInfoContainer>
      {isEditing ? (
        <St.MyNameEditingInput
          type="text"
          minLength={2}
          maxLength={10}
          onChange={handleChangeEditText}
        >
          {name}
        </St.MyNameEditingInput>
      ) : (
        <St.MyName>{name}</St.MyName>
      )}
      {isEditing ? (
        <form style={{ display: "flex" }}>
          <St.EditingMyProfileImg htmlFor="profileImg">
            <St.EditedMyProfileImg
              src={imgFile ? imgFile : `/img/default-avatar.png`}
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
        <St.MyProfileImg>
          <img src={imgStorage} />
        </St.MyProfileImg>
      )}

      {isEditing ? (
        <St.MyNameEditingInput
          type="text"
          minLength={2}
          maxLength={10}
          onChange={handleChangeEditText}
        >
          {nickname}
        </St.MyNameEditingInput>
      ) : (
        <St.MyNickName>{nickname}</St.MyNickName>
      )}
    </St.MyInfoContainer>
  );
}

export default MyInfo;
