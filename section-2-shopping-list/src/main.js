import "purecss/build/pure-min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
