import Vue from "vue";
import Router from "vue-router";
import State from "./views/State.vue";
import Mutations from "./views/Mutations.vue";
import Getters from "./views/Getters.vue";
import Actions from "./views/Actions.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/state",
      name: "state",
      component: State
    },

    {
      path: "/mutations",
      name: "mutations",
      component: Mutations
    },

    {
      path: "/getters",
      name: "getters",
      component: Getters
    },

    {
      path: "/actions",
      name: "actions",
      component: Actions
    }
  ]
});
