// import {
//   GET_POSTS_REQUEST,
//   GET_POSTS_SUCCESS,
//   GET_POSTS_ERROR,
//   ADD_POST_REQUEST,
//   ADD_POST_SUCCESS,
//   ADD_POST_ERROR,
//   DELETE_POST_REQUEST,
//   DELETE_POST_SUCCESS,
//   DELETE_POST_ERROR,
// } from "./action-types/post_action_types";
import {
  GET_MAIN_CAROUSEL_IMAGES_REQUEST,
  GET_MAIN_CAROUSEL_IMAGES_SUCCESS,
  GET_MAIN_CAROUSEL_IMAGES_ERROR,
  ADD_MAIN_CAROUSEL_IMAGE_REQUEST,
  ADD_MAIN_CAROUSEL_IMAGE_SUCCESS,
  ADD_MAIN_CAROUSEL_IMAGE_ERROR,
  DELETE_MAIN_CAROUSEL_IMAGE_REQUEST,
  DELETE_MAIN_CAROUSEL_IMAGE_SUCCESS,
  DELETE_MAIN_CAROUSEL_IMAGE_ERROR,
} from "./action-types/main_carousel_image_action_types";

const initialState = {
  image: "image",
  loading: false,
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_POSTS_REQUEST:
    // case ADD_POST_REQUEST:
    // case DELETE_POST_REQUEST:
    case GET_MAIN_CAROUSEL_IMAGES_REQUEST:
    case ADD_MAIN_CAROUSEL_IMAGE_REQUEST:
    case DELETE_MAIN_CAROUSEL_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    // case GET_POSTS_SUCCESS:
    case GET_MAIN_CAROUSEL_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    // case ADD_POST_SUCCESS:
    case ADD_MAIN_CAROUSEL_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    // case DELETE_POST_SUCCESS:
    case DELETE_MAIN_CAROUSEL_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    // case GET_POSTS_ERROR:
    // case ADD_POST_ERROR:
    // case DELETE_POST_ERROR:
    case GET_MAIN_CAROUSEL_IMAGES_ERROR:
    case ADD_MAIN_CAROUSEL_IMAGE_ERROR:
    case DELETE_MAIN_CAROUSEL_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
