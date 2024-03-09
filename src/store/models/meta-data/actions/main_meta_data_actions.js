import * as actionTypes from "../action-types/main_meta_data_action_types";

export const getMainMetaDataSuccess = (metaData) => ({
  type: actionTypes.GET_MAIN_META_DATA_SUCCESS,
  payload: metaData,
});
