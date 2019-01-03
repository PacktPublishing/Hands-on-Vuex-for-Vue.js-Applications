<template>
  <div>
    <h1>Checking the value of <code>count</code></h1>
    <ul>
      <li>Count using <code>$store</code>: {{ $store.state.count }}</li>
      <li>Count using <code>import store</code>: {{ store.state.count }}</li>
      <li>Count using <code>mapState</code>: {{ count }}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";

export default {
  data() {
    return { store };
  },

  computed: {
    ...mapState(["count"])
  }
};
</script>

