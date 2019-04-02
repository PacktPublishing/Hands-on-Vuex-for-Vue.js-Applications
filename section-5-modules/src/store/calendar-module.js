export const mutations = {
  ADD_CALENDAR_EVENT: "ADD_CALENDAR_EVENT"
};

export default {
  state: {
    userCalendar: [
      {
        date: "2025-01-01",
        title: "New Year's 2025 🎉"
      }
    ]
  },

  mutations: {
    [mutations.ADD_CALENDAR_EVENT](state, email) {
      state.userEmails.push(email);
    }
  }
};
