import store from "@/store";
import axios from "axios";
import * as mockData from "./helpers";
import { types as mutations } from "@/store/user/mutations";

describe("Mutations", () => {
  it("Should correctly set token", () => {
    store.commit(mutations.SET_TOKEN, mockData.AUTH_RESPONSE.accessToken);

    expect(store.state.user.token).toBe(mockData.AUTH_RESPONSE.accessToken);
    expect(axios.defaults.headers.common["Authorization"]).toBe(
      `Bearer ${mockData.AUTH_RESPONSE.accessToken}`
    );
  });

  it("Should correctly set current user", () => {
    store.commit(mutations.SET_CURRENT_USER, mockData.NEW_USER);
    expect(store.state.user.current).toBe(mockData.NEW_USER);
  });
});
