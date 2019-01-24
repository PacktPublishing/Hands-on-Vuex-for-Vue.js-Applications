<template>
  <div>
    <h2>Getters</h2>

    <div>Count is {{ $store.state.count }}</div>
    <div>2x count is {{ doubledCount }}</div>
    <div>Count + 10 is {{ countPlusN(10) }}</div>

    <button class="pure-button" @click="$store.dispatch('addToCount', 1)">
      Increment
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubledCount", "countPlusN"])
  }
};
</script>
