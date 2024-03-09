import * as actionTypes from "../action-types/main_post_action_types";

export const getMainPostsRequest = () => ({
  type: actionTypes.GET_MAIN_POSTS_REQUEST,
});

export const getMainPostsSuccess = (posts) => ({
  type: actionTypes.GET_MAIN_POSTS_SUCCESS,
  payload: posts,
});

export const getMainPostsError = (error) => ({
  type: actionTypes.GET_MAIN_POSTS_ERROR,
  payload: error,
});

export const addMainPostRequest = () => ({
  type: actionTypes.ADD_MAIN_POST_REQUEST,
});

export const addMainPostSuccess = (post) => ({
  type: actionTypes.ADD_MAIN_POST_SUCCESS,
  payload: post,
});

export const addMainPostError = (error) => ({
  type: actionTypes.ADD_MAIN_POST_ERROR,
  payload: error,
});

export const deleteMainPostRequest = () => ({
  type: actionTypes.DELETE_MAIN_POST_REQUEST,
});

export const deleteMainPostSuccess = (id) => ({
  type: actionTypes.DELETE_MAIN_POST_SUCCESS,
  payload: id,
});

export const deleteMainPostError = (error) => ({
  type: actionTypes.DELETE_MAIN_POST_ERROR,
  payload: error,
});
