import {
  FETCH_SORTIES_REQUEST,
  FETCH_SORTIES_SUCCESS,
  FETCH_SORTIES_FAILURE,
  DELETE_SORTIE,
  ADD_SORTIE,
  UPDATE_SORTIE,
} from "./sortieTypes";
import axios from "axios";
export const fetchSortiesRequest = () => {
  return {
    type:  FETCH_SORTIES_REQUEST,
  };
};

export const fetchSortiesSuccess = (sorts) => {
  return {
    type: FETCH_SORTIES_SUCCESS,
    payload: sorts,
  };
};

export const fetchSortiesFailure = (error) => {
  return {
    type: FETCH_SORTIES_FAILURE,
    payload: error,
  };
};

export const deleteSortie = (id) => {
  return {
    type: DELETE_SORTIE,
    payload: id,
  };
};

export const addSortie = (sort) => {
  return {
    type: ADD_SORTIE,
    payload: sort,
  };
};

export const updateSortie = (sort) => {
  return {
    type: UPDATE_SORTIE,
    payload: sort,
  };
};

export const fetchSorties = () => {
  return function (dispatch) {
    dispatch(fetchSortiesRequest());
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;

    axios
      .get(`${process.env.REACT_APP_CLIENT_URL}api/sortie`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of sorties
        const sorties = response.data;
        dispatch(fetchSortiesSuccess(sorties));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchSortiesFailure(error.message));
      });
  };
};

export const DeleteSortie = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}api/sortie/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteSortie(id)));
  };
};

export const AddSortie = (sort) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}api/sortie/`, sort, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addSortie(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateSortie = (sort) => {
  console.log(sort);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}api/sortie/${sort._id}`, sort, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateSortie(sort));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
