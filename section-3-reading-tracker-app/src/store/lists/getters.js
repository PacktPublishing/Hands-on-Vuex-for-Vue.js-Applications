export default {
  byId(state) {
    return id => state.lists.find(list => list.id === parseInt(id));
  },

  forBook(state) {
    return book => state.lists.filter(list => list.books.indexOf(book) >= 0);
  }
};
