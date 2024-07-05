<template>
  <transition
    enter-active-class="transition transform ease-out duration-500"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition transform ease-in duration-300"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >

  
    <div
      v-if="asideStore.isAsideVisible"
      class="w-64 cursor-pointer flex-col bg-[#022045] pt-10"
    >
      <router-link to="/">
        <div class="flex justify-center">
          <img src="@/assets/images/greensexlogo2.svg" alt="" class="w-40" />
        </div>
      </router-link>
      <AsideLinks @click="handleCloseAside" />
    </div>
  </transition>
</template>

<script>
import { useStore } from "@/stores/store";
import AsideLinks from "@/components/AsideLinks.vue";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
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
    onMounted(() => {
      AOS.init();
    });
    return {
      asideStore,
      handleCloseAside,
    };
  },
};
</script>

<style lang="scss" scoped></style>
