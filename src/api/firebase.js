import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../common/firebase";

/**
 * firebase signup function
 * @param {*} useData : {id, password}
 * @returns
 */
export const setUser = async (useData) => {
  const user = await createUserWithEmailAndPassword(
    auth,
    useData.id,
    useData.password
  );
  return user;
};

/**
 * firebase login function
 * @param {*} loginData : {id, password}
 * @returns
 */
export const loginFirebase = async (loginData) => {
  const user = await signInWithEmailAndPassword(
    auth,
    loginData.id,
    loginData.password
  );
  return user;
};

/**
 *
 */
export const loginCheck = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 사용자가 로그인한 상태
      console.log("로그인 상태:", user);
      return true;
    } else {
      // 사용자가 로그아웃한 상태
      console.log("로그아웃 상태");
      return false;
    }
  });
};
