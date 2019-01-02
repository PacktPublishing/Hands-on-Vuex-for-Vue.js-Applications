<template>
  <div class="wrapper">
    <div class="header">
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link to="/state"
                         class="pure-menu-link"
                         active-class="pure-menu-link-active">
              State
            </router-link>
          </li>

          <li class="pure-menu-item">
            <router-link to="/mutations"
                         class="pure-menu-link pure-menu-disabled"
                         active-class="pure-menu-link-active">
              Mutations
            </router-link>
          </li>

          <li class="pure-menu-item">
            <router-link to="/getters"
                         class="pure-menu-link pure-menu-disabled"
                         active-class="pure-menu-link-active">
              Getters
            </router-link>
          </li>
        </ul>
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
