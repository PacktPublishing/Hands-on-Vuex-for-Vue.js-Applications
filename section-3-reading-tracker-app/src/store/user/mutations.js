import { setToken } from "@/api.js";

export const types = {
  SET_TOKEN: "SET_TOKEN",
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export default {
  [types.SET_TOKEN](state, newToken) {
    state.token = newToken;
    setToken(newToken);
  },

  [types.SET_CURRENT_USER](state, newCurrentUser) {
    state.current = newCurrentUser;
  }
};
