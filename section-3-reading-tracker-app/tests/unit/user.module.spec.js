import axios from "axios";
import store from "@/store";
jest.mock("@/api");
import mockData from "../mockData";
import { resetState } from "./helpers";

import { types as rootActions } from "@/store/actions";
import { types as mutations } from "@/store/user/mutations";
import { types as actions } from "@/store/user/actions";
import actionImpls from "@/store/user/actions";
import { types as listsMutations } from "@/store/lists/mutations";

describe("Mutations", () => {
  beforeEach(resetState);

  it("Should correctly set token", () => {
    store.commit(mutations.SET_TOKEN, mockData.AUTH_RESPONSE.accessToken);

    expect(store.state.user.token).toBe(mockData.AUTH_RESPONSE.accessToken);
    expect(axios.defaults.headers.common["Authorization"]).toBe(
      `Bearer ${mockData.AUTH_RESPONSE.accessToken}`
    );
  });

  it("Should correctly set current user", () => {
    store.commit(mutations.SET_CURRENT_USER, mockData.NEW_USER);
    expect(store.state.user.current).toEqual(mockData.NEW_USER);
  });
});

describe("Actions", () => {
  beforeEach(resetState);

  it("Should register new user", async () => {
    await store.dispatch(actions.REGISTER_USER, mockData.NEW_USER);

    expect(store.state.user.token).toBeTruthy();
    expect(store.state.user.current.id).toBeDefined();
  });

  it("Should login", async () => {
    await store.dispatch(actions.LOGIN, mockData.NEW_USER);

    expect(store.state.user.token).toBeTruthy();
    expect(store.state.user.current.id).toBeDefined();
  });

  it("Should fetch user lists", async () => {
    const commit = jest.fn();

    const fakeStoreContext = {
      commit,
      dispatch: () => {},
      state: {
        current: { id: 0 }
      }
    };

    await actionImpls[actions.GET_USER_LISTS](fakeStoreContext);
    expect(commit).toBeCalledTimes(1);
    expect(commit).lastCalledWith(
      `lists/${listsMutations.SET_LISTS}`,
      expect.anything(),
      expect.anything()
    );

    await actionImpls[actions.GET_USER_LISTS](fakeStoreContext);
    expect(commit).toBeCalledTimes(2);
    expect(commit).lastCalledWith(
      `lists/${listsMutations.SET_LISTS}`,
      expect.anything(),
      expect.anything()
    );
  });

  it("Should populate list books", async () => {
    await store.dispatch(rootActions.LOAD_BOOKS);
    store.commit(`lists/${listsMutations.SET_LISTS}`, [
      Object.assign(mockData.TEST_LIST, { bookIds: [1, 2] }),
      Object.assign(mockData.TEST_LIST, { bookIds: [3, 4] })
    ]);

    store.dispatch(actions.POPULATE_LIST_BOOKS);

    expect(store.state.lists.lists.map(list => list.books)).toEqual([
      [expect.objectContaining({ id: 1 }), expect.objectContaining({ id: 2 })],
      [expect.objectContaining({ id: 3 }), expect.objectContaining({ id: 4 })]
    ]);
  });
});
