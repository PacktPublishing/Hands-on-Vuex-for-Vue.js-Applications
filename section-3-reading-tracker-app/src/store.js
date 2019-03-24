import Vue from "vue";
import Vuex from "vuex";
import * as api from "./api.js";

Vue.use(Vuex);

const TEMP_USER_ID = -1;
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books: [], // Array of { id, title, author, pageCount, publishedDate }
    token: "",
    currentUser: {
      id: TEMP_USER_ID,
      lists: []
    }
  },

  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },

    SET_LISTS(state, lists) {
      state.currentUser.lists = lists;
    },

    CREATE_LIST(state, newList) {
      state.currentUser.lists.push(newList);
    },

    ADD_BOOK_TO_LIST(state, { book, list }) {
      list.books.push(book);
    },

    REMOVE_BOOK_FROM_LIST(state, { book, list }) {
      const index = list.books.indexOf(book);
      list.books.splice(index, 1);
    },

    SET_TOKEN(state, newToken) {
      state.token = newToken;
      api.setToken(newToken);
    },

    SET_CURRENT_USER(state, newCurrentUser) {
      state.currentUser = newCurrentUser;
    }
  },

  actions: {
    async loadBooks({ commit }) {
      const books = await api.getBooks();
      commit("SET_BOOKS", books);
    },

    async registerUser({ commit }, newUser) {
      const { accessToken } = await api.registerUser(newUser);
      commit("SET_TOKEN", accessToken);

      newUser.id = api.parseJWT(accessToken).sub;
      newUser.lists = [];

      commit("SET_CURRENT_USER", newUser);
    },

    async login({ commit, dispatch }, credentials) {
      const { accessToken } = await api.login(credentials);
      commit("SET_TOKEN", accessToken);

      const userId = api.parseJWT(accessToken).sub;
      const userDetails = await api.getUser(userId);
      userDetails.lists = [];
      commit("SET_CURRENT_USER", userDetails);

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
      commit("SET_LISTS", lists);

      await dispatch("populateListBooks");
    },

    populateListBooks({ commit, state }) {
      state.currentUser.lists.forEach(list => {
        list.bookIds.forEach(bookId => {
          const book = state.books.find(maybeBook => maybeBook.id === bookId);
          commit("ADD_BOOK_TO_LIST", { list, book });
        });
      });
    },

    async createList({ commit, state }, newList) {
      newList.bookIds = [];
      newList.userId = state.currentUser.id;

      const { id } = await api.createList(newList);
      newList.books = [];
      newList.id = id;

      commit("CREATE_LIST", newList);
    },

    async addBookToList({ commit }, { book, list }) {
      commit("ADD_BOOK_TO_LIST", { book, list });
      await api.updateList(list.id, {
        bookIds: list.books.map(book => book.id)
      });
    },

    async removeBookFromList({ commit }, { book, list }) {
      commit("REMOVE_BOOK_FROM_LIST", { book, list });
      await api.updateList(list.id, {
        bookIds: list.books.map(book => book.id)
      });
    }
  },

  getters: {
    listById(state) {
      return id =>
        state.currentUser.lists.find(list => list.id === parseInt(id));
    },

    listsForBook(state) {
      return book =>
        state.currentUser.lists.filter(list => list.books.indexOf(book) >= 0);
    },

    isLoggedIn(state) {
      return state.currentUser.id !== TEMP_USER_ID;
    }
  }
});
