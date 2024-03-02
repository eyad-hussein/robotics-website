import HomePageRepository from "../repositories/home_page_repository";

const HomePageService = {
  async getHomePageCarouselImages() {
    const result = await HomePageRepository.getHomePageCarouselImages();
    return result
      .sort((a, b) => a.order - b.order)
      .map((image) => ({
        url: process.env.PRE_LINK + image.image_url,
        alt: image.alt,
      }));
  },
};

export default HomePageService;
