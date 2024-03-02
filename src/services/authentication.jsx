import TokenHandler from "./token_handler";

const AuthenticationService = {
  register: async (data) => {
    // try {
    //   const response = await api.post("/register", data);
    //   const result = response.data;
    //   TokenHandler.saveToken("authToken", result.token);
    //   //   add verification logic before saving token
    // } catch (error) {
    //   console.error("Error registering user:", error);
    //   throw error;
    // }
  },

  login: async (data) => {
    // try {
    //   const response = await api.post("/login", data);
    //   const result = response.data;
    //   TokenHandler.saveToken("authToken", result.token);
    //   return result.user;
    // } catch (error) {
    //   console.error("Error logging in user:", error);
    //   throw error;
    // }
  },
};

export default AuthenticationService;
