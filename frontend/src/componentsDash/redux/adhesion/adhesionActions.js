import {
  ADD_ADHESION,
  DELETE_ADHESION,
  FETCH_ADHESIONS_FAILURE,
  FETCH_ADHESIONS_REQUEST,
  FETCH_ADHESIONS_SUCCESS,
  UPDATE_ADHESION,
} from "./adhesionTypes";
import axios from "axios";
export const fetchAdhesionsRequest = () => {
  return {
    type:   FETCH_ADHESIONS_REQUEST,
    
  };
};

export const fetchAdhesionsSuccess = (acs) => {
  return {
    type: FETCH_ADHESIONS_SUCCESS,
    payload: acs,
  };
};

export const fetchAdhesionsFailure = (error) => {
  return {
    type: FETCH_ADHESIONS_FAILURE,
    payload: error,
  };
};

export const deleteAdhesion = (id) => {
  return {
    type: DELETE_ADHESION,
    payload: id,
  };
};

export const addAdhesion = (ac) => {
  return {
    type: ADD_ADHESION,
    payload: ac,
  };
};

export const updateAdhesion = (ac) => {
  return {
    type: UPDATE_ADHESION,
    payload: ac,
  };
};

export const fetchAdhesions = () => {
  return function (dispatch) {
    dispatch(fetchAdhesionsRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}adhesion`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of adhesion
        const adhesions = response.data;
        dispatch(fetchAdhesionsSuccess(adhesions));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchAdhesionsFailure(error.message));
      });
  };
};

export const DeleteAdhesion = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}adhesion/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deleteAdhesion(id)));
  };
};

export const AddAdhesion = (ac) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}adhesion/`, ac, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addAdhesion(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdateAdhesion = (ac) => {
  console.log(ac);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}adhesion/${ac._id}`, ac, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updateAdhesion(ac));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
