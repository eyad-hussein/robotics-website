const TokenHandler = {
  saveToken: (key, token) => {
    localStorage.setItem(key, token);
  },

  removeToken: (key) => {
    localStorage.removeItem(key);
  },

  getToken: (key) => {
    return localStorage.getItem(key);
  },
};

export default TokenHandler;
