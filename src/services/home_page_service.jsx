import HomePageRepository from "../repositories/home_page_repository";

const HomePageService = {
  sortHomePagePosts: (posts) => {
    return posts.sort((a, b) => a.order - b.order);
  },
};

export default HomePageService;
