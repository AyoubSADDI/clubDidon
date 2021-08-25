import {
  ADD_ACTUALITE,
  DELETE_ACTUALITE,
  FETCH_ACTUALITES_FAILURE,
  FETCH_ACTUALITES_REQUEST,
  FETCH_ACTUALITES_SUCCESS,
  UPDATE_ACTUALITE,
} from "./actualiteTypes";
import axios from "axios";

export const fetchActualitesRequest = () => {
  return {
    type: FETCH_ACTUALITES_REQUEST,
  };
};

export const fetchActualitesSuccess = (acs) => {
  return {
    type: FETCH_ACTUALITES_SUCCESS,
    payload: acs,
  };
};

export const fetchActualitesFailure = (error) => {
  return {
    type: FETCH_ACTUALITES_FAILURE,
    payload: error,
  };
};

export const deleteActualite = (id) => {
  return {
    type: DELETE_ACTUALITE,
    payload: id,
  };
};

export const addActualite = (ac) => {
  return {
    type: ADD_ACTUALITE,
    payload: ac,
  };
};

export const updateActualite = (ac) => {
  return {
    type: UPDATE_ACTUALITE,
    payload: ac,
  };
};

export const fetchActualites = () => {
  return function (dispatch) {
    dispatch(fetchActualitesRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}api/actualite`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of actualites
        const actualites = response.data;
        dispatch(fetchActualitesSuccess(actualites));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchActualitesFailure(error.message));
      });
  };
};

export const DeleteActualite = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}api/actualite/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteActualite(id)));
  };
};

export const AddActualite = (ac) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}api/actualite/`, ac, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addActualite(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateActualite = (ac) => {
  console.log(ac);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}api/actualite/${ac._id}`, ac, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateActualite(ac));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
