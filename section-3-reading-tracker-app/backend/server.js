const jsonServer = require("json-server");
const auth = require("json-server-auth");

const books = require("./books.json");

const server = jsonServer.create();
const router = jsonServer.router({
  users: [], // Array of {id, name, bio, email, password (encrypted), listIds (array) }
  lists: [], // Array of  { id, name, description, bookIds (array) }
  books
});
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);
server.listen(3001);
