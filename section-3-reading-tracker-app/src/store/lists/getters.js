export default {
  forBook(state, getters) {
    return ({ id }) =>
      getters["query"]()
        .where("bookIds", bookIds => bookIds.includes(id))
        .get();
  }
};
