<template>
  <div id="app">
    <h1>Introducing Modules</h1>
    <div>{{ $store.state.user.userName }}</div>
    <button @click="$store.commit('user/SET_USER_NAME', 'Jane Doe')">
      Change Name
    </button>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
