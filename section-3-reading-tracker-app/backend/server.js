const jsonServer = require("json-server");
const auth = require("json-server-auth");
const { rewriter } = require("json-server-auth/dist/guards");

const books = require("./books.json");

const server = jsonServer.create();
const router = jsonServer.router({
  users: [], // Array of {id, name, bio, email, password (encrypted), listIds (array) }
  lists: [], // Array of  { id, name, description, bookIds (array) }
  books
});
const permissions = rewriter({
  users: 600, // Only user can modify themself
  lists: 600, // Only owner of a list can access it
  books: 444 // Anyone can read, nobody can write
});

server.db = router.db;

server.use(jsonServer.defaults());
server.use(permissions);
server.use(auth);
server.use(router);
server.listen(3001);
