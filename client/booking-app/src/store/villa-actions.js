import { uiActions } from "./ui-slice";

export const fetchVillasData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bookingapp-effea-default-rtdb.europe-west1.firebasedatabase.app/.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch villas data.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const { villas } = await fetchData();
      dispatch(uiActions.setVillasData({ villas }));
    } catch (error) {
      dispatch({ type: "FETCH_VILLAS_FAILURE", payload: error.message });
    }
  };
};
