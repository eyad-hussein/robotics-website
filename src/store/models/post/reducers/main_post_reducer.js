import {
  GET_MAIN_POSTS_REQUEST,
  GET_MAIN_POSTS_SUCCESS,
  GET_MAIN_POSTS_ERROR,
  ADD_MAIN_POST_REQUEST,
  ADD_MAIN_POST_SUCCESS,
  ADD_MAIN_POST_ERROR,
  DELETE_MAIN_POST_REQUEST,
  DELETE_MAIN_POST_SUCCESS,
  DELETE_MAIN_POST_ERROR,
} from "../action-types/main_post_action_types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const mainPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_POSTS_REQUEST:
    case ADD_MAIN_POST_REQUEST:
    case DELETE_MAIN_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MAIN_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case ADD_MAIN_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    case DELETE_MAIN_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case GET_MAIN_POSTS_ERROR:
    case ADD_MAIN_POST_ERROR:
    case DELETE_MAIN_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mainPostReducer;
