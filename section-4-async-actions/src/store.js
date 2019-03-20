import Vue from "vue";
import Vuex from "vuex";
import faker from "faker";

function asyncTimeout(resolveWith, timeout = 500) {
  return new Promise(resolve =>
    setTimeout(() => resolve(resolveWith), timeout)
  );
}

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    currentUserName: "",
    currentUserPhoneNumber: ""
  },

  mutations: {
    SET_CURRENT_USER_NAME(state, newUserName) {
      state.currentUserName = newUserName;
    },

    SET_CURRENT_USER_PHONE_NUMBER(state, newUserPhoneNumber) {
      state.currentUserPhoneNumber = newUserPhoneNumber;
    }
  },

  actions: {
    updateUserName({ commit }) {
      asyncTimeout(faker.name.findName()).then(name =>
        commit("SET_CURRENT_USER_NAME", name)
      );
    },

    updateUserPhoneNumber({ commit }) {
      asyncTimeout(faker.phone.phoneNumber()).then(number =>
        commit("SET_CURRENT_USER_PHONE_NUMBER", number)
      );
    },

    getUser({ dispatch }) {
      return Promise.all([
        dispatch("updateUserName"),
        dispatch("updateUserPhoneNumber")
      ]);
    }
  }
});
