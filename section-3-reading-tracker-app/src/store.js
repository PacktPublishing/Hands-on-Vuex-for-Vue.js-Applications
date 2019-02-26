import Vue from "vue";
import Vuex from "vuex";

import books from "./books.json";

Vue.use(Vuex);

let nextId = 0;
export default new Vuex.Store({
  strict: process.env.NODE_ENV === "production",

  state: {
    books: books, // array of { id, title, description, author, lists (string array) }

    lists: [], // array of { id, name, description }

    users: []
  },

  mutations: {},

  actions: {}
});
