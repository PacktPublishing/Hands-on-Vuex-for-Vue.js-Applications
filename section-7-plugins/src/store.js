import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 10
  },

  mutations: {
    setValue(state, newVal) {
      state.value = newVal;
    }
  },

  actions: {
    fetchValue({ commit }) {
      return new Promise(resolve =>
        setTimeout(() => {
          const newVal = Math.floor(Math.random() * 1000);
          commit("setValue", newVal);
          resolve(newVal);
        }, 1000)
      );
    }
  }
});
