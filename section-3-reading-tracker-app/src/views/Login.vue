<template>
  <div>
    <h1 class="title">Login</h1>
    <b-field grouped>
      <b-select v-model="selectedUser">
        <option
          v-for="user in $store.state.users"
          :value="user.id"
          :key="user.id"
        >
          {{ user.name }}
        </option>
      </b-select>
      <button
        class="button is-info"
        @click="$store.commit('SET_CURRENT_USER', { id: selectedUser })"
      >
        Login
      </button>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: this.$store.state.currentUser.id
    };
  }
};
</script>
