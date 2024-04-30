import { getDatabase, ref, get, set, push, remove } from "firebase/database";

import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { userActions } from "./user-slice";

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

export const addReservationForUser = (reservationData) => {
  return async (dispatch) => {
    const user = auth.currentUser;

    try {
      const { villa, guests, dateFrom, dateTo, price } = reservationData;
      const reservationsRef = ref(database, `users/${user.uid}/reservations`);
      const newReservationRef = push(reservationsRef);
      await set(newReservationRef, {
        villa,
        guests,
        dateFrom,
        dateTo,
        price,
      });

      dispatch(userActions.reservationSuccess(reservationData));
    } catch (error) {
      dispatch(userActions.reservationFailure(error.message));
    }
  };
};

export const removeReservationForUser = (key) => {
  return async () => {
    const user = auth.currentUser;

    try {
      const reservationRef = ref(
        database,
        `users/${user.uid}/reservations/${key}`
      );
      remove(reservationRef);
    } catch (error) {
      console.error(`Unable to cancel the reservation: ${error.message}`);
    }
  };
};

export const addVillaReview = (reviewData, id) => {
  return async (dispatch) => {
    const user = auth.currentUser;

    try {
      const snapshot = await get(ref(database, `users/${user.uid}`));
      const userData = snapshot.val();
      const userFullName = `${userData.firstName} ${userData.lastName}`;

      const { rating, reviewText } = reviewData;
      const reviewRef = ref(database, `villas/${id}/reviews`);
      const newReviewRef = push(reviewRef);
      await set(newReviewRef, {
        userID: user.uid,
        userName: userFullName,
        rating,
        reviewText,
      });

      dispatch(userActions.reviewSuccess(reviewData));
    } catch (error) {
      dispatch(userActions.reviewFailure(error.message));
    }
  };
};
export const getReviewsData = async (id) => {
  try {
    const snapshot = await get(ref(database, `villas/${id}/reviews`));
    const reviewsData = snapshot.val();
    return reviewsData;
  } catch (error) {
    console.error("Error fetching review data:", error.message);
    return null;
  }
};
