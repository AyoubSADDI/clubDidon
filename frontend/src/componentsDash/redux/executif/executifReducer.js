import {
  ADD_EXECUTIF,
  DELETE_EXECUTIF,
  FETCH_EXECUTIFS_FAILURE,
  FETCH_EXECUTIFS_REQUEST,
  FETCH_EXECUTIFS_SUCCESS,
  UPDATE_EXECUTIF,
} from "./executifTypes";

const initialState = {
  loading: false,
  executifs: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case   FETCH_EXECUTIFS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EXECUTIFS_SUCCESS:
      return {
        loading: false,
        executifs: action.payload,
        error: "",
      };
    case FETCH_EXECUTIFS_FAILURE:
      return {
        loading: false,
        executifs: [],
        error: action.payload,
      };
    case DELETE_EXECUTIF:
      return {
        ...state,
        executifs: state.executifs.filter(
          (ev) => ev._id !== action.payload
        ),
      };
    case ADD_EXECUTIF:
      return {
        ...state,
        executifs: [...state.executifs, action.payload],
      };
    case UPDATE_EXECUTIF:
      return {
        ...state,
        executifs: state.executifs.map((ev) =>
          ev._id === action.payload._id ? action.payload : ev
        ),
      };
    default:
      return state;
  }
};
export default reducer;
