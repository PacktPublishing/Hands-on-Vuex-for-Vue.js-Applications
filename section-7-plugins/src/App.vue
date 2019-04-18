<template>
  <div id="app">
    <h1>Check the Console</h1>
    <p>
      Current Value: <strong>{{ $store.state.value }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "app"
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
