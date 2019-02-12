import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let uuid = 0;

export default new Vuex.Store({
  state: {
    shoppingList: [] // Array of items with { id, name, price, quantity}
  },

  mutations: {
    ADD_ITEM_TO_LIST(state, { name, price, quantity }) {
      state.shoppingList.push({
        id: uuid++,
        name,
        quantity: parseInt(quantity),
        price: parseFloat(price)
      });
    },

    REMOVE_ITEM_FROM_LIST(state, item) {
      const itemIndex = state.shoppingList.indexOf(item);
      state.shoppingList.splice(itemIndex, 1);
    },

    EDIT_ITEM_NAME(state, { item, newName }) {
      item.name = newName;
    }
  },

  getters: {
    totalQuantity(state) {
      return state.shoppingList.reduce((acc, item) => acc + item.quantity, 0);
    },

    totalPrice(state) {
      return state.shoppingList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }
  }
});
