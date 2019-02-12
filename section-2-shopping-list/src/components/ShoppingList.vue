<template>
  <div>
    <h3>Add Item</h3>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Item name</label>
          <input type="text" v-model="newItem.name" id="name" />
        </div>

        <div class="pure-control-group">
          <label for="price">Item Price</label>
          <input type="number" v-model="newItem.price" id="price" step="0.01" />
        </div>

        <div class="pure-control-group">
          <label for="quantity">Item Quantity</label>
          <input type="number" v-model="newItem.quantity" id="quantity" />
        </div>

        <div class="pure-controls">
          <button
            @click="submitForm"
            :disabled="!newItem.name || !newItem.price || !newItem.quantity"
            type="button"
            class="pure-button pure-button-primary"
          >
            Add Item
          </button>
        </div>
      </fieldset>
    </form>

    <h3>Items</h3>
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

<script>
const INITIAL_ITEM = {
  name: "",
  price: null,
  quantity: 1
};

export default {
  data() {
    return {
      newItem: Object.assign({}, INITIAL_ITEM)
    };
  },

  methods: {
    submitForm() {
      this.$store.commit("ADD_ITEM_TO_LIST", this.newItem);
      this.newItem = Object.assign({}, INITIAL_ITEM);
    }
  }
};
</script>
