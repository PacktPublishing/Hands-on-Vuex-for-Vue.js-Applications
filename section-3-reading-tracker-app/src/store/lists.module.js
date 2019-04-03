import * as api from "../api.js";

export const mutations = {
  SET_LISTS: "SET_LISTS",
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export const actions = {
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  namespaced: true,

  state: {
    lists: []
  },

  mutations: {
    [mutations.SET_LISTS](state, lists) {
      state.lists = lists;
    },

    [mutations.CREATE_LIST](state, newList) {
      state.lists.push(newList);
    },

    [mutations.ADD_BOOK_TO_LIST](state, { book, list }) {
      list.books.push(book);
    },

    [mutations.REMOVE_BOOK_FROM_LIST](state, { book, list }) {
      const index = list.books.indexOf(book);
      list.books.splice(index, 1);
    }
  },

  actions: {
    async [actions.CREATE_LIST]({ commit, rootState }, newList) {
      newList.bookIds = [];
      newList.userId = rootState.user.current.id;

      const { id } = await api.createList(newList);
      newList.books = [];
      newList.id = id;

      commit(mutations.CREATE_LIST, newList);
    },

    async [actions.ADD_BOOK_TO_LIST]({ commit }, { book, list }) {
      commit(mutations.ADD_BOOK_TO_LIST, { book, list });
      await api.updateList(list.id, {
        bookIds: list.books.map(book => book.id)
      });
    },

    async [actions.REMOVE_BOOK_FROM_LIST]({ commit }, { book, list }) {
      commit(mutations.REMOVE_BOOK_FROM_LIST, { book, list });
      await api.updateList(list.id, {
        bookIds: list.books.map(book => book.id)
      });
    }
  },

  getters: {
    byId(state) {
      return id => state.lists.find(list => list.id === parseInt(id));
    },

    forBook(state) {
      return book => state.lists.filter(list => list.books.indexOf(book) >= 0);
    }
  }
};
