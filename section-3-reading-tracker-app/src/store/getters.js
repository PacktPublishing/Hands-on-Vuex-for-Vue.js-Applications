export default {
  listById(state) {
    return id => state.currentUser.lists.find(list => list.id === parseInt(id));
  },

  listsForBook(state) {
    return book =>
      state.currentUser.lists.filter(list => list.books.indexOf(book) >= 0);
  }
};
