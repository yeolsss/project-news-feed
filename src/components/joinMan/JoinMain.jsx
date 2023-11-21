import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import {
  checkEmailValidation,
  checkValidation,
  printError,
} from "../../common/util";

import { useNavigate } from "react-router-dom";
import { setUser } from "../../api/firebase";
import * as St from "./joinMain.style";

function JoinMain() {
  const joinStatesInit = {
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    nickname: "",
    check: false,
  };

  const validDataStatesInit = {
    id: false,
    password: false,
    passwordCheck: false,
    name: false,
    nickname: false,
  };

  // join states
  const [joinStates, setJoinStates] = useState(joinStatesInit);
  const [validDataStates, setValidDataStates] = useState(validDataStatesInit);

  // password state
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const nameRef = useRef(null);
  const nicknameRef = useRef(null);

  const navigate = useNavigate();
  //TODO: 회원가입 시 로딩, 에러 처리
  const { mutate, isLoading, error } = useMutation(setUser, {
    onSuccess: (data) => {
      const { uid } = data.user;
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    return () => {
      setJoinStates(joinStatesInit);
      setValidDataStates(validDataStatesInit);
    };
  }, []);

  // input event
  const handleOnChangeInput = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case "id":
        setJoinStates({ ...joinStates, id: value });
        setValidDataStates({ ...validDataStates, id: false });
        break;
      case "password":
        setJoinStates({ ...joinStates, password: value });
        setValidDataStates({ ...validDataStates, password: false });
        break;
      case "passwordCheck":
        setJoinStates({ ...joinStates, passwordCheck: value });
        setValidDataStates({ ...validDataStates, passwordCheck: false });
        break;
      case "name":
        setJoinStates({ ...joinStates, name: value });
        setValidDataStates({ ...validDataStates, name: false });
        break;
      case "nickname":
        setJoinStates({ ...joinStates, nickname: value });
        setValidDataStates({ ...validDataStates, nickname: false });
        break;
      default:
        break;
    }
  };

  // checkbox event
  const handleOnChangeCheckbox = (e) => {
    const { checked } = e.target;
    setJoinStates({ ...joinStates, check: checked });
  };
  // submit event
  const handleOnSubmitJoin = async (e) => {
    e.preventDefault();
    const { id, password, passwordCheck, name, nickname, check } = joinStates;
    const validDateResult = checkValidation(
      id,
      password,
      passwordCheck,
      name,
      nickname
    );

    // 빈값 체크
    if (validDateResult.result) {
      switch (validDateResult.index) {
        case 0:
          printError("아이디를 입력해 주세요.", idRef);
          setValidDataStates({ ...validDataStates, id: true });
          return;
        case 1:
          printError("비밀번호를 입력해 주세요.", passwordRef);
          setValidDataStates({ ...validDataStates, password: true });
          return;
        case 2:
          printError("비밀번호 확인을 입력해 주세요.", passwordCheckRef);
          setValidDataStates({ ...validDataStates, passwordCheck: true });
          return;
        case 3:
          printError("이름을 입력해 주세요.", nameRef);
          setValidDataStates({ ...validDataStates, name: true });
          return;
        case 4:
          printError("닉네임을 입력해 주세요.", nicknameRef);
          setValidDataStates({ ...validDataStates, nickname: true });
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

    // 비밀번호 체크
    if (password !== passwordCheck) {
      printError("비밀번호가 일치하지 않습니다.", passwordCheckRef);
      setValidDataStates({ ...validDataStates, passwordCheck: true });
      return;
    }

    // check box 확인
    if (!check) {
      printError("개인정보 제공 동의가 필요합니다", null);
      return;
    }

    // react-query를 사용하여 firebase에 회원가입
    mutate({ id, password });
  };

  return (
    <St.JoinMainSection>
      <form onSubmit={handleOnSubmitJoin}>
        <St.JoinMainInputGroup>
          <Input
            type={"text"}
            placeholder={"이메일 주소"}
            value={joinStates.id}
            inputRef={idRef}
            onChange={handleOnChangeInput}
            inputType={"id"}
            $error={validDataStates.id}
          />
          <Input
            type={"password"}
            placeholder={"비밀번호"}
            value={joinStates.password}
            inputRef={passwordRef}
            onChange={handleOnChangeInput}
            inputType={"password"}
            $error={validDataStates.password}
          />
          <Input
            type={"password"}
            placeholder={"비밀번호 확인"}
            value={joinStates.passwordCheck}
            inputRef={passwordCheckRef}
            onChange={handleOnChangeInput}
            inputType={"passwordCheck"}
            $error={validDataStates.passwordCheck}
          />
          <Input
            type={"text"}
            placeholder={"이름"}
            value={joinStates.name}
            inputRef={nameRef}
            onChange={handleOnChangeInput}
            inputType={"name"}
            $error={validDataStates.name}
          />
          <Input
            type={"text"}
            placeholder={"닉네임"}
            value={joinStates.nickname}
            inputRef={nicknameRef}
            onChange={handleOnChangeInput}
            inputType={"nickname"}
            $error={validDataStates.nickname}
          />
        </St.JoinMainInputGroup>
        <St.JoinInfoSection>
          <St.JoinInfoDiv>
            <input
              id="agree"
              type={"checkbox"}
              value={joinStates.check}
              onChange={handleOnChangeCheckbox}
            />
            <label htmlFor="agree">개인정보 동의</label>
          </St.JoinInfoDiv>
          <St.JoinButtonGroup>
            <St.JoinButton>회원가입</St.JoinButton>
          </St.JoinButtonGroup>
        </St.JoinInfoSection>
      </form>
    </St.JoinMainSection>
  );
}

export default JoinMain;

export const Input = ({
  type,
  placeholder,
  inputRef,
  onChange,
  inputType,
  $error,
}) => {
  return (
    <St.JoinInput
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      onChange={(e) => onChange(e, inputType)}
      $error={$error}
    />
  );
};
