import React, { useRef, useState } from "react";
import { useRoot } from "../../../../context/root.context";
import SharedInput from "../../../../shared/input/SharedInput";
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
            <St.MyName>{editedMyInfo.name}</St.MyName>
            <St.MyProfileImg>
              <img
                src={
                  editedMyInfo.image_path
                    ? editedMyInfo.image_path
                    : DEFAULT_AVATAR
                }
                alt={"이미지"}
              />
            </St.MyProfileImg>
            <St.MyNickName>{editedMyInfo.nickname}</St.MyNickName>
          </>
        ) : (
          <>
            <SharedInput>
              {{
                type: "text",
                value: editedMyInfo.name,
                onChange: handleChangeEditText,
                placeholder: "이름을 입력해주세요",
                ref: refGroup.name,
                inputType: "name",
              }}
            </SharedInput>
            <form style={{ display: "flex" }}>
              <St.EditingMyProfileImg htmlFor="profileImg">
                <St.EditedMyProfileImg
                  src={
                    editedMyInfo.imgFile ? editedMyInfo.imgFile : DEFAULT_AVATAR
                  }
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
            <SharedInput>
              {{
                type: "text",
                value: editedMyInfo.nickname,
                onChange: handleChangeEditText,
                placeholder: "닉네임을 입력해주세요",
                ref: refGroup.nickname,
                inputType: "nickname",
              }}
            </SharedInput>
          </>
        )}
      </St.MyInfoContainer>
    </>
  );
}

export default MyInfo;
