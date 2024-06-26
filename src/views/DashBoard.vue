<template>
  <div class="flex h-screen w-full">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="flex w-[100%] flex-col lg:w-4/5">
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
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import DashBoardCards from "@/components/DashBoardCards.vue";
export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
  },
};
</script>
