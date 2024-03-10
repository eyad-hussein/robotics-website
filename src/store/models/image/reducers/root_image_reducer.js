import { combineReducers } from "redux";
import imageReducer from "./image_reducer";
import mainImagesReducer from "./main_carousel_image_reducer";

const rootImageReducer = combineReducers({
  image: imageReducer,
  mainImages: mainImagesReducer,
});

export default rootImageReducer;
