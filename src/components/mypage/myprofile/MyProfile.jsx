import React, { useEffect, useRef, useState } from "react";
import { useLoginContext } from "../../../context/login.context";
import { useRoot } from "../../../context/root.context";
import * as St from "./myProfile.style";
import MyGreeting from "./mygreeting/MyGreeting";
import MyInfo from "./myinfo/MyInfo";

function MyProfile() {
  const { userInfo, isLogin } = useRoot();
  const { loginChecked } = useLoginContext();
  const { uid, email, name, nickname, greeting, image_path } = userInfo;

  // 기본 데이터
  const userData = {
    uid,
    email,
    name,
    nickname,
    image_path,
    greeting,
  };

  const refGroup = {
    name: useRef(null),
    nickname: useRef(null),
    greeting: useRef(null),
  };

  // 수정중일때
  const [isEditing, setIsEditing] = useState(false);
  // 기본 데이터 가져옴
  const [editedMyInfo, setEditedMyInfo] = useState(userData);
  // 회원정보 수정 버튼 이벤트
  const handleOnClickMyInfoModify = () => {
    setIsEditing((prev) => !prev);
  };
  // text에 들어가는 값 가져오기
  const handleChangeEditText = (e) => {
    setEditedMyInfo(e.target.value);
  };
  // !수정완료 버튼 이벤트 - 데이터 어떻게 바꿔야할지 모르겠습니다..
  const handleOnClickModifyIsDone = () => {
    setIsEditing(false);
    alert("수정이 완료되었습니다.");
  };

  useEffect(() => {
    loginChecked();
  }, []);

  return (
    <St.MyProfileContainer>
      <MyInfo
        isEditing={isEditing}
        handleChangeEditText={handleChangeEditText}
        editedMyInfo={editedMyInfo}
        refGroup={refGroup}
      />
      <St.MyGreetingAndButtonBox>
        <MyGreeting
          isEditing={isEditing}
          handleChangeEditText={handleChangeEditText}
          editedMyInfo={editedMyInfo}
        />
        {isEditing ? (
          <div>
            <St.ModifyIsDoneButton onClick={handleOnClickModifyIsDone}>
              수정완료
            </St.ModifyIsDoneButton>
            <St.ModifyIsDoneButton onClick={handleOnClickMyInfoModify}>
              수정취소
            </St.ModifyIsDoneButton>
          </div>
        ) : (
          <St.MyInfoModifyButton onClick={handleOnClickMyInfoModify}>
            회원정보 수정
          </St.MyInfoModifyButton>
        )}
      </St.MyGreetingAndButtonBox>
    </St.MyProfileContainer>
  );
}

export default MyProfile;
