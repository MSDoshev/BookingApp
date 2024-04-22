import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { authActions } from "./auth-slice";
import { app } from "../firebase";

const auth = getAuth(app);
const database = getDatabase(app);

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const { email, password, firstName, lastName } = userData;
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = response;

      await set(ref(database, `users/${user.uid}`), {
        email,
        firstName,
        lastName,
      });
      localStorage.setItem("authToken", user.accessToken);
      dispatch(authActions.registerSuccess(user));
    } catch (error) {
      dispatch(authActions.registerFailure(error.message));
    }
  };
};
