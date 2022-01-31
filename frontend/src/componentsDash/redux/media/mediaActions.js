import {
  FETCH_MEDIAS_REQUEST,
  FETCH_MEDIAS_SUCCESS,
  FETCH_MEDIAS_FAILURE,
  DELETE_MEDIA,
  ADD_MEDIA,
  UPDATE_MEDIA,
} from "./mediaTypes";
import axios from "axios";
export const fetchMediasRequest = () => {
  return {
    type:  FETCH_MEDIAS_REQUEST,

  };
};

export const fetchMediasSuccess = (evs) => {
  return {
    type: FETCH_MEDIAS_SUCCESS,
    payload: evs,
  };
};

export const fetchMediasFailure = (error) => {
  return {
    type: FETCH_MEDIAS_FAILURE,
    payload: error,
  };
};

export const deleteMedia = (id) => {
  return {
    type: DELETE_MEDIA,
    payload: id,
  };
};

export const addMedia = (ev) => {
  return {
    type: ADD_MEDIA,
    payload: ev,
  };
};

export const updateMedia = (ev) => {
  return {
    type: UPDATE_MEDIA,
    payload: ev,
  };
};

export const fetchMedias = () => {
  return function (dispatch) {
    dispatch(fetchMediasRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}media`, {
        // headers: {
        //   Authorization: token,
        // },
      })
      .then((response) => {
        //response.data is the array of events
        const medias = response.data;
        dispatch(fetchMediasSuccess(medias));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchMediasFailure(error.message));
      });
  };
};

export const DeleteMedia = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}media/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteMedia(id)));
  };
};

export const AddMedia = (ev) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}media/`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addMedia(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateMedia = (ev) => {
  console.log(ev);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}media/${ev._id}`, ev, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateMedia(ev));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
