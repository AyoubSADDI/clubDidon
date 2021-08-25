import {
  ADD_PARTENAIRE,
  DELETE_PARTENAIRE,
  FETCH_PARTENAIRES_FAILURE,
  FETCH_PARTENAIRES_REQUEST,
  FETCH_PARTENAIRES_SUCCESS,
  UPDATE_PARTENAIRE,
} from "./partenaireTypes";

const initialState = {
  loading: false,
  partenaires: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTENAIRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PARTENAIRES_SUCCESS:
      return {
        loading: false,
        partenaires: action.payload,
        error: "",
      };
    case FETCH_PARTENAIRES_FAILURE:
      return {
        loading: false,
        partenaires: [],
        error: action.payload,
      };
    case DELETE_PARTENAIRE:
      return {
        ...state,
        partenaires: state.partenaires.filter(
          (conf) => conf._id !== action.payload
        ),
      };
    case ADD_PARTENAIRE:
      return {
        ...state,
        partenaires: [...state.partenaires, action.payload],
      };
    case UPDATE_PARTENAIRE:
      return {
        ...state,
        partenaires: state.partenaires.map((conf) =>
          conf._id === action.payload._id ? action.payload : conf
        ),
      };
    default:
      return state;
  }
};
export default reducer;
