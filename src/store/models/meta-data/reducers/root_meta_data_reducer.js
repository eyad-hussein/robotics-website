import { combineReducers } from "redux";
import metaDataReducer from "./meta_data_reducer";
import mainMetaDataReducer from "./main_meta_data_reducer";

const rootMetaDataReducer = combineReducers({
  metaData: metaDataReducer,
  mainMetaData: mainMetaDataReducer,
});

export default rootMetaDataReducer;
