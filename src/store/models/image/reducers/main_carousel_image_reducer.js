import * as actionTypes from "../action-types/main_carousel_image_action_types";

const initialState = {
  mainImages: [],
};

const mainImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MAIN_CAROUSEL_IMAGES_SUCCESS:
      return {
        ...state,
        mainImages: action.payload,
      };
    default:
      return state;
  }
};

export default mainImagesReducer;
