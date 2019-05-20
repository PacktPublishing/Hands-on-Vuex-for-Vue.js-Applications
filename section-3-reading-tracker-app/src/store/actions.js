import { types as mutations } from "./mutations";
import * as api from "../api.js";

export const types = {
  LOAD_BOOKS: "LOAD_BOOKS",
  REGISTER_USER: "REGISTER_USER",
  LOGIN: "LOGIN",
  GET_USER_LISTS: "GET_USER_LISTS",
  POPULATE_LIST_BOOKS: "POPULATE_LIST_BOOKS",
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  async [types.LOAD_BOOKS]({ commit }) {
    const books = await api.getBooks();
    commit(mutations.SET_BOOKS, books);
  },

  async [types.REGISTER_USER]({ commit }, newUser) {
    const { accessToken } = await api.registerUser(newUser);
    commit(mutations.SET_TOKEN, accessToken);

    newUser.id = api.parseJWT(accessToken).sub;
    newUser.lists = [];

    commit(mutations.SET_CURRENT_USER, newUser);
  },

  async [types.LOGIN]({ commit, dispatch }, credentials) {
    const { accessToken } = await api.login(credentials);
    commit(mutations.SET_TOKEN, accessToken);

    const userId = api.parseJWT(accessToken).sub;
    const userDetails = await api.getUser(userId);
    userDetails.lists = [];
    commit(mutations.SET_CURRENT_USER, userDetails);

    await dispatch(types.GET_USER_LISTS);
  },

  async [types.GET_USER_LISTS]({ commit, dispatch, state }) {
    let lists;
    try {
      lists = await api.getLists(state.currentUser.id);
    } catch (e) {
      // no lists on server
      if (e.response.status === 403) {
        lists = [];
      } else {
        throw e;
      }
    }

    lists.forEach(list => (list.books = []));
    commit(mutations.SET_LISTS, lists);

    await dispatch(types.POPULATE_LIST_BOOKS);
  },

  [types.POPULATE_LIST_BOOKS]({ commit, state }) {
    state.currentUser.lists.forEach(list => {
      list.bookIds.forEach(bookId => {
        const book = state.books.find(maybeBook => maybeBook.id === bookId);
        commit(mutations.ADD_BOOK_TO_LIST, { list, book });
      });
    });
  },

  async [types.CREATE_LIST]({ commit, state }, newList) {
    newList.bookIds = [];
    newList.userId = state.currentUser.id;

    const { id } = await api.createList(newList);
    newList.books = [];
    newList.id = id;

    commit(mutations.CREATE_LIST, newList);
  },

  async [types.ADD_BOOK_TO_LIST]({ commit }, { book, list }) {
    commit(mutations.ADD_BOOK_TO_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.books.map(book => book.id)
    });
  },

  async [types.REMOVE_BOOK_FROM_LIST]({ commit }, { book, list }) {
    commit(mutations.REMOVE_BOOK_FROM_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.books.map(book => book.id)
    });
  }
};
