<template>
  <div>
    <h2>Getters</h2>

    <div>Count is {{ $store.state.count }}</div>

    <button class="pure-button"
            @click="$store.dispatch('addToCount', 1)">
      Increment
    </button>
  </div>
</template>
