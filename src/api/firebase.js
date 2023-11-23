import {
  createUserWithEmailAndPassword,
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
export const loginFirebase = (loginData) => {
  try {
    const response = signInWithEmailAndPassword(
      auth,
      loginData.id,
      loginData.password
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
