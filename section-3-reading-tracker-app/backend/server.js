const jsonServer = require("json-server");
const auth = require("json-server-auth");

const books = require("./books.json");
const users = require("./users.json");
const lists = require("./lists.json");

const server = jsonServer.create();
const router = jsonServer.router({
  users,
  books,
  lists
});
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(auth)
server.use(router);
server.listen(3001);
