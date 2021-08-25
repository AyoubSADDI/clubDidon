import {
  ADD_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  UPDATE_EVENT,
} from "./eventTypes";

const initialState = {
  loading: false,
  events: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case   FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        loading: false,
        events: action.payload,
        error: "",
      };
    case FETCH_EVENTS_FAILURE:
      return {
        loading: false,
        events: [],
        error: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(
          (ev) => ev._id !== action.payload
        ),
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((ev) =>
          ev._id === action.payload._id ? action.payload : ev
        ),
      };
    default:
      return state;
  }
};
export default reducer;
