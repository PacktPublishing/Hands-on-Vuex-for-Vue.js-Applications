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

  data() {
    return {
      list: this.$store.getters["lists/byId"](this.$route.params.id)
    };
  }
};
</script>
