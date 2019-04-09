import BOOKS from "@/../backend/books";

// Use getters everywhere to return new instance of object each time
export default {
  get BOOKS() {
    return BOOKS;
  },

  get NEW_USER() {
    return {
      name: "John Doe",
      bio: "I like books",
      email: "test@email.com",
      password: "123456"
    };
  },

  get AUTH_RESPONSE() {
    return {
      accessToken: `abcd.${btoa(JSON.stringify({ sub: 0 }))}.efgh`
    };
  },

  get SERVER_USER() {
    return Object.assign(this.NEW_USER, {
      id: 0,
      listIds: []
    });
  },

  get TEST_LIST() {
    return {
      id: 0,
      userId: 0,
      name: "Cool Books",
      description: "Books I think are cool",
      bookIds: [],
      books: []
    };
  }
};
