export const mutations = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_USER_NICKNAME: "SET_USER_NICKNAME"
};

export default {
  namespaced: true,

  state: {
    userName: "John Doe",
    userNickname: "j.doe"
  },

  mutations: {
    [mutations.SET_USER_NAME](state, newName) {
      state.userName = newName;
    },

    [mutations.SET_USER_NICKNAME](state, newNickname) {
      state.userNickname = newNickname;
    }
  }
};
