import Vue from "vue";
import Vuex from "vuex";
import pathify, { make } from "vuex-pathify";

Vue.use(Vuex);

const state = {
  value: 10,
  nested: {
    property: {
      test: "it works!"
    }
  }
};

const testModuleState = {
  message: "Modules work too!",
  nested: {
    message: "Module with nesting"
  }
};

export default new Vuex.Store({
  state,
  mutations: make.mutations(state),
  modules: {
    test: {
      namespaced: true,
      state: testModuleState,
      mutations: make.mutations(testModuleState)
    }
  },
  plugins: [pathify.plugin]
});
