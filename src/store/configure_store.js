import { configureStore } from "@reduxjs/toolkit";
import rootPostReducer from "./models/post/reducers/root_post_reducer";
import sharedReducer from "./models/shared/reducers/shared_reducer";
import rootMetaDataReducer from "./models/meta-data/reducers/root_meta_data_reducer";
import rootImageReducer from "./models/image/reducers/root_image_reducer";

// const rootReducer = combineReducers({
//   posts: postReducer,
// });

const store = configureStore({
  reducer: {
    shared: sharedReducer,
    post: rootPostReducer,
    metaData: rootMetaDataReducer,
    image: rootImageReducer,
  },
});

export default store;
