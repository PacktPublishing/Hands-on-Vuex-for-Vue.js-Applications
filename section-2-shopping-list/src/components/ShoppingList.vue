<template>
  <div>
    <table class="pure-table">
      <thead>
        <th>Item Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </thead>

      <tbody>
        <tr v-for="item in $store.state.shoppingList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
