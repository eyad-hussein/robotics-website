import HomePageRepository from "../repositories/home_page_repository";
import {
  getRequest,
  getError,
  getSuccess,
} from "../store/models/shared/actions/shared_actions";
import { getMainPostsSuccess } from "../store/models/post/actions/main_post_actions";
import { getMainMetaDataSuccess } from "../store/models/meta-data/actions/main_meta_data_actions";
import { getMainCarouselImagesSuccess } from "../store/models/image/actions/main_carousel_image_actions";
const HomePageService = {
  getMainPosts: function () {
    return async (dispatch) => {
      dispatch(getRequest());

      try {
        const response = await HomePageRepository.getHomePagePosts();
        dispatch(getMainPostsSuccess(this._sortComponents(response)));
        dispatch(getSuccess());
      } catch (error) {
        dispatch(getError(error));
      }
    };
  },
  getMetaData: () => {
    return async (dispatch) => {
      dispatch(getRequest());

      try {
        const response = await HomePageRepository.getHomePageMetaData();
        dispatch(getMainMetaDataSuccess(response));
        dispatch(getSuccess());
      } catch (error) {
        dispatch(getError(error));
      }
    };
  },
  getCarouselImages: function () {
    return async (dispatch) => {
      dispatch(getRequest());

      try {
        const response = await HomePageRepository.getHomePageCarouselImages();
        dispatch(getMainCarouselImagesSuccess(this._sortComponents(response)));
        dispatch(getSuccess());
      } catch (error) {
        dispatch(getError(error));
      }
    };
  },
  _sortComponents: (components) => {
    return components.sort((a, b) => a.order - b.order);
  },
};

export default HomePageService;
