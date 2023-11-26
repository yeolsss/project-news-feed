// initial state 설정
import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toggleDropDownMenu } from "../redux/slice/dropDown.slice";
import { setLoading } from "../redux/slice/loadingModal.slice";
import { useRoot } from "./root.context";

const initialState = {
  loginCheck: () => {},
};

// context provider 생성
export const LoginContext = createContext(initialState);

export function LoginProvider({ children }) {
  const navigate = useNavigate();
  const params = useParams();
  // root context
  const { isLogin, userInfo } = useRoot();
  // login reducer
  const dispatch = useDispatch();

  const loginChecked = () => {
    // 로그인 체크 후 로그인이 되어 있지 않으면 home으로 이동 및 login창 띄우기
    if (isLogin === undefined) {
      dispatch(setLoading(true));
      return;
    }
    if (!isLogin) {
      // dispatch(openLoginModal());
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch(toggleDropDownMenu(false));
  }, [params]);

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
