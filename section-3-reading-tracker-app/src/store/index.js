import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";

import { Book, List } from "./models";
import userModule from "./user";
import listsModule from "./lists";
import actions from "./actions";

const database = new VuexORM.Database();
database.register(Book);
database.register(List, listsModule);

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {},
  mutations: {},
  actions,
  modules: {
    user: userModule
  },
  plugins: [VuexORM.install(database)]
});
