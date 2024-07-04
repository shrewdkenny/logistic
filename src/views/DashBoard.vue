<template>
  <div class="flex h-screen w-full">
    <div class="hidden lg:flex lg:w-[18%]">
      <BusinessDashBoardAside class="" />
    </div>

    <div class="fixed z-50 flex cursor-pointer lg:hidden ">
      <AsideSmallScreen />
    </div>

    <div class="flex w-full flex-col lg:w-[90%]">
      <div>
        <BusinessDashBoardHeader Heading="Welcome" />
      </div>

      <div class="bg-[#eef0f8]">
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

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
    AsideSmallScreen,
  },
};
</script>
