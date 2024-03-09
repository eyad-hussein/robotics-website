import { getRequest, getError } from "../../shared/actions/shared_actions";

import * as actionTypes from "../action-types/main_carousel_image_action_types";
import HomePageRepository from "../../../../repositories/home_page_repository";

export const getMainCarouselImagesRequest = () => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_REQUEST,
});

export const getMainCarouselImagesSuccess = (posts) => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_SUCCESS,
  payload: posts,
});

export const getMainCarouselImagesError = (error) => ({
  type: actionTypes.GET_MAIN_CAROUSEL_IMAGES_ERROR,
  payload: error,
});

export const getMainCarouselImages = () => {
  return async (dispatch) => {
    dispatch(getRequest());

    try {
      const response = await HomePageRepository.getHomePageCarouselImages();
      dispatch(getMainCarouselImagesSuccess(response));
    } catch (error) {
      dispatch(getError(error));
    }
  };
};

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
