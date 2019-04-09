import axios from "axios";
import store from "@/store";
import mockData from "../mockData";
import { resetState } from "./helpers";
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

    await actionImpls[actions.GET_USER_LISTS]({
      commit,
      dispatch: () => {},
      state: {
        current: { id: 0 }
      }
    });

    expect(commit).toBeCalledTimes(1);
    expect(commit).lastCalledWith(`lists/${listsMutations.SET_LISTS}`, [], {
      root: true
    });

    await actionImpls[actions.GET_USER_LISTS]({
      commit,
      dispatch: () => {},
      state: {
        current: { id: 0 }
      }
    });

    expect(commit).toBeCalledTimes(2);
    expect(commit).lastCalledWith(`lists/${listsMutations.SET_LISTS}`, [], {
      root: true
    });
  });
});
