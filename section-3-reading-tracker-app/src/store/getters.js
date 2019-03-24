export const types = {
  LIST_BY_ID: "LIST_BY_ID",
  LISTS_FOR_BOOK: "LISTS_FOR_BOOK"
};

export default {
  [types.LIST_BY_ID](state) {
    return id => state.currentUser.lists.find(list => list.id === parseInt(id));
  },

  [types.LISTS_FOR_BOOK](state) {
    return book =>
      state.currentUser.lists.filter(list => list.books.indexOf(book) >= 0);
  }
};
