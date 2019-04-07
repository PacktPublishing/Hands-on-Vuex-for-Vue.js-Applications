import store from "@/store";
import { types as mutations } from "@/store/user/mutations";

describe("Mutations", () => {
  it("Should correctly set token", () => {
    const NEW_TOKEN = "abcdef";
    store.commit(mutations.SET_TOKEN, NEW_TOKEN);
    expect(store.state.user.token).toBe(NEW_TOKEN);
  });
});
