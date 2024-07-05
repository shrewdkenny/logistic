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
        <BusinessDashBoardHeader Heading="Settings" />
      </div>
      <div class="flex h-full flex-col bg-[#edeef7] p-4 lg:items-center">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cog"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-4"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M487.75 315.6l-42.6-24.6a192.62 192.62 0 0 0 0-70.2l42.6-24.6a12.11 12.11 0 0 0 5.5-14 249.2 249.2 0 0 0-54.7-94.6 12 12 0 0 0-14.8-2.3l-42.6 24.6a188.83 188.83 0 0 0-60.8-35.1V25.7A12 12 0 0 0 311 14a251.43 251.43 0 0 0-109.2 0 12 12 0 0 0-9.4 11.7v49.2a194.59 194.59 0 0 0-60.8 35.1L89.05 85.4a11.88 11.88 0 0 0-14.8 2.3 247.66 247.66 0 0 0-54.7 94.6 12 12 0 0 0 5.5 14l42.6 24.6a192.62 192.62 0 0 0 0 70.2l-42.6 24.6a12.08 12.08 0 0 0-5.5 14 249 249 0 0 0 54.7 94.6 12 12 0 0 0 14.8 2.3l42.6-24.6a188.54 188.54 0 0 0 60.8 35.1v49.2a12 12 0 0 0 9.4 11.7 251.43 251.43 0 0 0 109.2 0 12 12 0 0 0 9.4-11.7v-49.2a194.7 194.7 0 0 0 60.8-35.1l42.6 24.6a11.89 11.89 0 0 0 14.8-2.3 247.52 247.52 0 0 0 54.7-94.6 12.36 12.36 0 0 0-5.6-14.1zm-231.4 36.2a95.9 95.9 0 1 1 95.9-95.9 95.89 95.89 0 0 1-95.9 95.9z"
                class="text-[#b8b8b8]"
              ></path>
              <path
                fill="currentColor"
                d="M256.35 319.8a63.9 63.9 0 1 1 63.9-63.9 63.9 63.9 0 0 1-63.9 63.9z"
                class="text-[#393939]"
              ></path>
            </g>
          </svg>
          <h1>Settings</h1>
        </div>
        <div class="mt-3 flex flex-col rounded-xl bg-[#ffffff] p-6 lg:w-[50%]">
          <h1 class="font-medium">Change Password</h1>
          <div class="mt-5 flex flex-col gap-4">
            <div>
              <label for="Password" class="text-sm">New Password</label>
              <Input
                type="password"
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <div>
              <label for="Confimr Password" class="text-sm"
                >Confirm Password</label
              >
              <Input
                type="password"
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <Button
              variant="outline"
              class="bg-[#66cc66] px-20 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
              >Change Password</Button
            >

            <h1 class="mt-5 font-normal tracking-wider">Contact Details</h1>
            <p class="text-md text-[#40bd57]">+234 814 337 1347</p>
            <div class="flex gap-1">
              <img src="@/assets/images/instagram.svg" alt="" class="w-5" />
              <p class="text-[#40bd57]">@greensexlogistic</p>
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
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/stores/store";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    AsideSmallScreen,
    BusinessDashBoardHeader,
    Input,
    Button,
    Textarea,
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
