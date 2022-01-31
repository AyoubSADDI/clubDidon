import {
  FETCH_EXECUTIFS_REQUEST,
  FETCH_EXECUTIFS_SUCCESS,
  FETCH_EXECUTIFS_FAILURE,
  DELETE_EXECUTIF,
  ADD_EXECUTIF,
  UPDATE_EXECUTIF,
} from "./executifTypes";
import axios from "axios";
export const fetchExecutifsRequest = () => {
  return {
    type:  FETCH_EXECUTIFS_REQUEST,

  };
};

export const fetchExecutifsSuccess = (evs) => {
  return {
    type: FETCH_EXECUTIFS_SUCCESS,
    payload: evs,
  };
};

export const fetchExecutifsFailure = (error) => {
  return {
    type: FETCH_EXECUTIFS_FAILURE,
    payload: error,
  };
};

export const deleteExecutif = (id) => {
  return {
    type: DELETE_EXECUTIF,
    payload: id,
  };
};

export const addExecutif = (ev) => {
  return {
    type: ADD_EXECUTIF,
    payload: ev,
  };
};

export const updateExecutif = (ev) => {
  return {
    type: UPDATE_EXECUTIF,
    payload: ev,
  };
};

export const fetchExecutifs = () => {
  return function (dispatch) {
    dispatch(fetchExecutifsRequest());
    // const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    // const token = "Bearer " + tokenFromStorage.token;
    // console.log(token);
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
      .get(`${process.env.REACT_APP_CLIENT_URL}executif`, {
        // headers: {
        //   Authorization: token,
        // },
      })
      .then((response) => {
        //response.data is the array of executifs
        const executifs = response.data;
        dispatch(fetchExecutifsSuccess(executifs));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchExecutifsFailure(error.message));
      });
  };
};

export const DeleteExecutif = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}executif/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteExecutif(id)));
  };
};

export const AddExecutif = (ev) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}executif/`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addExecutif(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateExecutif = (ev) => {
  console.log(ev);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}executif/${ev._id}`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateExecutif(ev));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
