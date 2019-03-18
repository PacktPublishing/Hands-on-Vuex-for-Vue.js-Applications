import Vue from "vue";
import Vuex from "vuex";

function asyncTimeout(resolveWith, timeout = 500) {
  return new Promise(resolve =>
    setTimeout(() => resolve(resolveWith), timeout)
  );
}

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {},

  mutations: {},

  actions: {}
});
