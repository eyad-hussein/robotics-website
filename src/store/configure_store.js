import { configureStore } from "@reduxjs/toolkit";
import rootPostReducer from "./models/post/reducers/root_post_reducer";
import sharedReducer from "./models/shared/reducers/shared_reducer";

// const rootReducer = combineReducers({
//   posts: postReducer,
// });

const store = configureStore({
  reducer: {
    post: rootPostReducer,
    shared: sharedReducer,
  },
});

export default store;
