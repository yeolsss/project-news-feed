import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginFirebase } from "../../api/firebase";
import {
  checkEmailValidation,
  checkValidation,
  printError,
} from "../../common/util";
import { setLoading } from "../../redux/slice/loadingModal.slice";
import { closeLoginModal } from "../../redux/slice/loginModal.slice";
import { Input } from "../common/Inputs";
import JoinHeader from "../joinHeader/JoinHeader";
import { JoinButton } from "../joinMan/joinMain.style";
import SocialLoginButton from "../social/SocialLoginButton";
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

  const dispatch = useDispatch();

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

  const loginMutation = useMutation(
    ({ id, password }) => {
      return loginFirebase({ id, password });
    },
    {
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onSuccess: () => {
        alert("로그인에 성공하였습니다.");
        dispatch(closeLoginModal());
      },
      onError: (e) => {
        console.error(e);
        alert("아이디 및 비밀번호를 다시 확인해주세요.");
      },
      onSettled: () => {
        dispatch(setLoading(false));
      },
    }
  );

  const handleOnSubmitLogin = async (e) => {
    e.preventDefault();
    const { id, password } = userInfoStates;

    const validDataResult = checkValidation(id, password);
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

    await loginMutation.mutate({ id, password });
  };

  const handleOnClickCloseModal = (e, type) => {
    // 클릭된 요소가 모달의 바깥쪽이라면 모달을 닫는다.
    if (type === "modal") {
      if (e.target === e.currentTarget) {
        dispatch(closeLoginModal());
      }
      return;
    }
    dispatch(closeLoginModal());
  };

  return (
    <St.LoginModalWrapper onClick={(e) => handleOnClickCloseModal(e, "modal")}>
      <St.LoginWrapper>
        <div>
          <JoinHeader />
          <St.LoginForm onSubmit={handleOnSubmitLogin}>
            <Input
              type={"text"}
              placeholder={"아이디를 입력해주세요."}
              inputRef={idRef}
              onChange={(e) => onChangeUserInfo(e, "id")}
              inputType={"id"}
              $error={validDataStates.id}
            />
            <Input
              type={"password"}
              placeholder={"비밀번호를 입력해주세요."}
              inputRef={passwordRef}
              onChange={(e) => onChangeUserInfo(e, "password")}
              inputType={"password"}
              $error={validDataStates.password}
            />
            <St.JoinLink to="/join">회원가입</St.JoinLink>
            <JoinButton>로그인</JoinButton>
          </St.LoginForm>
          <div>
            <SocialLoginButton />
          </div>
        </div>
        <St.ModalCloseButton
          onClick={(e) => handleOnClickCloseModal(e, "button")}
        >
          <div></div>
        </St.ModalCloseButton>
      </St.LoginWrapper>
    </St.LoginModalWrapper>
  );
}

export default LoginModal;
