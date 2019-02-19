<template>
  <div class="wrapper">
    <div class="header">
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list"></ul>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 0.5em 1em;
}
</style>
