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
      <button class="button is-primary">
        Add
      </button>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "", description: "" };
  }
};
</script>
