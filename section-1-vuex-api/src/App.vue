<template>
  <div class="wrapper">
    <div class="header">
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <router-link
            tag="li"
            active-class="pure-menu-selected"
            class="pure-menu-item"
            to="/state"
          >
            <a class="pure-menu-link">State</a>
          </router-link>

          <router-link
            tag="li"
            active-class="pure-menu-selected"
            class="pure-menu-item"
            to="/mutations"
          >
            <a class="pure-menu-link">Mutations</a>
          </router-link>

          <router-link
            tag="li"
            active-class="pure-menu-selected"
            class="pure-menu-item"
            to="/getters"
          >
            <a class="pure-menu-link">Getters</a>
          </router-link>

          <router-link
            tag="li"
            active-class="pure-menu-selected"
            class="pure-menu-item"
            to="/actions"
          >
            <a class="pure-menu-link">Actions</a>
          </router-link>
        </ul>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
.pure-button {
  margin: 5px;
}
</style>

<style scoped>
.content {
  padding: 0.5em 1em;
}
</style>
