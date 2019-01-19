<template>
  <div>
    <h2>Getters</h2>

    <div>Count is {{ $store.state.count }}</div>
    <div>2x count is {{ $store.getters.doubledCount }}</div>
    <div>Count + 10 is {{ $store.getters.countPlusN(10) }}</div>

    <button class="pure-button"
            @click="$store.dispatch('addToCount', 1)">
      Increment
    </button>
  </div>
</template>
