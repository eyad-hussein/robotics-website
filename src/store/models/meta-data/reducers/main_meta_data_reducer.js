import * as actionTypes from "../action-types/main_meta_data_action_types";

const initialState = {
  mainMetaData: {},
};

const mainMetaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MAIN_META_DATA_SUCCESS:
      return {
        ...state,
        metaData: action.payload,
      };
    default:
      return state;
  }
};

export default mainMetaDataReducer;
