import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

if (window.Cypress) {
  window.app = app; // add global access to app for e2e tests
}
