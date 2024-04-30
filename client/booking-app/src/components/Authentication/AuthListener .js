import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice.js";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        dispatch(authActions.loginSuccess(userData));
      } else {
        dispatch(authActions.logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
}
