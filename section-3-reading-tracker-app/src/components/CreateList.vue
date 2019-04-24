<template>
  <div class="container">
    <h5 class="title is-5">
      New List
    </h5>

    <b-field grouped>
      <b-input placeholder="Name" v-model="name"></b-input>
      <b-input
        placeholder="Description"
        v-model="description"
        expanded
      ></b-input>
      <button class="button is-info" @click="submitNewList">
        Add
      </button>
    </b-field>
  </div>
</template>

<script>
import { types as actions } from "@/store/lists/actions";

export default {
  data() {
    return { name: "", description: "" };
  },

  methods: {
    submitNewList() {
      this.$store.dispatch(`entities/lists/${actions.CREATE_LIST}`, {
        name: this.name,
        description: this.description
      });
      this.name = "";
      this.description = "";
    }
  }
};
</script>
