<template>
  <div>
    <h1 class="title">List Contents: {{ list.name }}</h1>
    <books-list :books="books"></books-list>
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
      list: this.$store.getters.listById(this.$route.params.id)
    };
  },

  computed: {
    books() {
      return this.list ? this.$store.getters.booksForList(this.list) : [];
    }
  }
};
</script>
