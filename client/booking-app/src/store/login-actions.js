import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { authActions } from "./auth-slice";
import { app } from "../firebase";

const auth = getAuth(app);

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const { user } = response;

      const userData = {
        uid: user.uid,
        email: user.email,
      };
      dispatch(authActions.loginSuccess(userData));
    } catch (error) {
      dispatch(authActions.loginFailure(error.message));
    }
  };
};
