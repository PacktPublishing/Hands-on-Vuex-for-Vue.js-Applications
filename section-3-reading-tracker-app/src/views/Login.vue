<template>
  <div>
    <h1 class="title">Login</h1>
    <b-field label="Email Address">
      <b-input type="email" v-model="credentials.email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="credentials.password"></b-input>
    </b-field>
    <button class="button is-info" @click="login">
      Login
    </button>
  </div>
</template>

<script>
import { types as actions } from "@/store/user/actions";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async login() {
      await this.$store.dispatch(actions.LOGIN, this.credentials);
      this.$router.push("books");
    }
  }
};
</script>
