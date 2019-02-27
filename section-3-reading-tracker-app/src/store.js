import Vue from "vue";
import Vuex from "vuex";

import books from "./data/books.json";
import lists from "./data/lists.json";

Vue.use(Vuex);

let nextId = 200;
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books, // Array of { id, title, author, pageCount, publishedDate, lists }

    lists // Array of { id, name, description }
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
      book.lists.slice(index, 1);
    }
  }
});
