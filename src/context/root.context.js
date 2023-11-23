import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../common/firebase";

// context 초기화
const initialState = {
  isLogin: false,
  logout: () => {},
  userInfo: {},
};

export const RootContext = createContext(initialState);

// context provider생성
export function RootProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUser] = useState({});
  const loginCheck = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 상태
        setUser(user);
        setIsLogin(true);
      } else {
        // 사용자가 로그아웃한 상태
        setIsLogin(false);
        setUser({});
      }
    });
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setIsLogin(false);
    } catch (error) {
      console.error(error);
    }
  };
  const value = {
    isLogin,
    logout,
    userInfo,
  };

  useEffect(() => {
    loginCheck();
  }, []);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export const useRoot = () => useContext(RootContext);
