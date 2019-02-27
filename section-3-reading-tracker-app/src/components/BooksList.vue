<template>
  <div>
    <div class="columns">
      <div class="column">
        <strong>Title</strong>
      </div>
      <div class="column">
        <strong>Author</strong>
      </div>
      <div class="column is-1">
        <strong>
          Pages
        </strong>
      </div>
      <div class="column is-1">
        <strong>Published</strong>
      </div>
    </div>

    <div class="columns" v-for="book in books" :key="book.id">
      <div class="column">
        {{ book.title }}
      </div>
      <div class="column">
        {{ book.author }}
      </div>
      <div class="column is-1">
        {{ book.pageCount }}
      </div>
      <div class="column is-1">
        {{ new Date(book.publishedDate).getFullYear() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  }
};
</script>
