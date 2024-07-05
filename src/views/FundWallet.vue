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
        <BusinessDashBoardHeader Heading="Fund Wallet" />
      </div>
      <div class="flex h-fit flex-col bg-[#edeef7] p-5">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="wallet"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                class="text-[#abb0b7]"
              ></path>
              <path
                fill="currentColor"
                d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                class="text-[#7c8086]"
              ></path>
            </g>
          </svg>
          <h1>Fund Wallet</h1>
        </div>
        <div class="mt-3 flex flex-col rounded-xl bg-[#ffffff] p-5">
          <div class="lg:w-[30%]">
            <div
              class="flex w-[100%] flex-col rounded-xl bg-[#022045] px-5 py-3 text-[#ffffff]"
            >
              <div class="flex justify-between">
                <div>
                  <h1>Current Balance:</h1>
                  <p class="mt-2 text-3xl">N5,000</p>
                </div>
                <div class="h-5 w-5 bg-[#23e93e]"></div>
              </div>
              <div class="mt-5">**** **** **** 0365</div>
              <div class="mt-5 flex items-center justify-between">
                <h1 class="">Express Card</h1>
                <p>**/**</p>
              </div>
            </div>
            <div class="mt-5">
              <label for="Amount" class="text-sm">Amount</label>
              <Input />
            </div>
            <Button
              variant="outline"
              class="mt-5 w-full bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
              >Continue</Button
            >
          </div>
          <div class="mt-10 lg:w-[20%]">
            <h1 class="text-2xl font-medium">Wallet history</h1>
            <Input
              placeholder="1 records"
              class="mt-2 px-2 placeholder:text-xs placeholder:text-[#bebebe]"
            />
            <p class="mt-0.5 text-xs font-thin text-[#9b9b9b]">
              <span class="text-sm font-normal text-[#9a9a9a]">search</span>
              in all fields
            </p>
          </div>
          <div class="mt-9">
            <div
              class="flex items-center gap-[50%] text-[14px] font-semibold text-[#b2b2b4]"
            >
              <h1>Amount</h1>
              <h1>Status</h1>
            </div>
            <div
              class="mt-4 flex items-center gap-[50%] border-t py-3 text-[14px]"
            >
              <div class="flex flex-col gap-1">
                <h1 class="">NGN 5,000</h1>
                <p class="text-[#b2b1b1]">July 2nd, 2024</p>
              </div>
              <p>credit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import AsideSmallScreen from "@/components/AsideSmallScreen.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import DashBoardCards from "@/components/DashBoardCards.vue";
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";
import { useStore } from "@/stores/store";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
    Input,
    Button,
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
