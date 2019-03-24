import { setToken } from "../api.js";

export const types = {
  SET_BOOKS: "SET_BOOKS",
  SET_LISTS: "SET_LISTS",
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST",
  SET_TOKEN: "SET_TOKEN",
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export default {
  [types.SET_BOOKS](state, books) {
    state.books = books;
  },

  [types.SET_LISTS](state, lists) {
    state.currentUser.lists = lists;
  },

  [types.CREATE_LIST](state, newList) {
    state.currentUser.lists.push(newList);
  },

  [types.ADD_BOOK_TO_LIST](state, { book, list }) {
    list.books.push(book);
  },

  [types.REMOVE_BOOK_FROM_LIST](state, { book, list }) {
    const index = list.books.indexOf(book);
    list.books.splice(index, 1);
  },

  [types.SET_TOKEN](state, newToken) {
    state.token = newToken;
    setToken(newToken);
  },

  [types.SET_CURRENT_USER](state, newCurrentUser) {
    state.currentUser = newCurrentUser;
  }
};
