export const types = {
  ADD_BOOK_TO_LIST: "ADD_BOOK_TO_LIST",
  REMOVE_BOOK_FROM_LIST: "REMOVE_BOOK_FROM_LIST"
};

export default {
  [types.ADD_BOOK_TO_LIST](state, { book, list }) {
    list.bookIds.push(book.id);
  },

  [types.REMOVE_BOOK_FROM_LIST](state, { book, list }) {
    const index = list.bookIds.indexOf(book.id);
    list.bookIds.splice(index, 1);
  }
};
