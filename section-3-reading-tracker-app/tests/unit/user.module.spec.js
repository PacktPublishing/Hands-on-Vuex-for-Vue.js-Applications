import store from "@/store";
import axios from "axios";
import { types as mutations } from "@/store/user/mutations";

const NEW_USER = {
  name: "John Doe",
  bio: "I like books",
  email: "test@email.com",
  password: "123456"
};

describe("Mutations", () => {
  it("Should correctly set token", () => {
    const NEW_TOKEN = "abcdef";
    store.commit(mutations.SET_TOKEN, NEW_TOKEN);

    expect(store.state.user.token).toBe(NEW_TOKEN);
    expect(axios.defaults.headers.common["Authorization"]).toBe(
      `Bearer ${NEW_TOKEN}`
    );
  });

  it("Should correctly set current user", () => {
    store.commit(mutations.SET_CURRENT_USER, NEW_USER);
    expect(store.state.user.current).toBe(NEW_USER);
  });
});
