export function examplePlugin(store) {
  store.subscribe((mutation, state) => {
    console.log(
      `Mutation "${mutation.type}" called with payload`,
      mutation.payload
    );
    console.log("Current state:", Object.assign({}, state));
  });

  store.subscribeAction((action, state) => {
    console.log(`Action "${action.type}" called with payload`, action.payload);
    console.log("Current state:", Object.assign({}, state));
  });

  store.subscribeAction({
    before(action, state) {
      console.log(`State before ${action.type}`, Object.assign({}, state));
    },
    after(action, state) {
      console.log(`State after ${action.type}`, Object.assign({}, state));
    }
  });

  const module = {
    state: {
      word: "apple"
    }
  };
  store.registerModule("module", module);
  store.unregisterModule("module");
}
