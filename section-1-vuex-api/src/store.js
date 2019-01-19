import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    count: 0,
    trivia: ""
  },

  mutations: {
    ADD_N(state, n) {
      state.count += n;
    },

    SET_TRIVIA(state, trivia) {
      state.trivia = trivia;
    }
  },

  actions: {
    addToCount({ commit }, n) {
      commit("SET_TRIVIA", "");
      commit("ADD_N", n);
    },

    updateTrivia({ commit, state }) {
      fetch(`http://numbersapi.com/${state.count}`)
        .then(res => res.text())
        .then(trivia => commit("SET_TRIVIA", trivia));
    }
  },

  getters: {
    doubledCount(state) {
      return state.count * 2;
    },

    countPlusN(state) {
      return n => state.count + n;
    }
  }
});
