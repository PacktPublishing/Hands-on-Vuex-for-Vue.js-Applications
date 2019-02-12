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
        price: parseInt(price)
      });
    },

    REMOVE_ITEM_FROM_LIST(state, { id }) {
      const itemIndex = state.shoppingList.find(item => item.id === id);
      state.shoppingList.slice(itemIndex, 1);
    },

    EDIT_ITEM_NAME(state, { item, newName }) {
      item.name = newName;
    }
  }
});
