<template>
  <div>
    <h1>Checking the value of <code>count</code></h1>
    <ul>
      <li>Count using <code>$store</code>: {{ $store.state.count }}</li>
      <li>Count using <code>mapState</code>: {{ count }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["count"])
  }
};
</script>
