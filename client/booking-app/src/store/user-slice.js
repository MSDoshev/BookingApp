import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    reservations: [],
    reviews: [],
    error: null,
  },
  reducers: {
    reservationSuccess(state, action) {
      state.reservations = action.payload;
      state.error = null;
    },
    reservationFailure(state, action) {
      state.error = action.payload;
    },
    reviewSuccess(state, action) {
      state.reviews = action.payload;
      state.error = null;
    },
    reviewFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
