import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../common/firebase";

// context 초기화
const initialState = {
  isLogin: false,
  logout: () => {},
  userInfo: { email: "", uid: "", name: "", nickname: "", imgStorage: "" },
  tags: [],
};

export const RootContext = createContext(initialState);

// context provider생성
export function RootProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid } = user;
        // 사용자가 로그인한 상태
        setIsLogin(true);

        // 로그인 한 사용자 이름 가져와
        setUser({ email, uid });
        getDoc(doc(db, "user_info", uid)).then((docSnap) => {
          if (docSnap.exists()) {
            setUser({
              email,
              uid,
              name: docSnap.data().name,
              nickname: docSnap.data().nickname,
              imgStorage: docSnap.data().img_storage,
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });
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
  };
  useEffect(() => {
    loginCheck();
    getTags();
  }, []);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export const useRoot = () => useContext(RootContext);
