import {
  ADD_ADHESION,
  DELETE_ADHESION,
  FETCH_ADHESIONS_FAILURE,
  FETCH_ADHESIONS_REQUEST,
  FETCH_ADHESIONS_SUCCESS,
  UPDATE_ADHESION,
} from "./adhesionTypes";

const initialState = {
  loading: false,
  adhesions: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADHESIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADHESIONS_SUCCESS:
      return {
        loading: false,
        adhesions: action.payload,
        error: "",
      };
    case FETCH_ADHESIONS_FAILURE:
      return {
        loading: false,
        adhesions: [],
        error: action.payload,
      };
    case DELETE_ADHESION:
      return {
        ...state,
        adhesions: state.adhesions.filter((sort) => sort._id !== action.payload),
      };
    case ADD_ADHESION:
      return {
        ...state,
        adhesions: [...state.adhesions, action.payload],
      };
    case UPDATE_ADHESION:
      return {
        ...state,
        adhesions: state.adhesions.map((sort) =>
          sort._id === action.payload._id ? action.payload : sort
        ),
      };
    default:
      return state;
  }
};
export default reducer;
