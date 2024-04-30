import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  galleryModalIsVisible: false,
  feedbackModal: false,
  villasData: [],
  imagesData: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.galleryModalIsVisible = !state.galleryModalIsVisible;
    },
    setVillasData(state, action) {
      state.villasData = action.payload.villas;
    },
    setImagesData(state, action) {
      state.imagesData = action.payload.images;
    },
    toggleFeedbackModal(state) {
      state.feedbackModal = !state.feedbackModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
