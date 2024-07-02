<template>
  <div class="flex h-screen w-full">
    <div class="lg:w-[18%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>
    <div class="flex w-full flex-col lg:w-[90%]">
      <div>
        <BusinessDashBoardHeader Heading="Pending Orders" />
      </div>
      <div class="h-full bg-[#eef0f8] p-4">You have no order history.</div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
  },
};
</script>
