import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    count: 0
  },

  mutations: {
    INCREMEMNT_COUNT(state) {
      state.count++;
    },

    ADD_TO_COUNT(state, n) {
      state.count += n;
    }
  }
});
