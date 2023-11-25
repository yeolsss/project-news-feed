// initial state 설정
import { createContext, useContext, useEffect } from "react";
import { useRoot } from "./root.context";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openLoginModal } from "../redux/slice/loginModal.slice";
import { setLoading } from "../redux/slice/loadingModal.slice";

const initialState = {
  loginCheck: () => {},
};

// context provider 생성
export const LoginContext = createContext(initialState);

export function LoginProvider({ children }) {
  const navigate = useNavigate();
  // root context
  const { isLogin } = useRoot();

  // login reducer
  const dispatch = useDispatch();

  const loginChecked = () => {
    // 로그인 체크 후 로그인이 되어 있지 않으면 home으로 이동 및 login창 띄우기
    if (isLogin === undefined) {
      dispatch(setLoading(true));
      return;
    }
    // 이 부분 비동기 처리
    if (!isLogin) {
      dispatch(openLoginModal());
      navigate("/");
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    loginChecked();
    if (isLogin !== undefined) {
      dispatch(setLoading(false));
    }
  }, [isLogin]);

  const value = {
    loginChecked,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

export const useLoginContext = () => useContext(LoginContext);
