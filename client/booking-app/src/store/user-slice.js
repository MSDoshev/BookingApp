import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    villa: {},
    reservations: [],
    status: "idle",
    error: null,
  },
  reducers: {
    reviewSuccess(state, action) {
      state.reservations = action.payload;
      state.error = null;
    },
    reviewFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
