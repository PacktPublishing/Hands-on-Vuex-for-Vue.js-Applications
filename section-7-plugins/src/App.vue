<template>
  <div id="app">
    <h1>Check the Console</h1>
    <input type="text" v-model="value" />
  </div>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  name: "app",
  computed: {
    value: sync("value")
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
