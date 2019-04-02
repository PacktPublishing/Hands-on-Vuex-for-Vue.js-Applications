import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mutations = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_USER_NICKNAME: "SET_USER_NICKNAME",
  ADD_EMAIL: "ADD_EMAIL",
  ADD_CALENDAR_EVENT: "ADD_CALENDAR_EVENT"
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  state: {
    userName: "John Doe",
    userNickname: "j.doe",
    userEmails: [
      {
        subject: "hi",
        content: "Hey John, how's it going?"
      }
    ],
    userCalendar: [
      {
        date: "2025-01-01",
        title: "New Year's 2025 🎉"
      }
    ]
  },

  mutations: {
    [mutations.SET_USER_NAME](state, newName) {
      state.userName = newName;
    },

    [mutations.SET_USER_NICKNAME](state, newNickname) {
      state.userNickname = newNickname;
    },

    [mutations.ADD_EMAIL](state, email) {
      state.userEmails.push(email);
    },

    [mutations.ADD_CALENDAR_EVENT](state, email) {
      state.userEmails.push(email);
    }
  }
});
