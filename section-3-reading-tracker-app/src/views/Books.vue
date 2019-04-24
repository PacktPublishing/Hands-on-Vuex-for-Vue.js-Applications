<template>
  <div>
    <h1 class="title">Books</h1>

    <books-list :books="currentBooksPage"></books-list>
    <b-pagination
      :total="$store.getters['entities/books/all']().length"
      :current.sync="currentPage"
      :per-page="itemsPerPage"
    >
    </b-pagination>
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
      itemsPerPage: 10,
      currentPage: 1,
      listSearch: ""
    };
  },

  computed: {
    currentBooksPage() {
      return this.$store.getters["entities/books/query"]()
        .with("lists")
        .offset((this.currentPage - 1) * this.itemsPerPage)
        .limit(this.itemsPerPage)
        .get();
    }
  }
};
</script>
