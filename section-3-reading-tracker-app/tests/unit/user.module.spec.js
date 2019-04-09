import store from "@/store";
import axios from "axios";
import * as fakeData from "./helpers";
import { types as mutations } from "@/store/user/mutations";

describe("Mutations", () => {
  it("Should correctly set token", () => {
    store.commit(mutations.SET_TOKEN, fakeData.AUTH_RESPONSE.accessToken);

    expect(store.state.user.token).toBe(fakeData.AUTH_RESPONSE.accessToken);
    expect(axios.defaults.headers.common["Authorization"]).toBe(
      `Bearer ${fakeData.AUTH_RESPONSE.accessToken}`
    );
  });

  it("Should correctly set current user", () => {
    store.commit(mutations.SET_CURRENT_USER, fakeData.NEW_USER);
    expect(store.state.user.current).toBe(fakeData.NEW_USER);
  });
});
