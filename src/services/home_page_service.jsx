import HomePageRepository from "../repositories/home_page_repository";
import {
  getRequest,
  getError,
  getSuccess,
} from "../store/models/shared/actions/shared_actions";
import { getMainPostsSuccess } from "../store/models/post/actions/main_post_actions";
const HomePageService = {
  getMainPosts: function () {
    return async (dispatch) => {
      dispatch(getRequest());

      try {
        const response = await HomePageRepository.getHomePagePosts();
        dispatch(getMainPostsSuccess(this._sortHomePagePosts(response)));
        dispatch(getSuccess());
      } catch (error) {
        dispatch(getError(error));
      }
    };
  },
  _sortHomePagePosts: (posts) => {
    return posts.sort((a, b) => a.order - b.order);
  },
};

export default HomePageService;
