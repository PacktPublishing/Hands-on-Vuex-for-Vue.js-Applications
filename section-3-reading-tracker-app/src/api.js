import axios from "axios";

function extractData(response) {
  return response.data;
}

export function getBooks() {
  return axios.get("/api/books").then(extractData);
}

export function registerUser(newUser) {
  return axios.post(`/api/register`, newUser).then(extractData);
}

export function login(credentials) {
  return axios.post("/api/login", credentials).then(extractData);
}

export function getUser(userId) {
  return axios.get(`/api/users/${userId}`).then(extractData);
}

export function setToken(newToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

export function parseJWT(token) {
  const userJSON = atob(token.split(".")[1]);
  return JSON.parse(userJSON);
}

export function createList(newList) {
  return axios.post("/api/lists", newList).then(extractData);
}

export function getLists() {
  return axios.get(`/api/lists`).then(extractData);
}

export function updateList(listId, update) {
  return axios.patch(`/api/lists/${listId}`, update).then(extractData);
}
