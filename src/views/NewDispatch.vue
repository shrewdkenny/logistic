<template>
  <div class="flex h-screen w-full">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="flex w-full flex-col lg:w-4/5">
      <div>
        <BusinessDashBoardHeader Heading="New Dispatch" />
      </div>
      <div class="flex flex-col bg-[#eef0f8] px-5">
        <div
          class=" mt-2 flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="box-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-4"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
                class="text-[#203859]"
              ></path>
              <path
                fill="currentColor"
                d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
                class="text-[#647389]"
              ></path>
            </g>
          </svg>
          <h1>New Dispatch</h1>
        </div>
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
