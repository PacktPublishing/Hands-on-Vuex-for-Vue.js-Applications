<template>
  <div>
    <h1 class="title">Login</h1>
    <b-select :value="$store.state.currentUser.id">
      <option
        v-for="user in $store.state.users"
        :value="user.id"
        :key="user.id"
      >
        {{ user.name }}
      </option>
    </b-select>
  </div>
</template>
