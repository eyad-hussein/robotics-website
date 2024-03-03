import { api } from "./http_request";

const HomePageRepository = {
  getHomePageCarouselImages: async () => {
    const response = await api.get("main/carousel-images");
    const result = response.data;
    return result;
  },
  getHomePagePosts: async () => {
    const response = await api.get("main/posts");
    const result = response.data;
    return result;
  },
  getHomePageMetaData: async () => {
    const response = await api.get("main/meta-data");
    const result = response.data;
    return result;
  },
};

export default HomePageRepository;
