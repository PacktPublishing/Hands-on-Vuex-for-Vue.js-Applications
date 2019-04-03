<template>
  <div>
    <h1 class="title">Add User</h1>

    <b-field label="Name">
      <b-input placeholder="Jane Austen" v-model="name"></b-input>
    </b-field>
    <b-field label="Bio">
      <b-input
        type="textarea"
        placeholder="Briefly describe yourself"
        v-model="bio"
        expanded
      ></b-input>
    </b-field>

    <hr />

    <b-field label="Email Address">
      <b-input type="email" v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="password"></b-input>
    </b-field>
    <button class="button is-info" @click="addNewUser" :disabled="!valid">
      Add
    </button>
  </div>
</template>

<script>
import { types as actions } from "@/store/user/actions";

export default {
  data() {
    return {
      name: "",
      bio: "",
      email: "",
      password: ""
    };
  },

  methods: {
    async addNewUser() {
      await this.$store.dispatch(actions.REGISTER_USER, {
        name: this.name,
        bio: this.bio,
        email: this.email,
        password: this.password
      });
      this.$router.push("books");
    }
  },

  computed: {
    valid() {
      return (
        this.name.length &&
        this.bio.length &&
        this.email.length &&
        this.password.length
      );
    }
  }
};
</script>
