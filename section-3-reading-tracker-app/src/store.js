import Vue from "vue";
import Vuex from "vuex";

import books from "./data/books.json";
import lists from "./data/lists.json";

Vue.use(Vuex);

let nextId = 200;
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    users: [], // Array of { id, name, bio, lists }

    books // Array of { id, title, author, pageCount, publishedDate, lists }
  },

  mutations: {
    CREATE_LIST(state, newList) {
      newList.id = nextId++;
      state.lists.push(newList);
    },

    ADD_BOOK_TO_LIST(state, { book, list }) {
      if (!book.lists) {
        Vue.set(book, "lists", []);
      }

      book.lists.push(list);
    },

    REMOVE_BOOK_FROM_LIST(state, { book, list }) {
      const index = book.lists.indexOf(list);
      book.lists.splice(index, 1);
    },

    ADD_USER(state, newUser) {
      state.users.push(
        Object.assign(newUser, {
          id: nextId++,
          lists: [],
          dateAdded: new Date()
        })
      );
    }
  },

  getters: {
    listById(state) {
      return id => state.lists.find(list => list.id === parseInt(id));
    },

    booksForList(state) {
      return list =>
        state.books.filter(book => book.lists && book.lists.indexOf(list) >= 0);
    }
  }
});
