import React, { useRef, useState } from "react";
import { useRoot } from "../../../../context/root.context";
import ShardInput from "../../../../shared/input/ShardInput";
import profileImg from "../../../detail/assets/profileImg.jpg";
import * as St from "./myInfo.style";

function MyInfo({ isEditing, editedMyInfo, handleChangeEditText, refGroup }) {
  const DEFAULT_AVATAR = profileImg;
  const { userInfo } = useRoot();
  const { uid, name, nickname, image_path } = userInfo;

  const [imgFile, setImgFile] = useState(image_path);
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
    <>
      <St.MyInfoContainer>
        {!isEditing ? (
          <>
            <St.MyName>{name}</St.MyName>
            <St.MyProfileImg>
              <img
                src={image_path ? image_path : DEFAULT_AVATAR}
                alt={"이미지"}
              />
            </St.MyProfileImg>
            <St.MyNickName>{nickname}</St.MyNickName>
          </>
        ) : (
          <>
            <ShardInput>
              {{
                type: "text",
                value: name,
                onChange: handleChangeEditText,
                placeholder: "이름을 입력해주세요",
                ref: refGroup.name,
                inputType: "name",
              }}
            </ShardInput>
            <form style={{ display: "flex" }}>
              <St.EditingMyProfileImg htmlFor="profileImg">
                <St.EditedMyProfileImg
                  src={imgFile ? imgFile : DEFAULT_AVATAR}
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
            <ShardInput>
              {{
                type: "text",
                value: nickname,
                onChange: handleChangeEditText,
                placeholder: "닉네임을 입력해주세요",
                ref: refGroup.nickname,
                inputType: "nickname",
              }}
            </ShardInput>
          </>
        )}
      </St.MyInfoContainer>
    </>
  );
}

export default MyInfo;
