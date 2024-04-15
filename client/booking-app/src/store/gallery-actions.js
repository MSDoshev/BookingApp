import { uiActions } from "./ui-slice";

export const fetchGalleryData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bookingapp-effea-default-rtdb.europe-west1.firebasedatabase.app/.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch gallery data.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const { images } = await fetchData();
      dispatch(uiActions.setImagesData({ images }));
    } catch (error) {
      dispatch({ type: "FETCH_VILLAS_FAILURE", payload: error.message });
    }
  };
};