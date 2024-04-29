import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    reservations: [],
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
  },
});

export const userActions = userSlice.actions;

export default userSlice;
