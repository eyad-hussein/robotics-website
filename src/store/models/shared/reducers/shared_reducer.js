import {
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,
} from "../action-types/shared_action_types";

const initialState = {
  loading: false,
  error: null,
};

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sharedReducer;
