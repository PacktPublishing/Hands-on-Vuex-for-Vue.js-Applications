import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function asyncTimeout(resolveWith, timeout = 500) {
  return new Promise(resolve =>
    setTimeout(() => resolve(resolveWith), timeout)
  );
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {},
  mutations: {},
  actions: {}
});
