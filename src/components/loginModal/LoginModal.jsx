import React, { useRef, useState } from "react";
import {
  checkEmailValidation,
  checkValidation,
  printError,
} from "../../common/util";
import { Input } from "../common/Inputs";
import JoinHeader from "../joinHeader/JoinHeader";
import { JoinButton } from "../joinMan/joinMain.style";
import * as St from "./loginModal.style";

function LoginModal() {
  const [userInfoStates, setUserInfoStates] = useState({
    id: "",
    password: "",
  });
  const [validDataStates, setValidDataStates] = useState({
    id: false,
    password: false,
  });

  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeUserInfo = (e, type) => {
    const { value } = e.target;
    setUserInfoStates((prev) => ({
      ...prev,
      [type]: value,
    }));
    setValidDataStates((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
    const { id, password } = userInfoStates;

    const validDataResult = checkValidation(id, password);
    console.log(idRef, passwordRef);
    // 빈값 체크
    if (validDataResult.result) {
      switch (validDataResult.index) {
        case 0:
          printError("아이디를 입력해 주세요.", idRef);
          setValidDataStates({ ...validDataStates, id: true });
          return;
        case 1:
          printError("비밀번호를 입력해 주세요.", passwordRef);
          setValidDataStates({ ...validDataStates, password: true });
          return;
        default:
          break;
      }
    }
    // email형식 체크
    if (!checkEmailValidation(id)) {
      printError("이메일을 형식으로 입력해 주세요.", idRef);
      setValidDataStates({ ...validDataStates, id: true });
      return;
    }
  };

  return (
    <St.LoginModalWrapper>
      <St.LoginWrapper>
        <div>
          <JoinHeader />
          <St.LoginForm onSubmit={handleOnSubmitLogin}>
            <Input
              type={"text"}
              placeholder={"아이디를 입력해주세요."}
              inputRef={idRef}
              onChange={onChangeUserInfo}
              inputType={"id"}
              $error={validDataStates.id}
            />
            <Input
              type={"password"}
              placeholder={"비밀번호를 입력해주세요."}
              inputRef={passwordRef}
              onChange={onChangeUserInfo}
              inputType={"password"}
              $error={validDataStates.password}
            />
            <St.JoinLink to="/join">회원가입</St.JoinLink>
            <JoinButton>로그인</JoinButton>
          </St.LoginForm>
          <div>
            <Button text={"google Login"} />
            <Button text={"github Login"} />
          </div>
        </div>
      </St.LoginWrapper>
    </St.LoginModalWrapper>
  );
}

export default LoginModal;

export const Button = ({ text }) => {
  return <St.SnsButton>{text}</St.SnsButton>;
};
