<template>
  <div class="flex">
    <BusinessDashBoardAside />
    <div class="flex flex-col">
      <div class="bg-[#ffffff]">
        <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
  },
};
</script>

<style lang="scss" scoped></style>
