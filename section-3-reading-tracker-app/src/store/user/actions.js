import * as api from "../../api.js";
import { types as mutations } from "./mutations";

export const types = {
  REGISTER_USER: "REGISTER_USER",
  LOGIN: "LOGIN",
  GET_USER_LISTS: "GET_USER_LISTS"
};

export default {
  async [types.REGISTER_USER]({ commit, dispatch }, newUser) {
    await dispatch("entities/lists/delete");

    const { accessToken } = await api.registerUser(newUser);
    commit(mutations.SET_TOKEN, accessToken);

    newUser.id = api.parseJWT(accessToken).sub;

    commit(mutations.SET_CURRENT_USER, newUser);
  },

  async [types.LOGIN]({ commit, dispatch }, credentials) {
    await dispatch("entities/lists/delete");

    const { accessToken } = await api.login(credentials);
    commit(mutations.SET_TOKEN, accessToken);

    const userId = api.parseJWT(accessToken).sub;
    const userDetails = await api.getUser(userId);
    commit(mutations.SET_CURRENT_USER, userDetails);

    await dispatch(types.GET_USER_LISTS);
  },

  async [types.GET_USER_LISTS]({ state, dispatch }) {
    let lists;
    try {
      lists = await api.getLists(state.current.id);
    } catch (e) {
      // no lists on server
      if (e.response.status === 403) {
        lists = [];
      } else {
        throw e;
      }
    }

    dispatch("entities/lists/create", { data: lists }, { root: true });
  }
};
