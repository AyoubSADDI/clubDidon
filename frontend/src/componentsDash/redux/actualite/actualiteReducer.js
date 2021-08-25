import {
  ADD_ACTUALITE,
  DELETE_ACTUALITE,
  FETCH_ACTUALITES_FAILURE,
  FETCH_ACTUALITES_REQUEST,
  FETCH_ACTUALITES_SUCCESS,
  UPDATE_ACTUALITE,
} from "./actualiteTypes";

const initialState = {
  loading: false,
  actualites: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTUALITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACTUALITES_SUCCESS:
      return {
        loading: false,
        actualites: action.payload,
        error: "",
      };
    case FETCH_ACTUALITES_FAILURE:
      return {
        loading: false,
        actualites: [],
        error: action.payload,
      };
    case DELETE_ACTUALITE:
      return {
        ...state,
        actualites: state.actualites.filter(
          (ac) => ac._id !== action.payload
        ),
      };
    case ADD_ACTUALITE:
      return {
        ...state,
        actualites: [...state.actualites, action.payload],
      };
    case UPDATE_ACTUALITE:
      return {
        ...state,
        actualites: state.actualites.map((ac) =>
          ac._id === action.payload._id ? action.payload : ac
        ),
      };
    default:
      return state;
  }
};
export default reducer;
