import axios from "axios";

export function getBooks() {
  return axios.get("/api/books");
}

export function registerUser(newUser) {
  return axios.post(`/api/register`, newUser);
}

export function login(credentials) {
  return axios.post("/api/login", credentials);
}

export function setToken(newToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

export function parseJWT(token) {
  const userJSON = atob(token.split(".")[1]);
  return JSON.parse(userJSON);
}

export function createList(newList) {
  return axios.post("/api/lists", newList);
}

export function getLists() {
  return axios.get(`/api/lists`);
}
