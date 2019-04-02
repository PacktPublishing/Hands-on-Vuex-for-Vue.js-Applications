export default {
  listById(state) {
    return id => state.user.current.lists.find(list => list.id === parseInt(id));
  },

  listsForBook(state) {
    return book =>
      state.user.current.lists.filter(list => list.books.indexOf(book) >= 0);
  }
};
