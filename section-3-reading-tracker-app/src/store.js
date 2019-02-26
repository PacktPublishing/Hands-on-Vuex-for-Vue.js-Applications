import Vue from "vue";
import Vuex from "vuex";

import books from "./books.json";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "production",

  state: {
    books: books, // array of { title, description, author, lists (string array) }

    lists: [], // array of strings

    users: []
  },

  mutations: {},

  actions: {}
});
