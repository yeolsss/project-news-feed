import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../common/firebase";
import { getUserInfo } from "../api/firebase";

// context 초기화
const initialState = {
  isLogin: false,
  logout: () => {},
  userInfo: {
    email: "",
    uid: "",
    name: "",
    nickname: "",
    image_path: "",
    greeting: "",
    getTags: () => {},
  },
  tags: [],
  getTags: () => {},
  // 로그인 되어있지않으면 홈으로 이동 후 로그인창 띄우기
  loginCheckToNavigateHome: () => {},
};

export const RootContext = createContext(initialState);

// context provider생성
export function RootProvider({ children }) {
  const [isLogin, setIsLogin] = useState(undefined);
  const [userInfo, setUser] = useState({});
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    // taglist 호출
    const fireStoreTags = await getDocs(collection(db, "tags"));
    const tempTagsArr = [];
    fireStoreTags.forEach((doc) => {
      tempTagsArr.push(doc.data());
    });
    setTags([...tempTagsArr]);
  };
  const loginCheck = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { email, uid } = user;
        // 사용자가 로그인한 상태
        // 로그인 한 사용자 이름 가져와
        const getUserInfoData = await getUserInfo(uid);

        if (getUserInfoData.exists()) {
          const tempUserInfo = {
            email,
            uid,
            name: getUserInfoData.data().name,
            nickname: getUserInfoData.data().nickname,
            image_path: getUserInfoData.data().image_path,
            greeting: getUserInfoData.data().greeting,
          };
          setUser({ ...tempUserInfo });
          setIsLogin(true);
        } else {
          console.log("No such document!");
        }
      } else {
        // 사용자가 로그아웃한 상태
        setIsLogin(false);
        setUser({ email: "", uid: "" });
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
    tags,
    getTags,
    loginCheck,
  };
  useEffect(() => {
    loginCheck();
    (async () => {
      await getTags();
    })();
  }, []);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export const useRoot = () => useContext(RootContext);
