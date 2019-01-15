import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    count: 0
  },

  mutations: {
    INCREMENT(state) {
      state.count++;
    },

    ADD(state, n) {
      state.count += n;
    }
  }
});
