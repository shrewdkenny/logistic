<template>
  <div class="flex h-screen w-full">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="flex w-full flex-col  lg:w-4/5">
      <div>
        <BusinessDashBoardHeader Heading="New Dispatch" />
      </div>
      <div class="bg-[#eef0f8] px-5">
        <NewDispatchForm />
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import DashBoardCards from "@/components/DashBoardCards.vue";
import NewDispatchForm from "@/components/NewDispatchForm.vue";
export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
    NewDispatchForm,
  },
};
</script>
