import Vue from "vue";
import Vuex from "vuex";

import userModule from "./user-module";
import emailsModule from "./emails-module";
import calendarModule from "./calendar-module";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    user: userModule,
    emails: emailsModule,
    calendar: calendarModule
  }
});
