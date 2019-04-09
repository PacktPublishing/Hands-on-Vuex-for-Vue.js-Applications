import BOOKS from "@/../backend/books";

export default {
  BOOKS,

  NEW_USER: {
    name: "John Doe",
    bio: "I like books",
    email: "test@email.com",
    password: "123456"
  },

  AUTH_RESPONSE: {
    accessToken: `abcd.${btoa(JSON.stringify({ sub: 0 }))}.efgh`
  },

  get SERVER_USER() {
    return Object.assign(this.NEW_USER, {
      id: 0,
      listIds: []
    });
  },

  TEST_LIST: {
    id: 0,
    userId: 0,
    name: "Cool Books",
    description: "Books I think are cool",
    bookIds: [],
    books: []
  }
};
