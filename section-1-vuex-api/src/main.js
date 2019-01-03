import Vue from "vue";
import router from "./router";
import store from "./store"
import "purecss/build/pure-min.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
