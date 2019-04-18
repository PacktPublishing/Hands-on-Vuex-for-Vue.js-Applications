<template>
  <div>
    <h2>Changing <code>count</code> with actions</h2>

    <div>Count is {{ $store.state.count }}</div>

    <button class="pure-button" @click="$store.commit('INCREMENT')">
      Increment
    </button>
  </div>
</template>
