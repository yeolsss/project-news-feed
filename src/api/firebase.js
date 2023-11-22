import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";

export const setUser = async (useData) => {
  const user = await createUserWithEmailAndPassword(
    auth,
    useData.id,
    useData.password
  );
  return user;
};
