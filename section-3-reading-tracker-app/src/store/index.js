import Vue from "vue";
import Vuex from "vuex";

import userModule from "./user.module";
import listsModule from "./lists.module";
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
