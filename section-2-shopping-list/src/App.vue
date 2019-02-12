<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h1>Shopping List</h1>
      </div>
      <div class="content">
        <shopping-list></shopping-list>
        <items-summary></items-summary>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import ItemsSummary from "./components/ItemsSummary.vue";

export default {
  name: "App",
  components: {
    ShoppingList,
    ItemsSummary
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  .wrapper {
    margin: 10px;
  }
}
</style>
