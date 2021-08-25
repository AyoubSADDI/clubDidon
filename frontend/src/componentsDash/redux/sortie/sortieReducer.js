import {
  ADD_SORTIE,
  DELETE_SORTIE,
  FETCH_SORTIES_FAILURE,
  FETCH_SORTIES_REQUEST,
  FETCH_SORTIES_SUCCESS,
  UPDATE_SORTIE,
} from "./sortieTypes";

const initialState = {
  loading: false,
  sorties: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SORTIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SORTIES_SUCCESS:
      return {
        loading: false,
        sorties: action.payload,
        error: "",
      };
    case FETCH_SORTIES_FAILURE:
      return {
        loading: false,
        sorties: [],
        error: action.payload,
      };
    case DELETE_SORTIE:
      return {
        ...state,
        sorties: state.sorties.filter((sort) => sort._id !== action.payload),
      };
    case ADD_SORTIE:
      return {
        ...state,
        sorties: [...state.sorties, action.payload],
      };
    case UPDATE_SORTIE:
      return {
        ...state,
        sorties: state.sorties.map((sort) =>
          sort._id === action.payload._id ? action.payload : sort
        ),
      };
    default:
      return state;
  }
};
export default reducer;
