import * as actionTypes from "../action-types/main_carousel_image_action_types";

export const getMainCarouselImagesRequest = () => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_REQUEST,
});

export const getMainCarouselImagesSuccess = (images) => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_SUCCESS,
  payload: images,
});

export const getMainCarouselImagesError = (error) => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_ERROR,
  payload: error,
});

export const addMainCarouselImageRequest = () => ({
  type: actionTypes.ADD_MAIN_CAROUSEL_IMAGE_REQUEST,
});

export const addMainCarouselImageSuccess = (post) => ({
  type: actionTypes.ADD_MAIN_CAROUSEL_IMAGE_SUCCESS,
  payload: post,
});

export const addMainCarouselImageError = (error) => ({
  type: actionTypes.ADD_MAIN_CAROUSEL_IMAGE_ERROR,
  payload: error,
});

export const deleteMainCarouselImageRequest = () => ({
  type: actionTypes.DELETE_MAIN_CAROUSEL_IMAGE_REQUEST,
});

export const deleteMainCarouselImageSuccess = (id) => ({
  type: actionTypes.DELETE_MAIN_CAROUSEL_IMAGE_SUCCESS,
  payload: id,
});

export const deleteMainCarouselImageError = (error) => ({
  type: actionTypes.DELETE_MAIN_CAROUSEL_IMAGE_ERROR,
  payload: error,
});
