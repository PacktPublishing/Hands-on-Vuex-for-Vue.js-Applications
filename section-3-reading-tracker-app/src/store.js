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
    },

    SET_CURRENT_USER(state, newCurrentUser) {
      state.currentUser = newCurrentUser;
    }
  },

  actions: {
    async registerUser({ commit }, newUser) {
      newUser = Object.assign(newUser, {
        listIds: [],
        dateAdded: new Date()
      });

      const { accessToken } = api.registerUser(newUser);
      commit("SET_TOKEN", accessToken);

      newUser.id = api.parseJWT(accessToken).sub;
      delete newUser.listIds;
      newUser.lists = [];

      commit("SET_CURRENT_USER", newUser);
    },

    async login({ commit }, credentials) {}
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
