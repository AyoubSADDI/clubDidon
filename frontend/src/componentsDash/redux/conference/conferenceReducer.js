import { ADD_CONFERENCE, DELETE_CONFERENCE, FETCH_CONFERENCES_FAILURE, FETCH_CONFERENCES_REQUEST, FETCH_CONFERENCES_SUCCESS, UPDATE_CONFERENCE } from "./conferenceTypes"

const initialState = {
    loading: false,
    conferences: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONFERENCES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CONFERENCES_SUCCESS:
            return {
                loading: false,
                conferences: action.payload,
                error: ''
            }
        case FETCH_CONFERENCES_FAILURE:
            return {
                loading: false,
                conferences: [],
                error: action.payload
            }
        case DELETE_CONFERENCE:
            return {
                ...state,
                conferences: state.conferences.filter((conf) => conf._id !== action.payload)
            }
        case ADD_CONFERENCE:
            return {
                ...state,
                conferences: [...state.conferences, action.payload],
            }
        case UPDATE_CONFERENCE:
            return {
                ...state,
                conferences: state.conferences.map((conf)=> conf._id === action.payload._id ? action.payload : conf  )
            }
        default: return state
    }
}
export default reducer