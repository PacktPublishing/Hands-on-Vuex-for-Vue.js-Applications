import { types as mutations } from "./mutations";
import * as api from "../api.js";

export const types = {
  LOAD_BOOKS: "LOAD_BOOKS"
};

export default {
  async [types.LOAD_BOOKS]({ commit }) {
    const books = await api.getBooks();
    commit(mutations.SET_BOOKS, books);
  }
};
