import { api } from "./http_request.jsx";

const HomePageRepository = {
  async getHomePageCarouselImages() {
    const response = await api.get("main/carousel-images");
    const result = response.data;
    return result;
  },
};

export default HomePageRepository;
