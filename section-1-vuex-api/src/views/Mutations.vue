<template>
  <div>
    <h1>Changing <code>count</code></h1>

    <p>Count is <strong>{{ $store.state.count }}</strong></p>

    <button class="pure-button"
            @click="$store.commit('INCREMENT')">Increment</button>
    <button class="pure-button"
            @click="$store.commit('ADD', 10)">Add 10</button>
  </div>
</template>
