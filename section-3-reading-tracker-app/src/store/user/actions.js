import * as api from "../../api.js";
import { types as mutations } from "./mutations";
import { types as listsMutations } from "../lists/mutations";

export const types = {
  REGISTER_USER: "REGISTER_USER",
  LOGIN: "LOGIN",
  GET_USER_LISTS: "GET_USER_LISTS",
  POPULATE_LIST_BOOKS: "POPULATE_LIST_BOOKS"
};

export default {
  async [types.REGISTER_USER]({ commit }, newUser) {
    const { accessToken } = await api.registerUser(newUser);
    commit(mutations.SET_TOKEN, accessToken);

    newUser.id = api.parseJWT(accessToken).sub;

    commit(mutations.SET_CURRENT_USER, newUser);
  },

  async [types.LOGIN]({ commit, dispatch }, credentials) {
    const { accessToken } = await api.login(credentials);
    commit(mutations.SET_TOKEN, accessToken);

    const userId = api.parseJWT(accessToken).sub;
    const userDetails = await api.getUser(userId);
    commit(mutations.SET_CURRENT_USER, userDetails);

    await dispatch(types.GET_USER_LISTS);
  },

  async [types.GET_USER_LISTS]({ commit, dispatch, state }) {
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

    await dispatch(types.POPULATE_LIST_BOOKS);
  },

  [types.POPULATE_LIST_BOOKS]({ commit, rootState }) {
    rootState.lists.lists.forEach(list => {
      list.bookIds.forEach(bookId => {
        const book = rootState.books.find(maybeBook => maybeBook.id === bookId);
        commit(
          `lists/${listsMutations.ADD_BOOK_TO_LIST}`,
          { list, book },
          { root: true }
        );
      });
    });
  }
};
