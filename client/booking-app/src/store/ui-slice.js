import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { galleryModalIsVisible: false },
  reducers: {
    toggle(state) {
      state.galleryModalIsVisible = !state.galleryModalIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
