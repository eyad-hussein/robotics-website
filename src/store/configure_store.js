import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import rootPostReducer from "./models/post/reducers/root_post_reducer";

// const rootReducer = combineReducers({
//   posts: postReducer,
// });

const store = configureStore({
  reducer: {
    post: rootPostReducer,
  },
});

export default store;
