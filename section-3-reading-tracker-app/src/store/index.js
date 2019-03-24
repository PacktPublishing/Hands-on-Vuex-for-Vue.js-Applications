import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books: [], // Array of { id, title, author, pageCount, publishedDate }
    token: "",
    currentUser: null
  },
  mutations,
  actions,
  getters
});
