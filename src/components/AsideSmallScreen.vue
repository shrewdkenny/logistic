<template>
  <div
    class="cursor-pointer flex-col bg-[#022045] duration-300 ease-in"
    v-if="asideStore.isAsideVisible"
  >
    <router-link to="/">
      <div class="px-10">
        <img
          src="@/assets/images/greensexlogo2.svg"
          alt=""
          class="mt-10 w-[150px]"
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
