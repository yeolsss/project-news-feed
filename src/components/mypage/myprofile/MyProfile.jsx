import React, { useEffect, useState } from "react";
import * as St from "./myProfile.style";
import MyGreeting from "./mygreeting/MyGreeting";
import MyInfo from "./myinfo/MyInfo";
import { useRoot } from "../../../context/root.context";
import { useLoginContext } from "../../../context/login.context";

function MyProfile() {
  const { userInfo, isLogin } = useRoot();
  const { loginChecked } = useLoginContext();
  const { uid, email, name, nickname, greeting } = userInfo;

  // 기본 데이터
  const TestData = {
    uid: "1",
    name: "이하빈",
    imgStorage: "😉",
    nickname: "I Like MILK",
    greeting: "안녕하세요 반가워요 잘 부탁드립니다.",
  };

  // 수정중일때
  const [isEditing, setIsEditing] = useState(false);
  // 기본 데이터 가져옴
  const [editedMyInfo, setEditedMyInfo] = useState(TestData);
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
