<template>
  <div>
    <h1 class="title">Books</h1>

    <div class="columns">
      <div class="column">
        <strong>Title</strong>
      </div>
      <div class="column">
        <strong>Author</strong>
      </div>
      <div class="column is-half">
        <strong>Description</strong>
      </div>
    </div>

    <div class="columns" v-for="book in books" :key="book.id">
      <div class="column">
        {{ book.title }}
      </div>
      <div class="column">
        {{ book.author }}
      </div>
      <div class="column is-half">
        {{ book.description }}
      </div>
    </div>

    <b-pagination
      :total="$store.state.books.length"
      :current.sync="currentPage"
      :per-page="itemsPerPage"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 10,
      currentPage: 1
    };
  },

  computed: {
    books() {
      return this.$store.state.books.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    }
  }
};
</script>
