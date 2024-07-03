import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isAsideVisible = ref(false);

  const toggleAsideVisibility = () => {
    isAsideVisible.value = !isAsideVisible.value;
  };

  return { isAsideVisible, toggleAsideVisibility };
});
