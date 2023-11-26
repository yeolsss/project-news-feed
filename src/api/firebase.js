import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../common/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

/**
 * firebase signup function
 * @param {*} useData : {id, password}
 * @returns
 */
export const setUser = async (useData) => {
  return await createUserWithEmailAndPassword(
    auth,
    useData.id,
    useData.password
  );
};

/**
 * firebase login function
 * @param {*} loginData : {id, password}
 * @returns
 */
export const loginFirebase = (loginData) => {
  try {
    return signInWithEmailAndPassword(auth, loginData.id, loginData.password);
  } catch (error) {
    console.error(error);
  }
};

/**
 * 전체 회원 조회
 * 이 데이터로 데이터 출력
 */
export const getUsersInfo = async () => {
  const userCollection = collection(db, "user_info");
  let userSnapshot;
  try {
    userSnapshot = await getDocs(userCollection);
  } catch (error) {
    console.error(error);
  }
  return userSnapshot.docs.map((doc) => doc.data());
};

/**
 *  uid로 userInfo 검색
 * @param uid
 * @returns {Promise<DocumentSnapshot<DocumentData, DocumentData>>}
 */
export const getUserInfo = async (uid) => {
  return await getDoc(doc(db, "user_info", uid));
};
