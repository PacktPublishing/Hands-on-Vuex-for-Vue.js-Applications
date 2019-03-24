import * as types from "./mutation-types";
import { setToken } from "../api.js";

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
