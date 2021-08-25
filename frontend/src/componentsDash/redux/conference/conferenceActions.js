import {
  FETCH_CONFERENCES_REQUEST,
  FETCH_CONFERENCES_SUCCESS,
  FETCH_CONFERENCES_FAILURE,
  DELETE_CONFERENCE,
  ADD_CONFERENCE,
  UPDATE_CONFERENCE,
} from "./conferenceTypes";
import axios from "axios";
export const fetchConferencesRequest = () => {
  return {
    type: FETCH_CONFERENCES_REQUEST,
  };
};

export const fetchConferencesSuccess = (confs) => {
  return {
    type: FETCH_CONFERENCES_SUCCESS,
    payload: confs,
  };
};

export const fetchConferencesFailure = (error) => {
  return {
    type: FETCH_CONFERENCES_FAILURE,
    payload: error,
  };
};

export const deleteConference = (id) => {
  return {
    type: DELETE_CONFERENCE,
    payload: id,
  };
};

export const addConference = (conf) => {
  return {
    type: ADD_CONFERENCE,
    payload: conf,
  };
};

export const updateConference = (conf) => {
  return {
    type: UPDATE_CONFERENCE,
    payload: conf,
  };
};

export const fetchConferences = () => {
  return function (dispatch) {
    dispatch(fetchConferencesRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}api/conference`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of conferences
        const conferences = response.data;
        dispatch(fetchConferencesSuccess(conferences));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchConferencesFailure(error.message));
      });
  };
};

export const DeleteConference = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}api/conference/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteConference(id)));
  };
};

export const AddConference = (conf) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}api/conference/`, conf, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addConference(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateConference = (conf) => {
  console.log(conf);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}api/conference/${conf._id}`, conf, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateConference(conf));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
