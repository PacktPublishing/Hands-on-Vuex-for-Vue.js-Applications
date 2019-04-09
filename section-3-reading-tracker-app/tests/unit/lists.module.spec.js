import store from "@/store";
import mockData from "./mockData";
import { types as mutations } from "@/store/lists/mutations";

describe("Mutations", () => {
  it("Should set lists", () => {
    store.commit(`lists/${mutations.SET_LISTS}`, [mockData.TEST_LIST]);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toBe(mockData.TEST_LIST);
  });

  it("Should create list", () => {
    store.commit(`lists/${mutations.SET_LISTS}`, []);
    store.commit(`lists/${mutations.CREATE_LIST}`, mockData.TEST_LIST);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toBe(mockData.TEST_LIST);
  });

  it("Should add book to list", () => {
    store.commit(`lists/${mutations.ADD_BOOK_TO_LIST}`, {
      book: mockData.BOOKS[0],
      list: mockData.TEST_LIST
    });

    expect(store.state.lists.lists[0].books.length).toBe(1);
    expect(store.state.lists.lists[0].books[0]).toBe(mockData.BOOKS[0]);
  });

  it("Should remove book from list", () => {
    store.commit(`lists/${mutations.REMOVE_BOOK_FROM_LIST}`, {
      book: mockData.BOOKS[0],
      list: mockData.TEST_LIST
    });
    expect(store.state.lists.lists[0].books.length).toBe(0);
  });
});
