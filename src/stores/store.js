import { defineStore } from "pinia";

export const useStore = defineStore("Menu", {
  state: () => ({
    isAsideVisible: false,
  }),
  actions: {
    toogleAside() {
      this.isAsideVisible = !this.isAsideVisible;
    },
  },
});
