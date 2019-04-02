export const types = {
  SET_BOOKS: "SET_BOOKS",
  SET_LISTS: "SET_LISTS",
  CREATE_LIST: "CREATE_LIST",
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  [types.SET_BOOKS](state, books) {
    state.books = books;
  },

  [types.SET_LISTS](state, lists) {
    state.user.current.lists = lists;
  },

  [types.CREATE_LIST](state, newList) {
    state.user.current.lists.push(newList);
  },

  [types.ADD_BOOK_TO_LIST](state, { book, list }) {
    list.books.push(book);
  },

  [types.REMOVE_BOOK_FROM_LIST](state, { book, list }) {
    const index = list.books.indexOf(book);
    list.books.splice(index, 1);
  }
};
