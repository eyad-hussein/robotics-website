import { combineReducers } from "redux";
import postReducer from "./post_reducer";
import mainPostReducer from "./main_post_reducer";

const rootPostReducer = combineReducers({
  posts: postReducer,
  mainPosts: mainPostReducer,
});

export default rootPostReducer;
