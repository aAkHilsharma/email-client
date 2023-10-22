import axios from "axios";
import createDataContext from "./create-data-context";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "set_emails":
      return { ...state, emails: action.payload };
    case "add_to_favorites":
      const emailToAdd = action.payload;
      return { ...state, favorites: [...state.favorites, emailToAdd] };
    case "remove_from_favorites":
      const emailToRemove = action.payload;
      const updatedFavorites = state.favorites.filter(
        (mail) => mail.id !== emailToRemove.id
      );
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};

const setEmails = (dispatch) => async () => {
  try {
    const response = await axios.get(
      "https://flipkart-email-mock.now.sh?page=1"
    );
    dispatch({ type: "set_emails", payload: response.data.list });
  } catch (err) {
    console.log(err);
  }
};

const addToFavorites = (dispatch) => (email) => {
  dispatch({ type: "add_to_favorites", payload: email });
};

const removeFromFavorites = (dispatch) => (email) => {
  dispatch({ type: "remove_from_favorites", payload: email });
};

export const { Context, Provider } = createDataContext(
  emailReducer,
  { setEmails, addToFavorites, removeFromFavorites },
  { emails: [], favorites: [] }
);
