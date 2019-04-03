export const types = {
  SET_LISTS: "SET_LISTS",
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  [types.SET_LISTS](state, lists) {
    state.lists = lists;
  },

  [types.CREATE_LIST](state, newList) {
    state.lists.push(newList);
  },

  [types.ADD_BOOK_TO_LIST](state, { book, list }) {
    list.books.push(book);
  },

  [types.REMOVE_BOOK_FROM_LIST](state, { book, list }) {
    const index = list.books.indexOf(book);
    list.books.splice(index, 1);
  }
};
