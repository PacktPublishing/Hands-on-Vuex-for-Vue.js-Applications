import * as api from "../api.js";
import { mutations as listsMutations } from "./lists.module";

export const mutations = {
  SET_TOKEN: "SET_TOKEN",
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export const actions = {
  REGISTER_USER: "REGISTER_USER",
  LOGIN: "LOGIN",
  GET_USER_LISTS: "GET_USER_LISTS",
  POPULATE_LIST_BOOKS: "POPULATE_LIST_BOOKS"
};

export default {
  state: {
    token: "",
    current: null
  },

  mutations: {
    [mutations.SET_TOKEN](state, newToken) {
      state.token = newToken;
      api.setToken(newToken);
    },

    [mutations.SET_CURRENT_USER](state, newCurrentUser) {
      state.current = newCurrentUser;
    }
  },

  actions: {
    async [actions.REGISTER_USER]({ commit }, newUser) {
      const { accessToken } = await api.registerUser(newUser);
      commit(mutations.SET_TOKEN, accessToken);

      newUser.id = api.parseJWT(accessToken).sub;

      commit(mutations.SET_CURRENT_USER, newUser);
    },

    async [actions.LOGIN]({ commit, dispatch }, credentials) {
      const { accessToken } = await api.login(credentials);
      commit(mutations.SET_TOKEN, accessToken);

      const userId = api.parseJWT(accessToken).sub;
      const userDetails = await api.getUser(userId);
      userDetails.lists = [];
      commit(mutations.SET_CURRENT_USER, userDetails);

      await dispatch(actions.GET_USER_LISTS);
    },

    async [actions.GET_USER_LISTS]({ commit, dispatch, state }) {
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

      lists.forEach(list => (list.books = []));
      commit(`lists/${listsMutations.SET_LISTS}`, lists, { root: true });

      await dispatch(actions.POPULATE_LIST_BOOKS);
    },

    [actions.POPULATE_LIST_BOOKS]({ commit, state, rootState }) {
      state.current.lists.forEach(list => {
        list.bookIds.forEach(bookId => {
          const book = rootState.books.find(
            maybeBook => maybeBook.id === bookId
          );
          commit(
            `lists/${listsMutations.ADD_BOOK_TO_LIST}`,
            { list, book },
            { root: true }
          );
        });
      });
    }
  }
};
