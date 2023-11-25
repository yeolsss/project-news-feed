import React, { useEffect, useRef, useState } from "react";
import * as St from "./myProfile.style";
import MyGreeting from "./mygreeting/MyGreeting";
import MyInfo from "./myinfo/MyInfo";
import { checkValidation, printError } from "../../../common/util";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../common/firebase";
import { useRoot } from "../../../context/root.context";

function MyProfile() {
  const validDataStatesInit = {
    name: false,
    nickname: false,
    greeting: false,
  };

  const { userInfo, loginCheck } = useRoot();
  const { uid, email, name, nickname, greeting, image_path } = userInfo;
  const [imgFile, setImgFile] = useState(image_path);
  const [validDataStates, setValidDataStates] = useState(validDataStatesInit);

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
  const handleChangeEditText = (e, type) => {
    setEditedMyInfo((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
    setValidDataStates({ ...validDataStates, [type]: false });
  };
  const handleOnClickModifyIsDone = async () => {
    // data validation
    // 입력한 값부터 불러오자.
    const { name, nickname, greeting } = editedMyInfo;
    // 확인 했으니  유효성 검사하자.
    // 인사말은 생략 가능.
    const validDataResult = checkValidation(name, nickname);
    // 빈값 체크
    if (validDataResult.result) {
      switch (validDataResult.index) {
        case 0:
          printError("이름을 입력해 주세요.", refGroup.name);
          setValidDataStates({ ...validDataStates, name: true });
          return;
        default:
          printError("닉네임을 입력해 주세요.", refGroup.nickname);
          setValidDataStates({ ...validDataStates, nickname: true });
          return;
      }
    }
    // 수정할 데이터가 없으면 수정하지 않는다.
    if (
      name === userData.name &&
      nickname === userData.nickname &&
      greeting === userData.greeting &&
      imgFile === userData.image_path
    ) {
      setIsEditing(false);
      return;
    }

    // 수정할 데이터가 있으면 수정한다.
    // 수정할 데이터를 가져온다.
    const editData = {
      name,
      nickname,
      greeting,
      image_path: imgFile,
    };
    try {
      // 수정할 데이터를 서버에 보낸다.
      await setDoc(doc(db, "user_info", uid), {
        uid,
        ...editData,
      });
      // 수정 완료 후
      setIsEditing(false);
      loginCheck();
      alert("수정이 완료되었습니다.");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loginCheck();
  }, []);

  return (
    <St.MyProfileContainer>
      <MyInfo
        imgFile={imgFile}
        isEditing={isEditing}
        handleChangeEditText={handleChangeEditText}
        editedMyInfo={editedMyInfo}
        refGroup={refGroup}
        setImgFile={setImgFile}
        validDataStates={validDataStates}
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
