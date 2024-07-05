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
        <BusinessDashBoardHeader Heading="Order History" />
      </div>

      <div class="flex h-full flex-col bg-[#eef0f8] p-4">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M141.68 400.23a184 184 0 1 0-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 0 1-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A247.14 247.14 0 0 1 256 8c136.81 0 247.75 110.78 248 247.53S392.82 503.9 256.18 504a247 247 0 0 1-155.82-54.91 24 24 0 0 1-1.84-35.61l11.27-11.27a24 24 0 0 1 31.89-1.98z"
                class="text-[#d1d3d5]"
              ></path>
              <path
                fill="currentColor"
                d="M288 152v104.35L328.7 288a24 24 0 0 1 4.21 33.68l-9.82 12.62a24 24 0 0 1-33.68 4.21L224 287.65V152a24 24 0 0 1 24-24h16a24 24 0 0 1 24 24z"
                class="text-[#647389]"
              ></path>
            </g>
          </svg>
          <h1>Order History</h1>
        </div>

        <div>You have no order history.</div>
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
