import store from "@/store";

const DEFAULT_STATE = JSON.parse(JSON.stringify(store.state));
export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(DEFAULT_STATE)));
}
