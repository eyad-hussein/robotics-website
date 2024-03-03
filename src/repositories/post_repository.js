import { api } from "./http_request";

const PostRepository = {
  getPost: async () => {
    return await api.get("/posts");
  },
};
