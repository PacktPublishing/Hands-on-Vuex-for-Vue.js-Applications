import * as types from "./mutation-types";
import * as api from "../api.js";

export default {
  async loadBooks({ commit }) {
    const books = await api.getBooks();
    commit(types.SET_BOOKS, books);
  },

  async registerUser({ commit }, newUser) {
    const { accessToken } = await api.registerUser(newUser);
    commit(types.SET_TOKEN, accessToken);

    newUser.id = api.parseJWT(accessToken).sub;
    newUser.lists = [];

    commit(types.SET_CURRENT_USER, newUser);
  },

  async login({ commit, dispatch }, credentials) {
    const { accessToken } = await api.login(credentials);
    commit(types.SET_TOKEN, accessToken);

    const userId = api.parseJWT(accessToken).sub;
    const userDetails = await api.getUser(userId);
    userDetails.lists = [];
    commit(types.SET_CURRENT_USER, userDetails);

    await dispatch("getUserLists");
  },

  async getUserLists({ commit, dispatch, state }) {
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
    commit(types.SET_LISTS, lists);

    await dispatch("populateListBooks");
  },

  populateListBooks({ commit, state }) {
    state.currentUser.lists.forEach(list => {
      list.bookIds.forEach(bookId => {
        const book = state.books.find(maybeBook => maybeBook.id === bookId);
        commit(types.ADD_BOOK_TO_LIST, { list, book });
      });
    });
  },

  async createList({ commit, state }, newList) {
    newList.bookIds = [];
    newList.userId = state.currentUser.id;

    const { id } = await api.createList(newList);
    newList.books = [];
    newList.id = id;

    commit(types.CREATE_LIST, newList);
  },

  async addBookToList({ commit }, { book, list }) {
    commit(types.ADD_BOOK_TO_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.books.map(book => book.id)
    });
  },

  async removeBookFromList({ commit }, { book, list }) {
    commit(types.REMOVE_BOOK_FROM_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.books.map(book => book.id)
    });
  }
};
