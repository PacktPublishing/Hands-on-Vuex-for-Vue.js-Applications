<template>
  <div>
    <h1 class="title">List Contents: {{ list.name }}</h1>
    <books-list :books="list.books"></books-list>
  </div>
</template>

<script>
import BooksList from "../components/BooksList.vue";

export default {
  components: {
    BooksList
  },

  computed: {
    list() {
      return this.$store.getters["entities/lists/query"]()
        .with("books")
        .find(this.$route.params.id);
    }
  }
};
</script>
