<template>
  <div
    class="cursor-pointer flex-col bg-[#022045] duration-300 ease-in pt-10 w-64"
    v-if="asideStore.isAsideVisible"
  >
    <router-link to="/">
      <div class="flex justify-center">
        <img
          src="@/assets/images/greensexlogo2.svg"
          alt=""
          class="w-40"
        />
      </div>
    </router-link>
    <AsideLinks @click="handleCloseAside" />
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
import AsideLinks from "@/components/AsideLinks.vue";
export default {
  name: "Test",
  components: {
    AsideLinks,
  },

  setup() {
    const asideStore = useStore();
    const handleCloseAside = () => {
      asideStore.closeAside();
    };
    return {
      asideStore,
      handleCloseAside,
    };
  },
};
</script>

<style lang="scss" scoped></style>
