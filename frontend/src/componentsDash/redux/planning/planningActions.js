import {
  ADD_PLANNING,
  DELETE_PLANNING,
  FETCH_PLANNINGS_FAILURE,
  FETCH_PLANNINGS_REQUEST,
  FETCH_PLANNINGS_SUCCESS,
  UPDATE_PLANNING,
} from "./planningTypes";
import axios from "axios";
export const fetchPlanningsRequest = () => {
  return {
    type:  FETCH_PLANNINGS_REQUEST,

  };
};

export const fetchPlanningsSuccess = (pls) => {
  return {
    type: FETCH_PLANNINGS_SUCCESS,
    payload: pls,
  };
};

export const fetchPlanningsFailure = (error) => {
  return {
    type: FETCH_PLANNINGS_FAILURE,
    payload: error,
  };
};

export const deletePlanning = (id) => {
  return {
    type: DELETE_PLANNING,
    payload: id,
  };
};

export const addPlanning = (pl) => {
  return {
    type: ADD_PLANNING,
    payload: pl,
  };
};

export const updatePlanning = (pl) => {
  return {
    type: UPDATE_PLANNING,
    payload: pl,
  };
};

export const fetchPlannings = () => {
  return function (dispatch) {
    dispatch(fetchPlanningsRequest());
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
      .get(`${process.env.REACT_APP_CLIENT_URL}planning`, {
        // headers: {
        //   Authorization: token,
        // },
      })
      .then((response) => {
        //response.data is the array of plannings
        const plannings = response.data;
        dispatch(fetchPlanningsSuccess(plannings));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchPlanningsFailure(error.message));
      });
  };
};

export const DeletePlanning = (id) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .delete(`${process.env.REACT_APP_CLIENT_URL}planning/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(dispatch(deletePlanning(id)));
  };
};

export const AddPlanning = (pl) => {
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_CLIENT_URL}planning/`, pl, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(addPlanning(response.data));
      })
      .catch((error) => console.log("errorAddinng  : ", error.response));
  };
};

export const UpdatePlanning = (pl) => {
  console.log(pl);
  return function (dispatch) {
    const tokenFromStorage = JSON.parse(localStorage.getItem("login"));
    const token = "Bearer " + tokenFromStorage.token;
    console.log(token);
    axios
      .put(`${process.env.REACT_APP_CLIENT_URL}planning/${pl._id}`, pl, {
        headers: {
          Authorization: token,
        },
      })
      .then(
        () => {
          dispatch(updatePlanning(pl));
        },
        (error) => {
          console.log({ "error updating ": error });
        }
      );
  };
};
