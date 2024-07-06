<template>
  <div class="flex h-dvh w-full">
    <div class="hidden h-full lg:flex lg:w-[18%]">
      <BusinessDashBoardAside />
    </div>

    <div class="fixed z-50 flex h-full cursor-pointer lg:hidden">
      <AsideSmallScreen />
    </div>
    <div
      @click="handleCloseAside"
      v-if="asideStore.isAsideVisible"
      class="fixed inset-0 z-10 h-full cursor-pointer bg-black bg-opacity-35"
    ></div>
    <div class="flex w-full flex-col">
      <div>
        <BusinessDashBoardHeader Heading="Welcome" />
      </div>

      <div class="h-full bg-[#eef0f8]">
        <DashBoardCards />
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import AsideSmallScreen from "@/components/AsideSmallScreen.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import DashBoardCards from "@/components/DashBoardCards.vue";
import { useStore } from "@/stores/store";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
    AsideSmallScreen,
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
