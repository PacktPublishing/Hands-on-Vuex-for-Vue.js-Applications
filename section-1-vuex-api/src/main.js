import Vue from "vue";
import router from "./router";
import "purecss/build/pure-min.css";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
