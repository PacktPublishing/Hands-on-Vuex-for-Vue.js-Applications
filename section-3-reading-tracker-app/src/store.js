import Vue from "vue";
import Vuex from "vuex";

import books from "./data/books.json";
import lists from "./data/lists.json";

Vue.use(Vuex);

let nextId = 200;
export default new Vuex.Store({
  strict: process.env.NODE_ENV === "production",

  state: {
    books: books, // array of { id, title, description, author, lists (array of ids) }

    lists: lists, // array of { id, name, description }

    users: []
  },

  mutations: {},

  actions: {}
});
