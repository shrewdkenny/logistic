<template>
  <div class="flex w-full">
    <div class="w-[20%]"><BusinessDashBoardAside /></div>
    <div class="flex w-4/5 flex-col">
      <BusinessDashBoardHeader Heading="Welcome" />
      <div class="mt-5 flex items-center justify-center">
        <h1>create new dispatch</h1>
      </div>
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
