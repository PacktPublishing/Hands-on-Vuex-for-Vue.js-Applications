import store from "@/store";
import { types as mutations } from "@/store/lists/mutations";

const TEST_LIST = {
  id: 0,
  userId: 1,
  name: "Cool Books",
  description: "Books I think are cool",
  books: [],
  bookIds: []
};

const TEST_BOOK = {
  id: 0,
  title: "Skellig",
  author: "David Almond",
  pageCount: 176,
  publishedDate: "1998-08-11"
};

describe("Mutations", () => {
  it("Should set lists", () => {
    store.commit(`lists/${mutations.SET_LISTS}`, [TEST_LIST]);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toBe(TEST_LIST);
  });

  it("Should create list", () => {
    store.commit(`lists/${mutations.SET_LISTS}`, []);
    store.commit(`lists/${mutations.CREATE_LIST}`, TEST_LIST);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toBe(TEST_LIST);
  });

  it("Should add book to list", () => {
    store.commit(`lists/${mutations.ADD_BOOK_TO_LIST}`, {
      book: TEST_BOOK,
      list: TEST_LIST
    });

    expect(store.state.lists.lists[0].books.length).toBe(1);
    expect(store.state.lists.lists[0].books[0]).toBe(TEST_BOOK);
  });

  it("Should remove book from list", () => {
    store.commit(`lists/${mutations.REMOVE_BOOK_FROM_LIST}`, {
      book: TEST_BOOK,
      list: TEST_LIST
    });
    expect(store.state.lists.lists[0].books.length).toBe(0);
  });
});
