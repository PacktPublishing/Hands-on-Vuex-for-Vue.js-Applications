<template>
  <div id="app">
    <p>Name: {{ $store.state.currentUserName }}</p>
    <p>Number: {{ $store.state.currentUserPhoneNumber }}</p>

    <button @click="$store.dispatch('getUser')">
      Get User
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
  height: 100vh;
}

#app {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

button {
  cursor: pointer;
  font-size: 1em;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
}

button:active {
  background: black;
  color: white;
}

#app p {
  font-size: 2em;
}
</style>
