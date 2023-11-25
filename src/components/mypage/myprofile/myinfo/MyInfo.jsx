import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useRef } from "react";
import { storage } from "../../../../common/firebase";
import { useRoot } from "../../../../context/root.context";
import SharedInput from "../../../../shared/input/SharedInput";
import profileImg from "../../../detail/assets/profileImg.jpg";
import * as St from "./myInfo.style";

function MyInfo({
  imgFile,
  isEditing,
  editedMyInfo,
  handleChangeEditText,
  refGroup,
  setImgFile,
  validDataStates,
}) {
  const DEFAULT_AVATAR = profileImg;
  const { userInfo } = useRoot();
  const { uid } = userInfo;

  const imgRef = useRef();

  const saveImgFile = async () => {
    try {
      const file = imgRef.current.files[0];
      const filePath = `${uid}/${file.name}`;
      const imageRef = ref(storage, filePath);
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      setImgFile(downloadURL);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <St.MyInfoContainer>
        {!isEditing ? (
          <>
            <St.MyName>{editedMyInfo.name}</St.MyName>
            <St.MyProfileImg>
              <img src={imgFile ? imgFile : DEFAULT_AVATAR} alt={"이미지"} />
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
                $error: validDataStates.name,
              }}
            </SharedInput>
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
            <SharedInput>
              {{
                type: "text",
                value: editedMyInfo.nickname,
                onChange: handleChangeEditText,
                placeholder: "닉네임을 입력해주세요",
                ref: refGroup.nickname,
                inputType: "nickname",
                $error: validDataStates.nickname,
              }}
            </SharedInput>
          </>
        )}
      </St.MyInfoContainer>
    </>
  );
}

export default MyInfo;
