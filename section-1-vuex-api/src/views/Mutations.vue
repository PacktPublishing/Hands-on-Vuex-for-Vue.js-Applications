<template>
  <div>
    <h1>Changing <code>count</code></h1>

    <div>Count is {{ $store.state.count }}</div>
    <button class="pure-button"
            @click="$store.commit('INCREMENT')">
      Increment
    </button>
    <button class="pure-button"
            @click="$store.commit('ADD_N', 10)">
      Add 10
    </button>
  </div>
</template>
