import Vue from "vue";
import Router from "vue-router";

import Lists from "./views/Lists.vue";
import ListDetails from "./views/ListDetails.vue";
import Books from "./views/Books.vue";
import AddUser from "./views/AddUser.vue";
import Profile from "./views/Profile.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/lists", component: Lists },
    { path: "/list/:id", component: ListDetails },
    { path: "/books", component: Books },
    { path: "/adduser", component: AddUser },
    { path: "/profile", component: Profile },
    { path: "/login", component: Login }
  ]
});
