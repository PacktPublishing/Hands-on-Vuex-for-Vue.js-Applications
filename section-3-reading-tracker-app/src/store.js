import Vue from "vue";
import Vuex from "vuex";

import books from "./data/books.json";
import lists from "./data/lists.json";

Vue.use(Vuex);

const TEMP_USER_ID = -1;
let nextId = 200;
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books, // Array of { id, title, author, pageCount, publishedDate }
    users: [], // Array of { id, name, bio, lists (array of { id, name, description, books }) }
    currentUser: {
      id: TEMP_USER_ID,
      lists: lists.map(list => Object.assign(list, { books: [] }))
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
      newUser = Object.assign(newUser, {
        id: nextId++,
        lists:
          state.currentUser.id === TEMP_USER_ID ? state.currentUser.lists : [], // Lets users create a user after adding some lists
        dateAdded: new Date()
      });
      state.users.push(newUser);
      state.currentUser = newUser;
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
    }
  }
});
