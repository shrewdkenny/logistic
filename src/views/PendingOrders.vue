<template>
  <div class="flex h-dvh w-full">
    <div class="hidden h-full lg:flex lg:w-[18%]">
      <BusinessDashBoardAside />
    </div>
    <div class="fixed z-50 flex cursor-pointer lg:hidden h-full">
      <AsideSmallScreen />
    </div>

    <div
      @click="handleCloseAside"
      v-if="asideStore.isAsideVisible"
      class="fixed inset-0 z-10 h-full cursor-pointer bg-black bg-opacity-35"
    ></div>

    <div class="flex w-full flex-col">
      <div>
        <BusinessDashBoardHeader Heading="Pending Orders" />
      </div>
      <div class="flex h-full flex-col bg-[#eef0f8] p-4">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-4"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="text-[#c4c5c7]"
              ></path>
              <path
                fill="currentColor"
                d="M348.49,321h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="text-[#4c535c]"
              ></path>
            </g>
          </svg>
          <h1>Pending Orders</h1>
        </div>
        You have no order history.
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import AsideSmallScreen from "@/components/AsideSmallScreen.vue";
import { useStore } from "@/stores/store";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
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
