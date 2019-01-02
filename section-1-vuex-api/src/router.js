import Vue from "vue";
import Router from "vue-router";
import State from "./views/State.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/state",
      name: "state",
      component: State
    }
  ]
});
