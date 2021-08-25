import {
  ADD_PLANNING,
  DELETE_PLANNING,
  FETCH_PLANNINGS_FAILURE,
  FETCH_PLANNINGS_REQUEST,
  FETCH_PLANNINGS_SUCCESS,
  UPDATE_PLANNING,
} from "./planningTypes";

const initialState = {
  loading: false,
  plannings: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case   FETCH_PLANNINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANNINGS_SUCCESS:
      return {
        loading: false,
        plannings: action.payload,
        error: "",
      };
    case FETCH_PLANNINGS_FAILURE:
      return {
        loading: false,
        plannings: [],
        error: action.payload,
      };
    case DELETE_PLANNING:
      return {
        ...state,
        plannings: state.plannings.filter(
          (pl) => pl._id !== action.payload
        ),
      };
    case ADD_PLANNING:
      return {
        ...state,
        plannings: [...state.plannings, action.payload],
      };
    case UPDATE_PLANNING:
      return {
        ...state,
        plannings: state.plannings.map((pl) =>
          pl._id === action.payload._id ? action.payload : pl
        ),
      };
    default:
      return state;
  }
};
export default reducer;
