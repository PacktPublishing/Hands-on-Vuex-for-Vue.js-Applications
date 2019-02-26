<template>
  <div class="wrapper">
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/books" active-class="is-active">
            Books
          </router-link>

          <router-link class="navbar-item" to="/lists" active-class="is-active">
            Lists
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                class="button is-primary"
                to="/adduser"
                active-class="is-active"
              >
                <strong>
                  Add User
                </strong>
              </router-link>

              <router-link
                class="button is-light"
                to="/login"
                active-class="is-active"
              >
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 10px;
}
</style>
