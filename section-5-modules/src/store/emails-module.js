export const mutations = {
  ADD_EMAIL: "ADD_EMAIL"
};

export default {
  state: {
    userEmails: [
      {
        subject: "hi",
        content: "Hey John, how's it going?"
      }
    ]
  },

  mutations: {
    [mutations.ADD_EMAIL](state, email) {
      state.userEmails.push(email);
    }
  }
};
