import { getAuth, signOut } from "firebase/auth";
import { authActions } from "./auth-slice";
import { app } from "../firebase";

const auth = getAuth(app);

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(authActions.logout());
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
};
