import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../common/firebase";

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
    return signInWithEmailAndPassword(
        auth,
        loginData.id,
        loginData.password
    );
  } catch (error) {
    console.error(error);
  }
};
