import * as api from "../../api.js";
import { types as mutations } from "./mutations";

export const types = {
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  async [types.CREATE_LIST]({ dispatch, rootState }, newList) {
    newList.bookIds = [];
    newList.userId = rootState.user.current.id;

    const { id } = await api.createList(newList);
    newList.id = id;

    dispatch("insert", { data: newList });
  },

  async [types.ADD_BOOK_TO_LIST]({ commit }, { book, list }) {
    commit(mutations.ADD_BOOK_TO_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.bookIds
    });
  },

  async [types.REMOVE_BOOK_FROM_LIST]({ commit }, { book, list }) {
    commit(mutations.REMOVE_BOOK_FROM_LIST, { book, list });
    await api.updateList(list.id, {
      bookIds: list.bookIds
    });
  }
};
