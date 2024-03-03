import * as actionTypes from "../action-types/post_action_types";

export const getPostsRequest = () => ({
  type: actionTypes.GET_POSTS_REQUEST,
});

export const getPostsSuccess = (posts) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsError = (error) => ({
  type: actionTypes.GET_POSTS_ERROR,
  payload: error,
});

export const addPostRequest = () => ({
  type: actionTypes.ADD_POST_REQUEST,
});

export const addPostSuccess = (post) => ({
  type: actionTypes.ADD_POST_SUCCESS,
  payload: post,
});

export const addPostError = (error) => ({
  type: actionTypes.ADD_POST_ERROR,
  payload: error,
});

export const deletePostRequest = () => ({
  type: actionTypes.DELETE_POST_REQUEST,
});

export const deletePostSuccess = (id) => ({
  type: actionTypes.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostError = (error) => ({
  type: actionTypes.DELETE_POST_ERROR,
  payload: error,
});
