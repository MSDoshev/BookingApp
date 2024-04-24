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

// export const loginUserWithToken = () => {
//   return async (dispatch) => {
//     const userSessionKey = `firebase:authUser:AIzaSyCoBz8zpOMvEOlVckam1xDQX4dbkMllPFs:[DEFAULT]`;
//     const userSessionData = localStorage.getItem(userSessionKey);
//     const userSession = JSON.parse(userSessionData);

//     try {
//       const credential = OAuthCredential.fromJSON({
//         providerId: "firebase",
//         signInMethod: "customToken",
//         accessToken: userSession.stsTokenManager.accessToken,
//       });

//       const userCredential = await signInWithCredential(auth, credential);

//       const { user } = userCredential;

//       const userData = {
//         uid: user.uid,
//         email: user.email,
//       };

//       dispatch(authActions.loginSuccess(userData));
//     } catch (error) {
//       dispatch(authActions.loginFailure(error.message));
//     }
//   };
// };
