import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  DELETE_EVENT,
  ADD_EVENT,
  UPDATE_EVENT,
} from "./eventTypes";
import axios from "axios";
export const fetchEventsRequest = () => {
  return {
    type:  FETCH_EVENTS_REQUEST,

  };
};

export const fetchEventsSuccess = (evs) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: evs,
  };
};

export const fetchEventsFailure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};

export const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id,
  };
};

export const addEvent = (ev) => {
  return {
    type: ADD_EVENT,
    payload: ev,
  };
};

export const updateEvent = (ev) => {
  return {
    type: UPDATE_EVENT,
    payload: ev,
  };
};

export const fetchEvents = () => {
  return function (dispatch) {
    dispatch(fetchEventsRequest());
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    /*
        axios
        .put(
          'http://localhost:5000/api/users/' + user._id,
          { user, userId: user._id },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        */
    axios
      .get(`${process.env.REACT_APP_CLIENT_URL}api/event`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of events
        const events = response.data;
        dispatch(fetchEventsSuccess(events));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchEventsFailure(error.message));
      });
  };
};

export const DeleteEvent = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}api/event/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteEvent(id)));
  };
};

export const AddEvent = (ev) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}api/event/`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addEvent(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateEvent = (ev) => {
  console.log(ev);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}api/event/${ev._id}`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateEvent(ev));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
