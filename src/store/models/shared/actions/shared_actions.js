import * as actionTypes from "../action-types/shared_action_types";

export const getRequest = () => ({
  type: actionTypes.GET_REQUEST,
});

export const getSuccess = () => ({
  type: actionTypes.GET_SUCCESS,
});

export const getError = (error) => ({
  type: actionTypes.GET_ERROR,
  payload: error,
});
