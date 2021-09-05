import {
  ADD_PARTENAIRE,
  DELETE_PARTENAIRE,
  FETCH_PARTENAIRES_FAILURE,
  FETCH_PARTENAIRES_REQUEST,
  FETCH_PARTENAIRES_SUCCESS,
  UPDATE_PARTENAIRE,
} from "./partenaireTypes";
import axios from "axios";
export const fetchPartenairesRequest = () => {
  return {
    type: FETCH_PARTENAIRES_REQUEST,
  };
};

export const fetchPartenairesSuccess = (confs) => {
  return {
    type: FETCH_PARTENAIRES_SUCCESS,
    payload: confs,
  };
};

export const fetchPartenairesFailure = (error) => {
  return {
    type: FETCH_PARTENAIRES_FAILURE,
    payload: error,
  };
};

export const deletePartenaire = (id) => {
  return {
    type: DELETE_PARTENAIRE,
    payload: id,
  };
};

export const addPartenaire = (conf) => {
  return {
    type: ADD_PARTENAIRE,
    payload: conf,
  };
};

export const updatePartenaire = (conf) => {
  return {
    type: UPDATE_PARTENAIRE,
    payload: conf,
  };
};

export const fetchPartenaires = () => {
  return function (dispatch) {
    dispatch(fetchPartenairesRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}partenaire`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //response.data is the array of partenaires
        const partenaires = response.data;
        dispatch(fetchPartenairesSuccess(partenaires));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchPartenairesFailure(error.message));
      });
  };
};

export const DeletePartenaire = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}partenaire/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deletePartenaire(id)));
  };
};

export const AddPartenaire = (conf) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}partenaire/`, conf, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addPartenaire(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdatePartenaire = (conf) => {
  console.log(conf);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}partenaire/${conf._id}`, conf, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updatePartenaire(conf));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
