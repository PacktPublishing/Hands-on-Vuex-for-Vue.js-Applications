import store from "@/store";
import mockData from "../mockData";
import * as api from "@/api.js";
jest.mock("@/api");
import { resetState } from "./helpers";

import { types as mutations } from "@/store/lists/mutations";
import { types as actions } from "@/store/lists/actions";
import actionImpls from "@/store/lists/actions";

describe("Mutations", () => {
  beforeEach(resetState);

  it("Should set lists", () => {
    store.commit(`lists/${mutations.SET_LISTS}`, [mockData.TEST_LIST]);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toEqual(mockData.TEST_LIST);
  });

  it("Should create list", () => {
    store.commit(`lists/${mutations.CREATE_LIST}`, mockData.TEST_LIST);

    expect(store.state.lists.lists.length).toBe(1);
    expect(store.state.lists.lists[0]).toEqual(mockData.TEST_LIST);
  });

  it("Should add book to list", () => {
    store.commit(`lists/${mutations.CREATE_LIST}`, mockData.TEST_LIST);

    store.commit(`lists/${mutations.ADD_BOOK_TO_LIST}`, {
      book: mockData.BOOKS[0],
      list: store.state.lists.lists[0]
    });

    expect(store.state.lists.lists[0].books.length).toBe(1);
    expect(store.state.lists.lists[0].books[0]).toEqual(mockData.BOOKS[0]);
  });

  it("Should remove book from list", () => {
    store.commit(`lists/${mutations.CREATE_LIST}`, mockData.TEST_LIST);
    store.commit(`lists/${mutations.ADD_BOOK_TO_LIST}`, {
      book: mockData.BOOKS[0],
      list: store.state.lists.lists[0]
    });

    store.commit(`lists/${mutations.REMOVE_BOOK_FROM_LIST}`, {
      book: mockData.BOOKS[0],
      list: store.state.lists.lists[0]
    });

    expect(store.state.lists.lists[0].books.length).toBe(0);
  });
});

describe.only("Actions", () => {
  it("Should create list", async () => {
    api.createList.mockClear();
    const commit = jest.fn();

    await actionImpls[actions.CREATE_LIST](
      {
        commit,
        rootState: {
          user: {
            current: mockData.SERVER_USER
          }
        }
      },
      mockData.TEST_LIST
    );
    expect(commit).lastCalledWith(mutations.CREATE_LIST, expect.anything());

    expect(api.createList).toHaveBeenCalled();
  });

  it("Should add book to list", async () => {
    api.updateList.mockClear();
    const commit = jest.fn();

    await actionImpls[actions.ADD_BOOK_TO_LIST](
      { commit },
      {
        book: mockData.BOOKS[0],
        list: mockData.TEST_LIST
      }
    );

    expect(commit).lastCalledWith(
      mutations.ADD_BOOK_TO_LIST,
      expect.anything()
    );
    expect(api.updateList).toHaveBeenCalled();
  });

  it("Should remove book from list", async () => {
    api.updateList.mockClear();
    const commit = jest.fn();

    await actionImpls[actions.REMOVE_BOOK_FROM_LIST](
      { commit },
      {
        book: mockData.BOOKS[0],
        list: mockData.TEST_LIST
      }
    );

    expect(commit).lastCalledWith(
      mutations.REMOVE_BOOK_FROM_LIST,
      expect.anything()
    );
    expect(api.updateList).toHaveBeenCalled();
  });
});
