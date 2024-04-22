import { getDatabase, ref, get } from "firebase/database";

import { getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth();
const database = getDatabase(app);
export const getUserData = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.error("User not authenticated");
    return null;
  }

  try {
    const snapshot = await get(ref(database, `users/${user.uid}`));
    const userData = snapshot.val();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
};
