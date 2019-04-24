<template>
  <div>
    <h1 class="title">Lists</h1>

    <div class="columns">
      <div class="column"><strong>Title</strong></div>
      <div class="column is-three-quarters"><strong>Description</strong></div>
    </div>

    <div
      class="columns"
      v-for="list in $store.getters['entities/lists/all']()"
      :key="list.id"
    >
      <div class="column">
        <router-link :to="{ path: `list/${list.id}` }">
          {{ list.name }}
        </router-link>
      </div>
      <div class="column is-three-quarters">{{ list.description }}</div>
    </div>

    <create-list></create-list>
  </div>
</template>

<script>
import CreateList from "../components/CreateList.vue";

export default {
  components: {
    CreateList
  }
};
</script>
