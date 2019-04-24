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
      <div class="column is-one-third">
        <strong>Lists</strong>
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
      <div class="column is-one-third">
        <b-field>
          <b-taginput
            placeholder="Add book to list"
            :value="$store.getters['entities/lists/forBook'](book)"
            @typing="listSearch = $event"
            autocomplete
            :data="filteredLists"
            field="name"
            @add="addToList(book, $event)"
            @remove="removeFromList(book, $event)"
            :open-on-focus="true"
            :keep-first="true"
            type="is-info"
          >
          </b-taginput>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import { types as actions } from "@/store/lists/actions";

export default {
  data() {
    return {
      listSearch: ""
    };
  },

  props: {
    books: {
      type: Array,
      required: true
    }
  },

  computed: {
    filteredLists() {
      return this.$store.getters["entities/lists"]()
        .where(
          "name",
          name => name.toLowerCase().indexOf(this.listSearch.toLowerCase()) >= 0
        )
        .get();
    }
  },

  methods: {
    addToList(book, list) {
      this.$store.dispatch(`entities/lists/${actions.ADD_BOOK_TO_LIST}`, {
        book,
        list
      });
    },

    removeFromList(book, list) {
      this.$store.dispatch(`entities/lists/${actions.REMOVE_BOOK_FROM_LIST}`, {
        book,
        list
      });
    }
  }
};
</script>
