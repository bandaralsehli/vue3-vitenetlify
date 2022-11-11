import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alert",
  state: () => ({
    alert: null,
  }),
  actions: {
    success(message) {
      this.alert = { message, type: "bg-blue-100" };
    },
    error(message) {
      this.alert = { message, type: "bg-red-100" };
    },
    clear() {
      this.alert = null;
    },
  },
});
