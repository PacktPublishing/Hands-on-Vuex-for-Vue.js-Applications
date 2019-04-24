import * as api from "../api.js";

export const types = {
  LOAD_BOOKS: "LOAD_BOOKS"
};

export default {
  async [types.LOAD_BOOKS]({ dispatch }) {
    const books = await api.getBooks();
    dispatch("entities/books/create", {
      data: books
    });
  }
};
