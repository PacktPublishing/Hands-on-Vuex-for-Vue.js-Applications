import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const TEMP_USER_ID = -1;
let nextId = 200;
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books: [], // Array of { id, title, author, pageCount, publishedDate }
    currentUser: {
      id: TEMP_USER_ID,
      lists: []
    }
  },

  mutations: {
    CREATE_LIST(state, newList) {
      newList.id = nextId++;
      newList.books = [];
      state.currentUser.lists.push(newList);
    },

    ADD_BOOK_TO_LIST(state, { book, list }) {
      list.books.push(book);
    },

    REMOVE_BOOK_FROM_LIST(state, { book, list }) {
      const index = list.books.indexOf(book);
      list.books.splice(index, 1);
    },

    ADD_USER(state, newUser) {
      state.users.push(newUser);
    },

    SET_CURRENT_USER(state, { id }) {
      state.currentUser = state.users.find(user => user.id === id);
    }
  },

  actions: {
    addUser({ state, getters, commit }, newUser) {
      newUser = Object.assign(newUser, {
        id: nextId++,
        lists: getters.isLoggedIn ? [] : state.currentUser.lists, // If using temp user, transfer lists over
        dateAdded: new Date()
      });

      commit("ADD_USER", newUser);
      commit("SET_CURRENT_USER", newUser);
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
