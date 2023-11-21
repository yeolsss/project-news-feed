import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";

export const setUser = async (id, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, id, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};
