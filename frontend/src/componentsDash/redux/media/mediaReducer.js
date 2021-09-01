import {
  ADD_MEDIA,
  DELETE_MEDIA,
  FETCH_MEDIAS_FAILURE,
  FETCH_MEDIAS_REQUEST,
  FETCH_MEDIAS_SUCCESS,
  UPDATE_MEDIA,
} from "./mediaTypes";

const initialState = {
  loading: false,
  medias: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case   FETCH_MEDIAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEDIAS_SUCCESS:
      return {
        loading: false,
        medias: action.payload,
        error: "",
      };
    case FETCH_MEDIAS_FAILURE:
      return {
        loading: false,
        medias: [],
        error: action.payload,
      };
    case DELETE_MEDIA:
      return {
        ...state,
        medias: state.medias.filter(
          (ev) => ev._id !== action.payload
        ),
      };
    case ADD_MEDIA:
      return {
        ...state,
        medias: [...state.medias, action.payload],
      };
    case UPDATE_MEDIA:
      return {
        ...state,
        medias: state.medias.map((ev) =>
          ev._id === action.payload._id ? action.payload : ev
        ),
      };
    default:
      return state;
  }
};
export default reducer;
