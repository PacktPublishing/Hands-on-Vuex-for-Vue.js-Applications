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
    <button
      class="button is-primary"
      @click="addNewUser"
      :disabled="!name.length || !bio.length"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      bio: ""
    };
  },

  methods: {
    addNewUser() {
      this.$store.dispatch("addUser", { name: this.name, bio: this.bio });
      this.name = "";
      this.bio = "";
    }
  }
};
</script>
