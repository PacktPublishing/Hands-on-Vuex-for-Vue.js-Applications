<template>
  <div>
    <h2>Changing <code>count</code> with actions</h2>

    <div>Count is {{ $store.state.count }}</div>

    <button class="pure-button" @click="addToCount(1)">
      Increment
    </button>

    <button class="pure-button" @click="updateTrivia()">
      Get Trivia
    </button>
    <div>{{ $store.state.trivia }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addToCount", "updateTrivia"])
  }
};
</script>
