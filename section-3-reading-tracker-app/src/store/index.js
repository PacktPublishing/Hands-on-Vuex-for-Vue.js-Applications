import Vue from "vue";
import Vuex from "vuex";

import userModule from "./user";
import listsModule from "./lists";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    books: [] // Array of { id, title, author, pageCount, publishedDate }
  },
  mutations,
  actions,

  modules: {
    user: userModule,
    lists: listsModule
  }
});
