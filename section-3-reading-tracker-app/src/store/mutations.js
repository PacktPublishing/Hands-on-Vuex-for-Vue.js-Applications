export const types = {
  SET_BOOKS: "SET_BOOKS"
};

export default {
  [types.SET_BOOKS](state, books) {
    state.books = books;
  }
};
